import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';
import History from './components/History/History';
import Recommendations from './components/Recommendations/Recommendations';

function App() {
    let problems = {
        temperature: false,
        high_temperature: false,
        low_temperature: false,
        co2: true,
        humidity: false,
        high_humidity: false,
        low_humidity: false,
    };
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
        },
        {
            id: 2,
            temperature: 26,
            co2: 2000,
            humidity: 40,
            allergens: 4,
            isBad: true,
            date: 'Суббота, 06.04, 04:00',
            temperatureCompare: '-',
            co2Compare: '+',
            humidityCompare: '=',
            allergensCompare: '+',
        },
        {
            id: 3,
            temperature: 24,
            co2: 1800,
            humidity: 42,
            allergens: 4,
            isBad: false,
            date: 'Суббота, 06.04, 06:00',
            temperatureCompare: '-',
            co2Compare: '-',
            humidityCompare: '+',
            allergensCompare: '=',
        },
        {
            id: 4,
            temperature: 25,
            co2: 1820,
            humidity: 44,
            allergens: 3,
            isBad: false,
            date: 'Суббота, 06.04, 08:00',
            temperatureCompare: '+',
            co2Compare: '+',
            humidityCompare: '+',
            allergensCompare: '-',
        },
        {
            id: 5,
            temperature: 22,
            co2: 1800,
            humidity: 40,
            allergens: 5,
            isBad: true,
            date: 'Суббота, 06.04, 10:00',
            temperatureCompare: '-',
            co2Compare: '-',
            humidityCompare: '-',
            allergensCompare: '+',
        },
    ];
    let current_temperature = 24;
    let current_co2 = 1900;
    let current_humidity = 40;
    let birch_pollen = 1;
    let grass_pollen = 4;
    let ambrosia_pollen = 0;
    let comfortableDays = 0;
    return (
        <>
            <div className="climath">
                <div className="climath__sidebar">
                    <Logo />
                    <div className="climath__sidebar-navbar">
                        <NavLink to="/" draggable="false">
                            <i className="bi-house-fill"></i>Главная
                        </NavLink>
                        <NavLink to="/stats" draggable="false">
                            <i className="bi-bar-chart-line-fill"></i>
                            Статистика
                        </NavLink>
                        <NavLink to="/history" draggable="false">
                            <i className="bi-clipboard-fill"></i>История
                        </NavLink>
                        <NavLink to="recommendations" draggable="false">
                            <i className="bi-bookmark-heart-fill"></i>
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
                                    temperature={current_temperature}
                                    co2={current_co2}
                                    humidity={current_humidity}
                                    birch={birch_pollen}
                                    grass={grass_pollen}
                                    ambrosia={ambrosia_pollen}
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
                            element={<Recommendations problems={problems} />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
