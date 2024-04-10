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
                            element={<History problems={problems} />}
                        />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
