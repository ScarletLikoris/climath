import './Buttons.scss';
import { React, useState } from 'react';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const ReportButton = () => {
    return (
        <div className="report">
            <button className="report_button">
                <DownloadRoundedIcon />
                Скачать отчет
            </button>
        </div>
    );
};

export default ReportButton;
