import './Climate.scss';
import classNames from 'classnames';

const Climate = ({ name, stats, isBadClimate, isTemperature }) => {
    return isTemperature ? (
        isBadClimate ? (
            <div className={classNames('climate', 'climate--bad')}>
                <h1>{name}</h1>
                <div className="climate__temperature">
                    <span>{stats}</span>
                    <p className="climate__temperature_o">o</p>
                    <span>C</span>
                </div>
            </div>
        ) : (
            <div className={classNames('climate', 'climate--good')}>
                <h1>{name}</h1>
                <div className="climate__temperature">
                    <span>{stats}</span>
                    <p className="climate__temperature_o">o</p>
                    <span>C</span>
                </div>
            </div>
        )
    ) : isBadClimate ? (
        <div className={classNames('climate', 'climate--bad')}>
            <h1>{name}</h1>
            <span>{stats}</span>
        </div>
    ) : (
        <div className={classNames('climate', 'climate--good')}>
            <h1>{name}</h1>
            <span>{stats}</span>
        </div>
    );
};

export default Climate;
