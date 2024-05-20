import React from 'react';
import ReloadButton from '../Buttons/ReloadButton';
import NotificationButton from '../Buttons/NotificationButton';

import StatisticsChart from './StatisticsChart';
import './Statistics.scss';
import SettingsButton from '../Buttons/SettingsButton';
import ReportButton from '../Buttons/ReportButton';

const Statistics = ({
    currentDateHome,
    authToken,
    sendEmail,
    problems,
    climates,
    setClimate,
    settings,
    newSettings,
}) => {
    return (
        <div className="statistics">
            <div className="statistics__header">
                <ReloadButton setClimate={setClimate} sendEmail={sendEmail} />
                <SettingsButton
                    settings={settings}
                    newSettings={newSettings}
                    authToken={authToken}
                />
                <NotificationButton climateProblems={problems} />
                <ReportButton
                    climates={climates}
                    currentDateHome={currentDateHome}
                />
            </div>
            <div className="statistics__content">
                <StatisticsChart
                    name={'Температура'}
                    chartName={'temperature'}
                    climates={climates}
                />
                <StatisticsChart
                    name={'Влажность'}
                    chartName={'humidity'}
                    climates={climates}
                />
                <StatisticsChart
                    name={'CO2'}
                    chartName={'co2'}
                    climates={climates}
                />
                <StatisticsChart
                    name={'Уровень комфорта'}
                    climates={climates}
                    isVertical
                />
            </div>
        </div>
    );
};

export default Statistics;
