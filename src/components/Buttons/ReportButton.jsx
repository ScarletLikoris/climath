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
import FormControlLabel from '@mui/material/FormControlLabel';
import XLSX, { writeFileXLSX, writeXLSX } from 'xlsx-js-style';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Checkbox from '@mui/material/Checkbox';

const ReportButton = ({ climates, currentDateHome }) => {
    const [dateStart, setDateStart] = useState(dayjs('2024-01-01'));
    const [dateEnd, setDateEnd] = useState(dayjs('2024-01-01'));
    const [timeStart, setTimeStart] = useState(dayjs('2024-01-01T00:00'));
    const [timeEnd, setTimeEnd] = useState(dayjs('2024-01-01T00:00'));
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const [temperatureChecked, setTemperatureChecked] = useState(true);
    const [humidityChecked, setHumidityChecked] = useState(true);
    const [co2Checked, setCO2Checked] = useState(true);

    const handleTemperatureChange = (event) => {
        setTemperatureChecked(event.target.checked);
    };
    const handleHumidityChange = (event) => {
        setHumidityChecked(event.target.checked);
    };
    const handleCO2Change = (event) => {
        setCO2Checked(event.target.checked);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        console.log(dayjs('01.01.2024' + ' ' + '00:00').diff(timeStart));
    };

    const saveReport = () => {
        let currentTime = new Date().toTimeString().slice(0, 9);
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet([]);
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Отчет Climath');
        XLSX.utils.sheet_add_json(worksheet, excelData);
        console.log(workbook);
        XLSX.writeFileXLSX(
            workbook,
            `Отчет Climath ${currentDateHome} ${currentTime}.xlsx`
        );

        handleClose();
    };

    const template = {
        'Дата ': '',
        'Время ': '',
        'Температура, ℃': 0,
        'Влажность, %': 0,
        'CO2, ppm': 0,
    };
    const stringifiedTemplate = JSON.stringify(template);
    const fetchRawData = () => {
        let startDate = dayjs(
            dateStart.format('YYYY-MM-DD') + ' ' + timeStart.format('HH:mm'),
            'YYYY-MM-DD HH:mm'
        );

        let endDate = dayjs(
            dateEnd.format('YYYY-MM-DD') + ' ' + timeEnd.format('HH:mm'),
            'YYYY-MM-DD HH:mm'
        );
        let startDay = climates.findIndex(
            (climate) =>
                dayjs(
                    climate.currentDate + ' ' + climate.currentTime,
                    'DD.MM.YYYY HH:mm'
                ).diff(startDate) >= 0
        );

        let endDay = climates.findLastIndex(
            (climate) =>
                dayjs(
                    climate.currentDate + ' ' + climate.currentTime,
                    'DD.MM.YYYY HH:mm'
                ).diff(endDate) <= 0
        );

        let data = climates.slice(startDay, endDay + 1);
        return data;
    };
    const rawData = fetchRawData();

    const excelData = rawData.map((data) => {
        const entity = JSON.parse(stringifiedTemplate);
        entity['Дата '] = data.currentDate;
        entity['Время '] = data.currentTime;
        entity['Температура, ℃'] = data.temperature;
        entity['Влажность, %'] = data.humidity;
        entity['CO2, ppm'] = data.co2;
        if (!temperatureChecked) {
            delete entity['Температура, ℃'];
        }
        if (!humidityChecked) {
            delete entity['Влажность, %'];
        }
        if (!co2Checked) {
            delete entity['CO2, ppm'];
        }

        return entity;
    });
    return (
        <div className="report">
            <button className="report_button" onClick={handleClickOpen}>
                <DownloadRoundedIcon />
                <span>Скачать отчет</span>
            </button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {'Настройка отчета'}
                </DialogTitle>
                <div className="settings__dialog">
                    <DialogContent
                        sx={{
                            fontFamily: 'Roboto-flex',
                            fontSize: '16px',
                            fontWeight: '700',
                            width: '552px',
                            marginTop: '8px',
                            scroll: 'body',
                        }}
                    >
                        <div className="settings__dialog__container">
                            Период отчета
                        </div>
                        <DialogContentText
                            component={'span'}
                            sx={{
                                color: '#111313',
                                fontFamily: 'Roboto-flex',
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                alignContent: 'space-between',
                                justifyContent: 'space-between',
                                height: '144px',
                            }}
                        >
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="ru"
                            >
                                <DemoContainer components={['TimePicker']}>
                                    <TimePicker
                                        ampm={false}
                                        views={['hours', 'minutes']}
                                        format="HH:mm"
                                        label="Время начала"
                                        value={timeStart}
                                        onChange={(newValue) =>
                                            setTimeStart(newValue)
                                        }
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="ru"
                            >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="Дата начала"
                                        value={dateStart}
                                        onChange={(newValue) =>
                                            setDateStart(newValue)
                                        }
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="ru"
                            >
                                <DemoContainer components={['TimePicker']}>
                                    <TimePicker
                                        ampm={false}
                                        views={['hours', 'minutes']}
                                        format="HH:mm"
                                        label="Время окончания"
                                        value={timeEnd}
                                        onChange={(newValue) =>
                                            setTimeEnd(newValue)
                                        }
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <LocalizationProvider
                                dateAdapter={AdapterDayjs}
                                adapterLocale="ru"
                            >
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="Дата окончания"
                                        value={dateEnd}
                                        onChange={(newValue) =>
                                            setDateEnd(newValue)
                                        }
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </DialogContentText>
                    </DialogContent>
                    <DialogContent
                        sx={{
                            fontFamily: 'Roboto-flex',
                            fontSize: '16px',
                            fontWeight: '700',
                            width: '552px',
                            marginTop: '8px',
                        }}
                    >
                        <div className="settings__dialog__container">
                            Параметры микроклимата
                        </div>
                        <DialogContentText
                            component={'span'}
                            sx={{
                                color: '#111313',
                                fontFamily: 'Roboto-flex',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '48px',
                                marginLeft: '12px',
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={humidityChecked}
                                        onChange={handleHumidityChange}
                                        inputProps={{
                                            'aria-label': 'controlled',
                                        }}
                                    />
                                }
                                label="Влажность"
                            />
                        </DialogContentText>
                        <DialogContentText
                            component={'span'}
                            sx={{
                                color: '#111313',
                                fontFamily: 'Roboto-flex',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '48px',
                                marginLeft: '12px',
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={temperatureChecked}
                                        onChange={handleTemperatureChange}
                                        inputProps={{
                                            'aria-label': 'controlled',
                                        }}
                                    />
                                }
                                label="Температура"
                            />
                        </DialogContentText>
                        <DialogContentText
                            component={'span'}
                            sx={{
                                color: '#111313',
                                fontFamily: 'Roboto-flex',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '48px',
                                marginLeft: '12px',
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={co2Checked}
                                        onChange={handleCO2Change}
                                        inputProps={{
                                            'aria-label': 'controlled',
                                        }}
                                    />
                                }
                                label="CO2"
                            />
                        </DialogContentText>
                    </DialogContent>
                </div>

                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        variant="text"
                        color="primary"
                        size="medium"
                        sx={{
                            fontFamily: 'Roboto-flex',
                        }}
                    >
                        <span>Отмена</span>
                    </Button>
                    {co2Checked || temperatureChecked || humidityChecked ? (
                        <Button
                            onClick={saveReport}
                            autoFocus
                            variant="contained"
                            color="primary"
                            size="medium"
                            sx={{
                                fontFamily: 'Roboto-flex',
                            }}
                        >
                            <span>Сохранить</span>
                        </Button>
                    ) : (
                        <Button
                            onClick={saveReport}
                            autoFocus
                            disabled
                            variant="contained"
                            color="primary"
                            size="medium"
                            sx={{
                                fontFamily: 'Roboto-flex',
                            }}
                        >
                            <span>Сохранить</span>
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ReportButton;
