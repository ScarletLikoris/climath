import './Home.scss';
import ReloadButton from '../Buttons/ReloadButton';
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
        <div className="header">
            <div className="header__buttons">
                <ReloadButton isLong />
                <NotificationButton />
            </div>
            <div className="header__info">
                <div className="header__info__adress">{currentAdress}</div>
                <div className="header__info__date">
                    <div className="header__info__date-time">{currentTime}</div>
                    <div>{currentDate}</div>
                </div>
            </div>
        </div>
    );
};
export default Home;
