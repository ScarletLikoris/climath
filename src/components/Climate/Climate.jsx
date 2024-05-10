import './Climate.scss';
import classNames from 'classnames';
import { PriorityHighRounded } from '@mui/icons-material';

const Climate = ({ settings, name, stats, isBadClimate, isTemperature }) => {
    return isTemperature ? (
        isBadClimate ? (
            <div className={classNames('climate', 'climate--bad')}>
                <div className="climate__wrapper">
                    <h1>{name}</h1>
                    <PriorityHighRounded sx={{ color: '#f20530' }} />
                </div>
                <div className="climate__wrapper-stats">
                    <span>{stats}</span>
                    <p className="climate__wrapper-stats_o">o</p>
                    <span>C</span>
                    <div className="climate__container">
                        <div className="climate__const">
                            / {settings.minTemperature}-
                            {settings.maxTemperature}
                            <p className="climate__const_o">o</p>C
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={classNames('climate', 'climate--good')}>
                <h1>{name}</h1>
                <div className="climate__wrapper-stats">
                    <span>{stats}</span>
                    <p className="climate__wrapper-stats_o">o</p>
                    <span>C</span>
                    <div className="climate__container">
                        <div className="climate__const">
                            / {settings.minTemperature}-
                            {settings.maxTemperature}
                            <p className="climate__const_o">o</p>C
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : name == 'CO2' ? (
        isBadClimate ? (
            <div className={classNames('climate', 'climate--bad')}>
                <div className="climate__wrapper">
                    <h1>{name}</h1>
                    <PriorityHighRounded sx={{ color: '#f20530' }} />
                </div>

                <div className="climate__wrapper-stats">
                    <span>{stats}</span>
                    <div className="climate__container">
                        <div className="climate__const">
                            / {settings.maxCO2} ppm
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={classNames('climate', 'climate--good')}>
                <h1>{name}</h1>

                <div className="climate__wrapper-stats">
                    <span>{stats}</span>
                    <div className="climate__container">
                        <div className="climate__const">
                            / {settings.maxCO2} ppm
                        </div>
                    </div>
                </div>
            </div>
        )
    ) : isBadClimate ? (
        <div className={classNames('climate', 'climate--bad')}>
            <div className="climate__wrapper">
                <h1>{name}</h1>
                <PriorityHighRounded sx={{ color: '#f20530' }} />
            </div>
            <div className="climate__wrapper-stats">
                <span>{stats}</span>
                <div className="climate__container">
                    <div className="climate__const">
                        / {settings.minHumidity}-{settings.maxHumidity}%
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={classNames('climate', 'climate--good')}>
            <h1>{name}</h1>

            <div className="climate__wrapper-stats">
                <span>{stats}</span>
                <div className="climate__container">
                    <div className="climate__const">
                        / {settings.minHumidity}-{settings.maxHumidity}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Climate;
