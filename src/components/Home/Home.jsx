import './Home.scss';
import { NavLink } from 'react-router-dom';
import Climate from '../Climate/Climate';
import Pollen from '../Pollen/Pollen';
import ReloadButton from '../Buttons/ReloadButton';
import { Chart } from '../Chart/Chart';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import NotificationButton from '../Buttons/NotificationButton';

const Home = () => {
    let currentAdress = 'г. Уфа, ул. Р. Зорге 34/3';
    let currentDate = new Date()
        .toISOString()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.');
    let currentTime = new Date().toTimeString().slice(0, 9);
    let comfotableDays = 0;
    let temperature = 24;
    let carbonDioxide = 1900;
    let humidity = 40;
    let birch_pollen = 1;
    let grass_pollen = 4;
    let ambrosia_pollen = 0;
    return (
        <div>
            <div className="header">
                <div className="header__buttons">
                    <ReloadButton />
                    <NotificationButton />
                </div>
                <div className="header__info">
                    <div className="header__info__adress">{currentAdress}</div>
                    <div className="header__info__date">
                        <div className="header__info__date-time">
                            {currentTime}
                        </div>
                        <div>{currentDate}</div>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="content__climate">
                    <Climate name={'Температура'} stats={temperature + '℃'} />
                    <Climate
                        name={'CO2'}
                        stats={carbonDioxide + ' ppm'}
                        isBad
                    />
                    <Climate name={'Влажность'} stats={humidity + '%'} />
                </div>
                <div className="content__pollen">
                    <Pollen
                        name={'Пыльца березы, баллы'}
                        points={birch_pollen}
                    />
                    <Pollen
                        name={'Пыльца злаковых трав, баллы'}
                        points={grass_pollen}
                    />
                    <Pollen
                        name={'Пыльца амброзии, баллы'}
                        points={ambrosia_pollen}
                    />
                </div>
                <div className="content__statistics">
                    <NavLink
                        className="content__statistics-chart"
                        to="/stats"
                        draggable="false"
                    >
                        <button className="content__statistics-button">
                            <i className="bi-box-arrow-up-right"></i>
                        </button>
                        <Chart />
                    </NavLink>

                    <div className="content__statistics-comfort">
                        <h1>Комфортных дней</h1>
                        <div className="content__statistics-comfort-container">
                            <span>{comfotableDays}</span>
                            <NavLink to="/history" draggable="false">
                                <button>
                                    История
                                    <i className="bi-arrow-up-right"></i>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
