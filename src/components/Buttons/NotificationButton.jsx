import './Buttons.scss';
import { React, useState } from 'react';
const NotificationButton = () => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [isBad, setIsBad] = useState(false);
    const [haveIndicator, setHaveIndicator] = useState(false);

    function handleVisible() {
        setVisiblePopup(true);
    }
    function handleInvisible() {
        setVisiblePopup(false);
        setHaveIndicator(false);
    }

    let problems = ['CO2', 'Влажность', 'Температура'];
    let isBadCN = 'Notification__container_button';

    if (isBad && problems.length == 0) {
        setIsBad(false);
        setHaveIndicator(false);
    }
    if (!isBad && problems.length > 0) {
        setIsBad(true);
        setHaveIndicator(true);
    }
    if (isBad) {
        isBadCN =
            'Notification__container_button Notification__container_button--bad';
    }
    return (
        <div className="Notification">
            <div className="Notification__container">
                <button
                    className={isBadCN}
                    onClick={() => {
                        visiblePopup ? handleInvisible() : handleVisible();
                    }}
                >
                    <i className="bi-bell"></i>
                    {!visiblePopup && haveIndicator && (
                        <div className="Notification__container_badge"></div>
                    )}
                </button>
            </div>
            {visiblePopup && (
                <div className="Notification__popup">
                    <div className="Notification__popup-arrow"></div>
                    {isBad ? (
                        <>
                            <span>Неудовлетворительные показатели в:</span>
                            {problems.length > 0 &&
                                problems.map((problem, index) => (
                                    <span
                                        key={index}
                                        className="Notification__popup-problem"
                                    >
                                        {problem}
                                    </span>
                                ))}
                        </>
                    ) : (
                        <span>Все показатели в норме</span>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationButton;
