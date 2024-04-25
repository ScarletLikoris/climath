import React from 'react';
import './History.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import HistoryData from './HistoryData';
import ReloadButton from '../Buttons/ReloadButton';
import Dropdown from '../Dropdown/Dropdown';

const History = ({ climates }) => {
    return (
        <div className="history">
            <div className="history__divider"></div>
            <div className="history__content">
                {climates &&
                    climates.map((climate, id) => {
                        let color = 'gray';
                        let icon = 'bi-dash';
                        if (id != climates.length - 1) {
                            let currentId = id + 1;
                            let lastId = id;
                            let currentClimate = climates[currentId];
                            let lastClimate = climates[lastId];
                            if (lastClimate.isBad) {
                                if (!currentClimate.isBad) {
                                    color = 'red';
                                    icon = 'bi-arrow-down';
                                }
                            } else {
                                if (currentClimate.isBad) {
                                    color = 'green';
                                    icon = 'bi-arrow-up';
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
                <div className="history__sidebar-dropdown">
                    <Dropdown isShort />
                </div>
                <ReloadButton />
            </div>
        </div>
    );
};

export default History;
