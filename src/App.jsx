import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

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

function App() {
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
    let currentDate = new Date()
        .toISOString()
        .slice(5, 10)
        .split('-')
        .reverse()
        .join('.');
    let currentTime = new Date().toTimeString().slice(0, 5);

    const [settings, newSettings] = useState({
        updateInterval: 2,
        minTemperature: 20,
        maxTemperature: 28,
        minHumidity: 30,
        maxHumidity: 65,
        maxCO2: 1400,
        email: 'example@mail.com',
    });
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

    const onAddClimates = (obj) => {
        const newClimates = [...climates, obj];
        setClimates(newClimates);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/settings').then(({ data }) => {
            newSettings(data);
        });
    }, []);

    let interval = settings.updateInterval * 3600000;

    useEffect(() => {
        setLoading(true);
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
        axios.get('http://localhost:3000/climates').then(({ data }) => {
            setClimates(data);
        });
    }, []);

    setInterval(() => {
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
        axios.get('http://localhost:3000/climates').then(({ data }) => {
            setClimates(data);
        });
    }, interval);

    useEffect(() => {
        if (climate?.main) {
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
    }, [climate]);

    useEffect(() => {
        if (climate?.main && false) {
            axios
                .post('http://localhost:3000/climates', {
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
                    temperatureCompare:
                        climates.reverse()[0].temperature >
                        Math.round(climate.main.temp)
                            ? '-'
                            : climates.reverse()[0].temperature <
                              Math.round(climate.main.temp)
                            ? '+'
                            : '=',
                    co2Compare:
                        climates.reverse()[0].co2 > climate.main.co2
                            ? '-'
                            : climates.reverse()[0].co2 < climate.main.co2
                            ? '+'
                            : '=',
                    humidityCompare:
                        climates.reverse()[0].humidity > climate.main.humidity
                            ? '-'
                            : climates.reverse()[0].humidity <
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
                })
                .then(({ data }) => {
                    onAddClimates(data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [climate]);

    let comfortableDays = 0;

    return (
        <>
            {loading ? (
                'Loading...'
            ) : (
                <div className="climath">
                    <div className="climath__sidebar">
                        <Logo />
                        <div className="climath__sidebar-navbar">
                            <NavLink to="/" draggable="false">
                                <HomeRounded /> Главная
                            </NavLink>
                            <NavLink to="/stats" draggable="false">
                                <BarChartRounded />
                                Статистика
                            </NavLink>
                            <NavLink to="/history" draggable="false">
                                <ScheduleRounded />
                                История
                            </NavLink>
                            <NavLink to="recommendations" draggable="false">
                                <BookmarkAddedRounded />
                                Рекомендации
                            </NavLink>
                        </div>
                    </div>
                    <div className="climath__main">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        setClimate={setClimate}
                                        settings={settings}
                                        problems={problems}
                                        temperature={Math.round(
                                            climate.main.temp
                                        )}
                                        co2={climate.main.co2}
                                        humidity={climate.main.humidity}
                                        comfortableDays={comfortableDays}
                                        currentDate={currentDate}
                                        currentTime={currentTime}
                                    />
                                }
                            />
                            <Route
                                path="/stats"
                                element={
                                    <Statistics
                                        setClimate={setClimate}
                                        problems={problems}
                                    />
                                }
                            />
                            <Route
                                path="/history"
                                element={
                                    <History
                                        setClimate={setClimate}
                                        problems={problems}
                                        climates={climates.reverse()}
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
