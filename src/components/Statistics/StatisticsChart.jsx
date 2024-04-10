import React from 'react';
import './StatisticsChart.scss';
import { Chart } from '../Chart/Chart';
import Dropdown from '../Dropdown/Dropdown';

const StatisticsChart = ({ name }) => {
    return (
        <div className="statisticsChart">
            <div className="statisticsChart__header">
                <span>{name}</span>
                <Dropdown />
            </div>
            <div className="statisticsChart__content">
                <Chart />
            </div>
        </div>
    );
};

export default StatisticsChart;
