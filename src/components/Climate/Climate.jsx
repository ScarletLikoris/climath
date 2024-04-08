import './Climate.scss';
import classNames from 'classnames';

const Climate = ({ name, stats, isBad }) => {
    return isBad ? (
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
