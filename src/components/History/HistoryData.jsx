import './HistoryData.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import {
    ArrowUpwardRounded,
    ArrowDownwardRounded,
    HorizontalRuleRounded,
} from '@mui/icons-material';

const HistoryData = ({ climate, color, icon }) => {
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
            >
                {icon == 'dash' ? (
                    <HorizontalRuleRounded />
                ) : icon == 'arrow-up' ? (
                    <ArrowUpwardRounded />
                ) : (
                    <ArrowDownwardRounded />
                )}
            </div>
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
                <div
                    className={
                        climate.temperatureBad
                            ? 'history_data__stats-stat history_data__stats-stat--bad'
                            : 'history_data__stats-stat'
                    }
                >
                    <span>Температура</span>
                    <span>{climate.temperature}℃</span>
                    {climate.temperatureCompare == '+' ? (
                        <ArrowUpwardRounded />
                    ) : climate.temperatureCompare == '-' ? (
                        <ArrowDownwardRounded />
                    ) : (
                        <HorizontalRuleRounded />
                    )}
                </div>
                <div
                    className={
                        climate.humidityBad
                            ? 'history_data__stats-stat history_data__stats-stat--bad'
                            : 'history_data__stats-stat'
                    }
                >
                    <span>Влажность</span>
                    <span>{climate.humidity}%</span>
                    {climate.humidityCompare == '+' ? (
                        <ArrowUpwardRounded />
                    ) : climate.humidityCompare == '-' ? (
                        <ArrowDownwardRounded />
                    ) : (
                        <HorizontalRuleRounded />
                    )}
                </div>
                <div
                    className={
                        climate.co2Bad
                            ? 'history_data__stats-stat history_data__stats-stat--bad'
                            : 'history_data__stats-stat'
                    }
                >
                    <span>Концентрация CO2</span>
                    <span>{climate.co2} ppm</span>
                    {climate.co2Compare == '+' ? (
                        <ArrowUpwardRounded />
                    ) : climate.co2Compare == '-' ? (
                        <ArrowDownwardRounded />
                    ) : (
                        <HorizontalRuleRounded />
                    )}
                </div>
                {/* <div
                    className={
                        climate.allergensBad
                            ? 'history_data__stats-stat history_data__stats-stat--bad'
                            : 'history_data__stats-stat'
                    }
                >
                    <span>Аллергены</span>
                    <span>{climate.allergens}/5</span>
                    {climate.allergensCompare == '+' ? (
                        <ArrowUpwardRounded />
                    ) : climate.allergensCompare == '-' ? (
                        <ArrowDownwardRounded />
                    ) : (
                        <HorizontalRuleRounded />
                    )}
                </div> */}
            </div>
        </div>
    );
};

export default HistoryData;
