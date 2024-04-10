import './Dropdown.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import { React, useState } from 'react';

function Dropdown() {
    const selectList = ['За сутки', 'За неделю', 'За месяц', 'За год'];
    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [dropdownSelect, setDropdownSelect] = useState(0);

    const onClose = function (selectedList) {
        setVisibleDropdown(false);
        setDropdownSelect(selectedList);
    };

    return (
        <div className="dropdown">
            <button
                className="dropdown_button"
                onClick={() => {
                    setVisibleDropdown(!visibleDropdown);
                }}
            >
                {selectList[dropdownSelect]}
                <i className="bi-chevron-down"></i>
            </button>
            {visibleDropdown && (
                <div className="dropdown__content">
                    <button
                        className="dropdown__content_button"
                        onClick={() => {
                            onClose(0);
                        }}
                    >
                        {selectList[0]}
                    </button>
                    <button
                        className="dropdown__content_button"
                        onClick={() => {
                            onClose(1);
                        }}
                    >
                        {selectList[1]}
                    </button>
                    <button
                        className="dropdown__content_button"
                        onClick={() => {
                            onClose(2);
                        }}
                    >
                        {selectList[2]}
                    </button>
                    <button
                        className="dropdown__content_button"
                        onClick={() => {
                            onClose(3);
                        }}
                    >
                        {selectList[3]}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
