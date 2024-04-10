import React from 'react';
import './History.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import HistoryData from './HistoryData';
import { CustomScroll } from 'react-custom-scroll';

const History = () => {
    return (
        <div className="history">
            <div className="history__divider"></div>
            <CustomScroll>
                <div className="history__content">
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                    <HistoryData />
                </div>
            </CustomScroll>
        </div>
    );
};

export default History;
