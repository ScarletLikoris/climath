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
    const [loading, setLoading] = useState(true);
    const [climate, setClimate] = useState();
    const [problems, setProblems] = useState({
        temperature: false,
        high_temperature: false,
        low_temperature: false,
        co2: false,
        humidity: false,
        high_humidity: false,
        low_humidity: false,
    });
    // const [climates, setClimates] = useState([]);
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
    }, []);

    useEffect(() => {
        if (climate?.main) {
            if (climate.main.temp < 20) {
                setProblems((p) => ({
                    ...p,
                    temperature: true,
                    low_temperature: true,
                }));
            } else if (climate.main.temp > 28) {
                setProblems((p) => ({
                    ...p,
                    temperature: true,
                    high_temperature: true,
                }));
            } else if (climate.main.temp >= 20 && climate.main.temp <= 28) {
                setProblems((p) => ({
                    ...p,
                    temperature: false,
                    low_temperature: false,
                    high_temperature: false,
                }));
            }

            if (climate.main.humidity > 65) {
                setProblems((p) => ({
                    ...p,
                    humidity: true,
                    high_humidity: true,
                }));
            } else if (climate.main.humidity < 30) {
                setProblems((p) => ({
                    ...p,
                    humidity: true,
                    low_humidity: true,
                }));
            } else if (
                climate.main.humidity >= 30 &&
                climate.main.humidity <= 65
            ) {
                setProblems((p) => ({
                    ...p,
                    humidity: true,
                    low_humidity: true,
                    high_humidity: false,
                }));
            }

            if (climate.main.co2 > 1400) {
                setProblems((p) => ({
                    ...p,
                    co2: true,
                }));
            } else if (climate.main.co2 <= 1400) {
                setProblems((p) => ({
                    ...p,
                    co2: false,
                }));
            }
        }
    }, [climate]);

    // useEffect(() => {
    //     if (climate?.main) {
    //         console.log(climate.main.temp);
    //         if (climate.main.temp < 20) {
    //             problems.temperature = true;
    //             problems.low_temperature = true;
    //             setProblems(problems);
    //         } else if (climate.main.temp > 28) {
    //             problems.temperature = true;
    //             problems.high_temperature = true;
    //             setProblems(problems);
    //         } else if (climate.main.temp >= 20 && climate.main.temp <= 28) {
    //             problems.temperature = false;
    //             problems.low_temperature = false;
    //             problems.high_temperature = false;
    //             setProblems(problems);
    //         }

    //         if (climate.main.humidity > 65) {
    //             problems.humidity = true;
    //             problems.high_humidity = true;
    //             setProblems(problems);
    //         } else if (climate.main.humidity < 30) {
    //             problems.humidity = true;
    //             problems.low_humidity = true;
    //             setProblems(problems);
    //         } else if (
    //             climate.main.humidity >= 30 &&
    //             climate.main.humidity <= 65
    //         ) {
    //             problems.humidity = false;
    //             problems.low_humidity = false;
    //             problems.high_humidity = false;
    //             setProblems(problems);
    //         }

    //         if (climate.main.current_co2 > 1400) {
    //             problems.co2 = true;
    //             setProblems(problems);
    //         } else if (climate.main.current_co2 <= 1400) {
    //             problems.co2 = false;
    //             setProblems(problems);
    //         }
    //     }
    // }, [climate]);

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    let climates = [
        {
            id: 1,
            temperature: 28,
            co2: 1900,
            humidity: 40,
            allergens: 1,
            isBad: false,
            date: 'Суббота, 06.04, 02:00',
            temperatureCompare: '=',
            co2Compare: '=',
            humidityCompare: '=',
            allergensCompare: '=',
            temperatureBad: false,
            co2Bad: false,
            humidityBad: false,
            allergensBad: false,
        },
        {
            id: 2,
            temperature: 26,
            co2: 2000,
            humidity: 40,
            allergens: 2,
            date: 'Суббота, 06.04, 04:00',
            temperatureCompare: '-',
            co2Compare: '+',
            humidityCompare: '=',
            allergensCompare: '+',
            isBad: true,
            temperatureBad: false,
            co2Bad: true,
            humidityBad: false,
            allergensBad: false,
        },
        {
            id: 3,
            temperature: 24,
            co2: 1800,
            humidity: 42,
            allergens: 2,
            date: 'Суббота, 06.04, 06:00',
            temperatureCompare: '-',
            co2Compare: '-',
            humidityCompare: '+',
            allergensCompare: '=',
            isBad: false,
            temperatureBad: false,
            co2Bad: false,
            humidityBad: false,
            allergensBad: false,
        },
        {
            id: 4,
            temperature: 25,
            co2: 1820,
            humidity: 44,
            allergens: 1,
            date: 'Суббота, 06.04, 08:00',
            temperatureCompare: '+',
            co2Compare: '+',
            humidityCompare: '+',
            allergensCompare: '-',
            isBad: false,
            temperatureBad: false,
            co2Bad: false,
            humidityBad: false,
            allergensBad: false,
        },
        {
            id: 5,
            temperature: 22,
            co2: 1800,
            humidity: 40,
            allergens: 5,
            date: 'Суббота, 06.04, 10:00',
            temperatureCompare: '-',
            co2Compare: '-',
            humidityCompare: '-',
            allergensCompare: '+',
            isBad: true,
            temperatureBad: true,
            co2Bad: false,
            humidityBad: false,
            allergensBad: true,
        },
    ];

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
                                        problems={problems}
                                        temperature={Math.round(
                                            climate.main.temp
                                        )}
                                        co2={climate.main.co2}
                                        humidity={climate.main.humidity}
                                        comfortableDays={comfortableDays}
                                    />
                                }
                            />
                            <Route
                                path="/stats"
                                element={<Statistics problems={problems} />}
                            />
                            <Route
                                path="/history"
                                element={
                                    <History
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
