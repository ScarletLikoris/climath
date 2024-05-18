import './Buttons.scss';

import { React, useState, useEffect } from 'react';
import axios from 'axios';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const SettingsButton = ({ settings, newSettings }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [value, setValue] = useState(settings);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/settings').then(({ data }) => {
            newSettings(data);
        });
    }, []);

    const recommendedSettings = {
        updateInterval: settings.updateInterval,
        minTemperature: 20,
        maxTemperature: 28,
        minHumidity: 30,
        maxHumidity: 65,
        maxCO2: 1400,
        email: settings.email,
    };

    const handleClickOpen = () => {
        setOpen(true);
        axios.get('http://localhost:3000/settings').then(({ data }) => {
            newSettings(data);
        });
        setValue(settings);
    };

    const handleClose = () => {
        setOpen(false);
        setValue(settings);
    };

    const setRecommendedSettinds = () => {
        setValue(recommendedSettings);
    };

    const saveSettings = () => {
        handleClose();
        axios.put('http://localhost:3000/settings', value).catch(() => {
            alert('Не удалось сохранить настройки');
        });
        newSettings(value);
    };
    return (
        <div className="settings">
            <div className="settings__container">
                <button
                    className="settings__container_button"
                    onClick={handleClickOpen}
                >
                    <SettingsRoundedIcon />
                </button>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {'Настройки'}
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
                                Обновление
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
                                }}
                            >
                                <p>Автоматическое обновление данных через</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.updateInterval}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                updateInterval:
                                                    event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>ч.</span>
                                </div>
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
                                Данные
                                <button
                                    className="settings__dialog_button"
                                    onClick={setRecommendedSettinds}
                                >
                                    Использовать рекомендуемые значения
                                </button>
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
                                }}
                            >
                                <p>Минимальное значение температуры</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.minTemperature}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                minTemperature:
                                                    event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>℃</span>
                                </div>
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
                                }}
                            >
                                <p>Максимальное значение температуры</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.maxTemperature}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                maxTemperature:
                                                    event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>℃</span>
                                </div>
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
                                }}
                            >
                                <p>Минимальное значение влажности</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.minHumidity}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                minHumidity: event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>%</span>
                                </div>
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
                                }}
                            >
                                <p>Максимальное значение влажности</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.maxHumidity}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                maxHumidity: event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>%</span>
                                </div>
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
                                }}
                            >
                                <p>Максимальное значение СО2</p>
                                <div className="settings__input">
                                    <TextField
                                        InputLabelProps={{
                                            shrink: false,
                                        }}
                                        label=" "
                                        wrapper="span"
                                        id="outlined-controlled"
                                        size="small"
                                        sx={{
                                            width: '80px',

                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                        value={value.maxCO2}
                                        onChange={(event) => {
                                            setValue((s) => ({
                                                ...s,
                                                maxCO2: event.target.value,
                                            }));
                                        }}
                                    />

                                    <span>ppm</span>
                                </div>
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
                            Персональные данные
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
                                }}
                            >
                                <p>Адрес почты для получения отчетов</p>

                                <TextField
                                    InputLabelProps={{
                                        shrink: false,
                                    }}
                                    label=" "
                                    wrapper="span"
                                    id="outlined-controlled"
                                    size="small"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                    value={value.email}
                                    onChange={(event) => {
                                        setValue((s) => ({
                                            ...s,
                                            email: event.target.value,
                                        }));
                                    }}
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
                        <Button
                            onClick={saveSettings}
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
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
};

export default SettingsButton;
