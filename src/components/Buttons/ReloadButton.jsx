import './Buttons.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';

const ReloadButton = () => {
    return (
        <button className="Reload_button">
            <i className="bi-arrow-clockwise"></i>Обновить
        </button>
    );
};

export default ReloadButton;
