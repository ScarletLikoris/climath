import React, { useState } from 'react';
import './StatisticsChart.scss';
import { LinearChart } from '../Chart/LinearChart';
import { VerticalChart } from '../Chart/VerticalChart';
import Dropdown from '../Dropdown/Dropdown';

const StatisticsChart = ({ name, chartName, isVertical, climates }) => {
    let color;
    if (chartName == 'temperature') {
        color = '#d4ecf9';
    } else if (chartName == 'humidity') {
        color = '#dcd4f9';
    } else if (chartName == 'co2') {
        color = '#f8f3c6';
    }

    const [interval, setInterval] = useState(0);

    return (
        <div className="statisticsChart">
            <div className="statisticsChart__header">
                <span>{name}</span>
                <Dropdown setDropdownValue={setInterval} />
            </div>
            <div className="statisticsChart__content">
                {isVertical ? (
                    <VerticalChart interval={interval} climates={climates} />
                ) : (
                    <LinearChart
                        chartName={chartName}
                        name={name}
                        chartColor={color}
                        interval={interval}
                        climates={climates}
                    />
                )}
            </div>
        </div>
    );
};

export default StatisticsChart;
