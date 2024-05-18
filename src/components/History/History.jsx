import React from 'react';
import './History.scss';
import HistoryData from './HistoryData';
import ReloadButton from '../Buttons/ReloadButton';
import Dropdown from '../Dropdown/Dropdown';

const History = ({ climates, setClimate, sendEmail }) => {
    let history = climates.slice(0);
    history.reverse();
    return (
        <div className="history">
            <div className="history__divider"></div>
            <div className="history__content">
                {history &&
                    history.map((climate, id) => {
                        let color = 'gray';
                        let icon = 'dash';
                        if (id != history.length - 1) {
                            let currentId = id + 1;
                            let lastId = id;
                            let currentClimate = history[currentId];
                            let lastClimate = history[lastId];
                            if (lastClimate.isBad) {
                                if (!currentClimate.isBad) {
                                    color = 'red';
                                    icon = 'arrow-down';
                                }
                            } else {
                                if (currentClimate.isBad) {
                                    color = 'green';
                                    icon = 'arrow-up';
                                }
                            }
                        }

                        return (
                            <HistoryData
                                key={climate.id}
                                climate={climate}
                                color={color}
                                icon={icon}
                            />
                        );
                    })}
            </div>
            <div className="history__sidebar">
                <ReloadButton setClimate={setClimate} sendEmail={sendEmail} />
            </div>
        </div>
    );
};

export default History;
