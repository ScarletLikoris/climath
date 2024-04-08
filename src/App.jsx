import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import './App.scss';

function App() {
    return (
        <>
            <div className="climath">
                <div className="climath__sidebar">
                    <Logo />
                    <ul>
                        <li className="active">
                            <i className="bi-house-fill"></i>Главная
                        </li>
                        <li>
                            <i className="bi-bar-chart-line-fill"></i>Статистика
                        </li>
                        <li>
                            <i className="bi-clipboard-fill"></i>История
                        </li>
                        <li>
                            <i className="bi-bookmark-heart-fill"></i>
                            Рекомендации
                        </li>
                    </ul>
                </div>
                <div className="climath__main">
                    <Home />
                </div>
            </div>
        </>
    );
}

export default App;
