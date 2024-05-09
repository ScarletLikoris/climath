import React from 'react';
import ReloadButton from '../Buttons/ReloadButton';
import NotificationButton from '../Buttons/NotificationButton';

import StatisticsChart from './StatisticsChart';
import './Statistics.scss';
import SettingsButton from '../Buttons/SettingsButton';
import ReportButton from '../Buttons/ReportButton';

const Statistics = ({ problems }) => {
    return (
        <div className="statistics">
            <div className="statistics__header">
                <ReloadButton />
                <SettingsButton />
                <NotificationButton climateProblems={problems} />
                <ReportButton />
            </div>
            <div className="statistics__content">
                <StatisticsChart name={'Температура'} />
                <StatisticsChart name={'Влажность'} />
                <StatisticsChart name={'CO2'} />
                <StatisticsChart name={'Уровень комфорта'} />
            </div>
        </div>
    );
};

export default Statistics;
