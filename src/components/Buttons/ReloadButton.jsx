import './Buttons.scss';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

const ReloadButton = () => {
    return (
        <button className="Reload_button">
            <ReplayRoundedIcon />
            Обновить
        </button>
    );
};

export default ReloadButton;
