import './Home.scss';
import Climate from '../Climate/Climate';
import ReloadButton from '../Buttons/ReloadButton';
import { Chart } from '../Chart/Chart';
import NotificationButton from '../Buttons/NotificationButton';
import SettingsButton from '../Buttons/SettingsButton';

const Home = ({
    setClimate,
    settings,
    problems,
    co2,
    temperature,
    humidity,
    comfortableDays,
    currentDate,
    currentTime,
}) => {
    let currentAdress = 'г. Уфа, ул. Р. Зорге 34/3';

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__buttons">
                    <ReloadButton setClimate={setClimate} />
                    <SettingsButton />
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
                        settings={settings}
                        name={'Температура'}
                        stats={temperature}
                        isBadClimate={problems.temperature}
                        isTemperature
                    />
                    <Climate
                        settings={settings}
                        name={'CO2'}
                        stats={co2 + ' ppm'}
                        isBadClimate={problems.co2}
                    />
                    <Climate
                        settings={settings}
                        name={'Влажность'}
                        stats={humidity + '%'}
                        isBadClimate={problems.humidity}
                    />
                </div>

                <div className="home__content__statistics">
                    <div className="home__content__statistics__container">
                        <div className="home__content__statistics-comfort">
                            <h1>Уровень комфорта</h1>
                            <div className="home__content__statistics-comfort-container">
                                <h2>прохладно, легкий дискомфорт</h2>
                            </div>
                        </div>
                        <div className="home__content__statistics-comfort">
                            <h1>Комфортных дней</h1>
                            <div className="home__content__statistics-comfort-container">
                                <span>{comfortableDays}</span>
                            </div>
                        </div>
                    </div>
                    <div className="home__content__statistics-chart">
                        <Chart />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
