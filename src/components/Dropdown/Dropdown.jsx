import './Dropdown.scss';
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.scss';
import { React, useState } from 'react';

function Dropdown({ isShort, setDropdownValue }) {
    const selectList = ['За сутки', 'За неделю', 'За месяц', 'За год'];
    const [visibleDropdown, setVisibleDropdown] = useState(false);
    const [dropdownSelect, setDropdownSelect] = useState(0);

    const onClose = function (selectedList) {
        setVisibleDropdown(false);
        setDropdownSelect(selectedList);
        setDropdownValue(selectedList);
    };

    return (
        <div className="dropdown">
            <button
                className={
                    isShort
                        ? 'dropdown_button dropdown_button--short'
                        : 'dropdown_button'
                }
                onClick={() => {
                    setVisibleDropdown(!visibleDropdown);
                }}
            >
                {selectList[dropdownSelect]}
                <i className="bi-chevron-down"></i>

                {visibleDropdown && (
                    <div
                        className={
                            isShort
                                ? 'dropdown__content dropdown__content--short'
                                : 'dropdown__content'
                        }
                    >
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
            </button>
        </div>
    );
}

export default Dropdown;
