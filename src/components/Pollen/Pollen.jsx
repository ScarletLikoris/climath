import './Pollen.scss';
import Badge from './Badge';

const Pollen = ({ name, points }) => {
    let badges = [0, 0, 0, 0, 0];
    if (points) {
        for (let i = 0; i < points; i++) {
            badges[i] = 1;
        }
    }

    return (
        <div className="pollen">
            <h1>{name}</h1>
            <div className="pollen__info">
                <div>
                    <span className="pollen__info-points">{points}</span>
                    <span className="pollen__info-slashfive">/5</span>
                </div>
                <div className="pollen__info__amount">
                    {badges.map((value, index) => (
                        <Badge key={index} isFull={value} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pollen;
