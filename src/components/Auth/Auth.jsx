import React, { useState } from 'react';
import './Auth.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Auth = ({ setAuthorized, setAuthToken, tokens }) => {
    const [value, setValue] = useState('');
    const [authText, setAuthText] = useState('Введите токен');
    const onAuth = () => {
        if (tokens.includes(value)) {
            setAuthToken(value);
            setAuthorized(true);
            axios.put('http://localhost:3000/authorized', { id: value });
        } else {
            setAuthText('Неверный токен!');
        }
    };
    return (
        <div className="auth">
            <div className="auth__login">
                <h1>{authText}</h1>
                <div className="auth__login__input">
                    <TextField
                        fullWidth
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
                            marginRight: '16px',
                        }}
                        value={value}
                        onChange={(event) => {
                            setValue(event.target.value);
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        sx={{
                            fontFamily: 'Roboto-flex',
                        }}
                        onClick={onAuth}
                    >
                        <span>Войти</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
