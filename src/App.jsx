import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Auth from './components/Auth/Auth';
import AuthExit from './components/Auth/AuthExit';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import Statistics from './components/Statistics/Statistics';
import History from './components/History/History';
import Recommendations from './components/Recommendations/Recommendations';
import {
    HomeRounded,
    BarChartRounded,
    ScheduleRounded,
    BookmarkAddedRounded,
} from '@mui/icons-material';

import emailjs from '@emailjs/browser';

function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalTime);
    }, []);

    function getWeekDay(date) {
        let days = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ];

        return days[date.getDay()];
    }

    let currentDate = time
        .toISOString()
        .slice(5, 10)
        .split('-')
        .reverse()
        .join('.');
    let currentTime = time.toTimeString().slice(0, 5);
    let currentDateHome = time
        .toISOString()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.');
    let currentTimeHome = time.toTimeString().slice(0, 9);
    const [tokens, setTokens] = useState([]);
    const [authorized, setAuthorized] = useState(false);
    const [authToken, setAuthToken] = useState();
    const [w_comfort, set_w_comfort] = useState();
    const [comfortColor, setComfortColor] = useState();
    const [comfort, setComfort] = useState();
    const [settings, newSettings] = useState();
    const [loading, setLoading] = useState(true);
    const [climate, setClimate] = useState();
    const [climates, setClimates] = useState();
    const [problems, setProblems] = useState({
        temperature: false,
        high_temperature: false,
        low_temperature: false,
        co2: false,
        humidity: false,
        high_humidity: false,
        low_humidity: false,
    });

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    const sendEmail = () => {
        if (!loading && authorized && settings?.email) {
            let message = [];
            if (problems.temperature) {
                message.push('Температура');
            }
            if (problems.humidity) {
                message.push('Влажность');
            }
            if (problems.co2) {
                message.push('CO2');
            }
            let templateParams = {
                message: message.join('\n'),
                email: settings?.email,
            };
            emailjs
                .send('service_lhjfjh5', 'template_mrtwzra', templateParams, {
                    publicKey: 'ASjzy2rSEB1FMgxPD',
                })
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    }
                );
        }
    };

    const onAddClimates = (obj) => {
        const newClimates = [...climates, obj];
        setClimates(newClimates);
    };

    const getMethod = () => {
        if (authorized) {
            console.log('get запрос');
            setLoading(true);
            axios
                .get('http://localhost:3000/climates?authToken=' + authToken)
                .then(({ data }) => {
                    setClimates(data);
                });
            axios
                .get('http://localhost:3000/settings?id=' + authToken)
                .then(({ data }) => {
                    if (data.length) {
                        newSettings(data[0]);
                    } else {
                        axios.post('http://localhost:3000/settings', {
                            id: authToken,
                            updateInterval: 2,
                            minTemperature: 20,
                            maxTemperature: 28,
                            minHumidity: 30,
                            maxHumidity: 65,
                            maxCO2: 1400,
                            email: '',
                        });
                        newSettings({
                            id: authToken,
                            updateInterval: 2,
                            minTemperature: 20,
                            maxTemperature: 28,
                            minHumidity: 30,
                            maxHumidity: 65,
                            maxCO2: 1400,
                            email: '',
                        });
                    }
                });
            axios
                .get(
                    'https://api.openweathermap.org/data/2.5/weather?lat=54.75551&lon=55.99551&appid=4182aa5e1a7fe9cd80a2ff5e9c7cdb0c&units=metric',
                    {
                        transformResponse: [
                            function (data) {
                                let response = JSON.parse(data);

                                response.main.co2 = Math.round(
                                    getRandomArbitrary(0.4, 2) *
                                        response.main.pressure
                                );

                                return response;
                            },
                        ],
                    }
                )
                .then(({ data }) => {
                    setClimate(data);
                })
                .finally(() => {
                    setLoading(false);
                });
            sendEmail();
        }
    };

    useEffect(() => {
        axios.get('http://localhost:3000/tokens').then(({ data }) => {
            let newTokens = [];
            data.map((token) => {
                newTokens.push(token.id);
            });
            setTokens(newTokens);
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/authorized').then(({ data }) => {
            if (data.id) {
                setAuthToken(data.id);
                setAuthorized(true);
            }
        });
    }, [authorized]);

    useEffect(() => {
        if (authorized) {
            setLoading(true);
            axios
                .get('http://localhost:3000/climates?authToken=' + authToken)
                .then(({ data }) => {
                    setClimates(data);
                });
            axios
                .get('http://localhost:3000/settings?id=' + authToken)
                .then(({ data }) => {
                    if (data.length) {
                        newSettings(data[0]);
                        setInterval(() => {
                            getMethod();
                        }, data[0].updateInterval * 3600000);
                    } else {
                        axios.post('http://localhost:3000/settings', {
                            id: authToken,
                            updateInterval: 2,
                            minTemperature: 20,
                            maxTemperature: 28,
                            minHumidity: 30,
                            maxHumidity: 65,
                            maxCO2: 1400,
                            email: '',
                        });
                        newSettings({
                            id: authToken,
                            updateInterval: 2,
                            minTemperature: 20,
                            maxTemperature: 28,
                            minHumidity: 30,
                            maxHumidity: 65,
                            maxCO2: 1400,
                            email: '',
                        });
                    }
                });
            axios
                .get(
                    'https://api.openweathermap.org/data/2.5/weather?lat=54.75551&lon=55.99551&appid=4182aa5e1a7fe9cd80a2ff5e9c7cdb0c&units=metric',
                    {
                        transformResponse: [
                            function (data) {
                                let response = JSON.parse(data);

                                response.main.co2 = Math.round(
                                    getRandomArbitrary(0.4, 2) *
                                        response.main.pressure
                                );

                                return response;
                            },
                        ],
                    }
                )
                .then(({ data }) => {
                    setClimate(data);
                })
                .finally(() => {
                    setLoading(false);
                });
            // sendEmail();
        }
    }, [authorized]);

    useEffect(() => {
        if (climate?.main && authorized) {
            if (Math.round(climate.main.temp) < settings.minTemperature) {
                setProblems((p) => ({
                    ...p,
                    temperature: true,
                    low_temperature: true,
                }));
            } else if (
                Math.round(climate.main.temp) > settings.maxTemperature
            ) {
                setProblems((p) => ({
                    ...p,
                    temperature: true,
                    high_temperature: true,
                }));
            } else if (
                Math.round(climate.main.temp) >= settings.minTemperature &&
                Math.round(climate.main.temp) <= settings.maxTemperature
            ) {
                setProblems((p) => ({
                    ...p,
                    temperature: false,
                    low_temperature: false,
                    high_temperature: false,
                }));
            }

            if (climate.main.humidity > settings.maxHumidity) {
                setProblems((p) => ({
                    ...p,
                    humidity: true,
                    high_humidity: true,
                }));
            } else if (climate.main.humidity < settings.minHumidity) {
                setProblems((p) => ({
                    ...p,
                    humidity: true,
                    low_humidity: true,
                }));
            } else if (
                climate.main.humidity >= settings.minHumidity &&
                climate.main.humidity <= settings.maxHumidity
            ) {
                setProblems((p) => ({
                    ...p,
                    humidity: false,
                    low_humidity: false,
                    high_humidity: false,
                }));
            }

            if (climate.main.co2 > settings.maxCO2) {
                setProblems((p) => ({
                    ...p,
                    co2: true,
                }));
            } else if (climate.main.co2 <= settings.maxCO2) {
                setProblems((p) => ({
                    ...p,
                    co2: false,
                }));
            }
        }
    }, [climate, settings]);

    useEffect(() => {
        if (climate?.main && comfortColor) {
            axios
                .post(`http://localhost:3000/climates`, {
                    authToken: authToken,
                    temperature: Math.round(climate.main.temp),
                    co2: climate.main.co2,
                    humidity: climate.main.humidity,
                    isBad:
                        Math.round(climate.main.temp) <
                            settings.minTemperature ||
                        Math.round(climate.main.temp) >
                            settings.maxTemperature ||
                        climate.main.humidity < settings.minHumidity ||
                        climate.main.humidity > settings.maxHumidity ||
                        climate.main.co2 > settings.maxCO2,
                    date: `${getWeekDay(
                        new Date()
                    )}, ${currentDate}, ${currentTime}`,
                    currentDay: currentDate.slice(0, 2),
                    currentTime: currentTime,
                    currentWeekDay: getWeekDay(new Date()),
                    currentMonth: currentDate.slice(3, 5),
                    currentDate: currentDateHome,
                    temperatureCompare:
                        climates.length == 0
                            ? '='
                            : climates[climates.length - 1].temperature >
                              Math.round(climate.main.temp)
                            ? '-'
                            : climates[climates.length - 1].temperature <
                              Math.round(climate.main.temp)
                            ? '+'
                            : '=',
                    co2Compare:
                        climates.length == 0
                            ? '='
                            : climates[climates.length - 1].co2 >
                              climate.main.co2
                            ? '-'
                            : climates[climates.length - 1].co2 <
                              climate.main.co2
                            ? '+'
                            : '=',
                    humidityCompare:
                        climates.length == 0
                            ? '='
                            : climates[climates.length - 1].humidity >
                              climate.main.humidity
                            ? '-'
                            : climates[climates.length - 1].humidity <
                              climate.main.humidity
                            ? '+'
                            : '=',

                    temperatureBad:
                        Math.round(climate.main.temp) <
                            settings.minTemperature ||
                        Math.round(climate.main.temp) > settings.maxTemperature,
                    co2Bad: climate.main.co2 > settings.maxCO2,
                    humidityBad:
                        climate.main.humidity < settings.minHumidity ||
                        climate.main.humidity > settings.maxHumidity,
                    w_comfort: w_comfort,
                    comfortColor: comfortColor,
                })
                .then(({ data }) => {
                    onAddClimates(data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [climate]);

    return (
        <>
            {!authorized ? (
                <Auth
                    setAuthorized={setAuthorized}
                    setAuthToken={setAuthToken}
                    tokens={tokens}
                />
            ) : loading ? (
                'Loading...'
            ) : (
                <div className="climath">
                    <div className="climath__sidebar">
                        <Logo />
                        <div className="climath__sidebar-navbar">
                            <NavLink to="/" draggable="false">
                                <HomeRounded />
                                <span>Главная</span>
                            </NavLink>
                            <NavLink to="/stats" draggable="false">
                                <BarChartRounded />
                                <span>Статистика</span>
                            </NavLink>
                            <NavLink to="/history" draggable="false">
                                <ScheduleRounded />
                                <span>История</span>
                            </NavLink>
                            <NavLink to="recommendations" draggable="false">
                                <BookmarkAddedRounded />
                                <span>Рекомендации</span>
                            </NavLink>
                        </div>
                        <AuthExit
                            authToken={authToken}
                            setAuthToken={setAuthToken}
                            setAuthorized={setAuthorized}
                        />
                    </div>
                    <div className="climath__main">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        authToken={authToken}
                                        comfort={comfort}
                                        setComfort={setComfort}
                                        sendEmail={sendEmail}
                                        w_comfort={w_comfort}
                                        set_w_comfort={set_w_comfort}
                                        setComfortColor={setComfortColor}
                                        climate={climate}
                                        climates={climates}
                                        setClimate={setClimate}
                                        settings={settings}
                                        newSettings={newSettings}
                                        problems={problems}
                                        temperature={Math.round(
                                            climate.main.temp
                                        )}
                                        co2={climate.main.co2}
                                        humidity={climate.main.humidity}
                                        currentDate={currentDateHome}
                                        currentTime={currentTimeHome}
                                    />
                                }
                            />
                            <Route
                                path="/stats"
                                element={
                                    <Statistics
                                        authToken={authToken}
                                        currentDateHome={currentDateHome}
                                        sendEmail={sendEmail}
                                        climates={climates}
                                        settings={settings}
                                        newSettings={newSettings}
                                        setClimate={setClimate}
                                        problems={problems}
                                        currentDay={currentDate.slice(0, 2)}
                                    />
                                }
                            />
                            <Route
                                path="/history"
                                element={
                                    <History
                                        sendEmail={sendEmail}
                                        settings={settings}
                                        newSettings={newSettings}
                                        setClimate={setClimate}
                                        problems={problems}
                                        climates={climates}
                                    />
                                }
                            />
                            <Route
                                path="/recommendations"
                                element={
                                    <Recommendations problems={problems} />
                                }
                            />
                        </Routes>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
