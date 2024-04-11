import './HistoryData.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';

const HistoryData = ({ climate, color }) => {
    return (
        <div className="history_data">
            <div
                className={
                    color == 'gray'
                        ? 'history_data__badge'
                        : color == 'green'
                        ? 'history_data__badge history_data__badge--green'
                        : 'history_data__badge history_data__badge--red'
                }
            ></div>
            <div
                className={
                    climate.isBad
                        ? 'history_data__info history_data__info--bad'
                        : 'history_data__info'
                }
            >
                <span>{climate.date}</span>
                {climate.isBad ? (
                    <p>Микроклимат ухудшился</p>
                ) : (
                    <p>Все показатели в норме</p>
                )}
            </div>
            <div
                className={
                    climate.isBad
                        ? 'history_data__stats history_data__stats--bad'
                        : 'history_data__stats'
                }
            >
                <div className="history_data__stats-stat">
                    <span>Температура</span>
                    <span>{climate.temperature}℃</span>
                    <i className="bi-dash"></i>
                </div>
                <div className="history_data__stats-stat">
                    <span>Влажность</span>
                    <span>{climate.humidity}%</span>
                    <i className="bi-dash"></i>
                </div>
                <div className="history_data__stats-stat">
                    <span>Концентрация CO2</span>
                    <span>{climate.co2} ppm</span>
                    <i className="bi-dash"></i>
                </div>
                <div className="history_data__stats-stat">
                    <span>Аллергены</span>
                    <span>{climate.allergens}/5</span>
                    <i className="bi-dash"></i>
                </div>
            </div>
        </div>
    );
};

export default HistoryData;
