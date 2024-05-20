import React from 'react';
import './Auth.scss';
import { ExitToAppRounded } from '@mui/icons-material';
import axios from 'axios';

const AuthExit = ({ authToken, setAuthToken, setAuthorized }) => {
    const onExit = () => {
        setAuthorized(false);
        setAuthToken('');
        axios.put('http://localhost:3000/authorized', { id: 0 });
    };
    return (
        <div className="auth__exit">
            <button onClick={onExit}>
                <ExitToAppRounded />
            </button>
            <span>{authToken}</span>
        </div>
    );
};

export default AuthExit;
