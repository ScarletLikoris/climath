import './Home.scss';
import Climate from '../Climate/Climate';
import Comfort from '../Comfort/Comfort';
import ReloadButton from '../Buttons/ReloadButton';
import { VerticalChart } from '../Chart/VerticalChart';
import NotificationButton from '../Buttons/NotificationButton';
import SettingsButton from '../Buttons/SettingsButton';
import ComfortHome from '../Comfort/ComfortHome';

const Home = ({
    authToken,
    comfort,
    setComfort,
    sendEmail,
    w_comfort,
    set_w_comfort,
    setComfortColor,
    climate,
    climates,
    setClimate,
    settings,
    newSettings,
    problems,
    co2,
    temperature,
    humidity,
    currentDate,
    currentTime,
}) => {
    let currentAdress = 'г. Уфа, ул. Р. Зорге 34/3';

    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__buttons">
                    <ReloadButton
                        setClimate={setClimate}
                        sendEmail={sendEmail}
                    />
                    <SettingsButton
                        authToken={authToken}
                        settings={settings}
                        newSettings={newSettings}
                    />
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
                                <Comfort
                                    comfort={comfort}
                                    setComfort={setComfort}
                                    climate={climate}
                                    w_comfort={w_comfort}
                                    set_w_comfort={set_w_comfort}
                                    setComfortColor={setComfortColor}
                                />
                            </div>
                        </div>

                        <ComfortHome w_comfort={w_comfort} />
                    </div>
                    <div className="home__content__statistics-chart">
                        <VerticalChart climates={climates} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
