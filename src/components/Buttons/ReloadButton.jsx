import './Buttons.scss';

import axios from 'axios';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

const ReloadButton = ({ setClimate, sendEmail }) => {
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    const onReload = () => {
        // setLoading(true);
        axios
            .get(
                'https://api.openweathermap.org/data/2.5/weather?lat=54.75551&lon=55.99551&appid=4182aa5e1a7fe9cd80a2ff5e9c7cdb0c&units=metric',
                {
                    transformResponse: [
                        function (data) {
                            let response = JSON.parse(data);
                            response.main.co2 = Math.round(
                                getRandomArbitrary(0.4, 2) *
                                    response.main.pressure
                            );
                            return response;
                        },
                    ],
                }
            )
            .then(({ data }) => {
                setClimate(data);
            });
        // .finally(() => {
        //     setLoading(false);
        // });
        sendEmail();
    };
    return (
        <button className="Reload_button" onClick={onReload}>
            <ReplayRoundedIcon />
            Обновить
        </button>
    );
};

export default ReloadButton;
