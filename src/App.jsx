import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';

function App() {
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
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/stats" element={<Home />} /> */}
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
