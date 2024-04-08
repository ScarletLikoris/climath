import './Home.scss';
import Climate from '../Climate/Climate';
import Pollen from '../Pollen/Pollen';
import ReloadButton from '../Buttons/ReloadButton';
import { Chart } from '../Chart/Chart';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import NotificationButton from '../Buttons/NotificationButton';

let currentAdress = 'г. Уфа, ул. Р. Зорге 34/3';
let currentDate = new Date()
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('.');
let currentTime = new Date().toTimeString().slice(0, 9);

const Home = () => {
    return (
        <div>
            <div className="header">
                <div className="header__buttons">
                    <ReloadButton isLong />
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
                    <Climate name={'Температура'} stats={'24℃'} />
                    <Climate name={'CO2'} stats={'1900 ppm'} isBad />
                    <Climate name={'Влажность'} stats={'40%'} />
                </div>
                <div className="content__pollen">
                    <Pollen name={'Пыльца березы, баллы'} points={1} />
                    <Pollen name={'Пыльца злаковых трав, баллы'} points={4} />
                    <Pollen name={'Пыльца амброзии, баллы'} points={0} />
                </div>
                <div className="content__statistics">
                    <div className="content__statistics-chart">
                        <Chart />
                    </div>
                    <div className="content__statistics-comfort">
                        <h1>Комфортных дней</h1>
                        <div className="content__statistics-comfort-container">
                            <span>0</span>
                            <button>
                                История
                                <i className="bi-arrow-up-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
