import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import Statistics from './components/Statistics/Statistics';
import History from './components/History/History';

function App() {
    let problems = {
        temperature: false,
        co2: true,
        humidity: false,
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
        },
        {
            id: 2,
            temperature: 26,
            co2: 2000,
            humidity: 40,
            allergens: 4,
            isBad: true,
            date: 'Суббота, 06.04, 04:00',
        },
        {
            id: 3,
            temperature: 24,
            co2: 1800,
            humidity: 42,
            allergens: 4,
            isBad: false,
            date: 'Суббота, 06.04, 06:00',
        },
        {
            id: 4,
            temperature: 25,
            co2: 1820,
            humidity: 44,
            allergens: 3,
            isBad: false,
            date: 'Суббота, 06.04, 08:00',
        },
        {
            id: 5,
            temperature: 22,
            co2: 1800,
            humidity: 40,
            allergens: 5,
            isBad: true,
            date: 'Суббота, 06.04, 10:00',
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
                                    climates={climates}
                                />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
