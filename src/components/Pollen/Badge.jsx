import './Badge.scss';

const Badge = ({ isFull }) => {
    return isFull ? (
        <div className="badge badge--full"></div>
    ) : (
        <div className="badge"></div>
    );
};

export default Badge;
