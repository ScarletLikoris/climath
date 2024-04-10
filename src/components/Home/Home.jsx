import './Home.scss';
import { NavLink } from 'react-router-dom';
import Climate from '../Climate/Climate';
import Pollen from '../Pollen/Pollen';
import ReloadButton from '../Buttons/ReloadButton';
import { Chart } from '../Chart/Chart';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import NotificationButton from '../Buttons/NotificationButton';

const Home = ({
    problems,
    co2,
    temperature,
    humidity,
    birch,
    grass,
    ambrosia,
    comfortableDays,
}) => {
    let currentAdress = 'г. Уфа, ул. Р. Зорге 34/3';
    let currentDate = new Date()
        .toISOString()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('.');
    let currentTime = new Date().toTimeString().slice(0, 9);

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__buttons">
                    <ReloadButton />
                    <NotificationButton climateProblems={problems} />
                </div>
                <div className="home__header__info">
                    <div className="home__header__info__adress">
                        {currentAdress}
                    </div>
                    <div className="home__header__info__date">
                        <div className="home__header__info__date-time">
                            {currentTime}
                        </div>
                        <div>{currentDate}</div>
                    </div>
                </div>
            </div>
            <div className="home__content">
                <div className="home__content__climate">
                    <Climate
                        name={'Температура'}
                        stats={temperature}
                        isBadClimate={problems.temperature}
                        isTemperature
                    />
                    <Climate
                        name={'CO2'}
                        stats={co2 + ' ppm'}
                        isBadClimate={problems.co2}
                    />
                    <Climate
                        name={'Влажность'}
                        stats={humidity + '%'}
                        isBadClimate={problems.humidity}
                    />
                </div>
                <div className="home__content__pollen">
                    <Pollen name={'Пыльца березы, баллы'} points={birch} />
                    <Pollen
                        name={'Пыльца злаковых трав, баллы'}
                        points={grass}
                    />
                    <Pollen name={'Пыльца амброзии, баллы'} points={ambrosia} />
                </div>
                <div className="home__content__statistics">
                    <NavLink
                        className="home__content__statistics-chart"
                        to="/stats"
                        draggable="false"
                    >
                        <button className="home__content__statistics-button">
                            <i className="bi-box-arrow-up-right"></i>
                        </button>
                        <Chart />
                    </NavLink>

                    <div className="home__content__statistics-comfort">
                        <h1>Комфортных дней</h1>
                        <div className="home__content__statistics-comfort-container">
                            <span>{comfortableDays}</span>
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
