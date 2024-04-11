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
                        if (id != 0) {
                            let currentId = id;
                            let lastId = id - 1;
                            let currentClimate = climates[currentId];
                            let lastClimate = climates[lastId];
                            if (currentClimate.isBad) {
                                console.log(1);
                                if (!lastClimate.isBad) {
                                    color = 'red';
                                }
                            } else {
                                if (lastClimate.isBad) {
                                    color = 'green';
                                }
                            }
                        }

                        return (
                            <HistoryData
                                key={climate.id}
                                climate={climate}
                                color={color}
                                // temperature={climate.temperature}
                                // co2={climate.co2}
                                // humidity={climate.humidity}
                                // allergens={climate.allergens}
                                // isBad={climate.isBad}
                                // date={climate.date}
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
