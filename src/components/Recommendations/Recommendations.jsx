import './Recommendations.scss';
import Advices from './Advices';
import Information from './Information';
import { useState } from 'react';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';

const Recommendations = ({ problems }) => {
    const [isActive, setIsActive] = useState(1);
    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [dropdownSelect, setDropdownSelect] = useState(null);

    const onClose = function (selectedList) {
        setVisibleDropdown(false);
        setDropdownSelect(selectedList);
        setIsActive(2);
    };
    return (
        <div className="recs">
            <div className="recs__header">
                <button
                    className={
                        isActive == 1
                            ? 'recs__header__tab recs__header__tab--active'
                            : 'recs__header__tab'
                    }
                    onClick={() => {
                        setIsActive(1);
                    }}
                >
                    <span>Советы по улучшению микроклимата</span>
                </button>
                <button
                    className={
                        isActive == 2
                            ? 'recs__header__tab recs__header__tab--active'
                            : 'recs__header__tab'
                    }
                    onClick={() => {
                        setVisibleDropdown(!visibleDropdown);
                    }}
                >
                    <span>Полезная информация</span>
                    <i className="bi-caret-down-fill"></i>
                    {visibleDropdown && (
                        <div className="recs__header-dropdown">
                            <button
                                className="recs__header-dropdown_button"
                                onClick={() => {
                                    onClose('temperature');
                                }}
                            >
                                Температура
                            </button>
                            <button
                                className="recs__header-dropdown_button"
                                onClick={() => {
                                    onClose('humidity');
                                }}
                            >
                                Влажность
                            </button>
                            <button
                                className="recs__header-dropdown_button"
                                onClick={() => {
                                    onClose('co2');
                                }}
                            >
                                Концентрация CO2
                            </button>
                            <button
                                className="recs__header-dropdown_button"
                                onClick={() => {
                                    onClose('allergens');
                                }}
                            >
                                Аллергены
                            </button>
                        </div>
                    )}
                </button>
            </div>
            <div className="recs__content">
                {isActive == 1 ? (
                    <Advices problems={problems} />
                ) : (
                    <Information content={dropdownSelect} />
                )}
            </div>
        </div>
    );
};

export default Recommendations;
