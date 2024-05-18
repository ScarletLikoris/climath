import React from 'react';
import './Comfort.scss';

const ComfortHome = ({ w_comfort }) => {
    let comfortHome;
    if (w_comfort <= -1) {
        comfortHome = (
            <div className="comfortHome comfortHome_verycold">
                <div className="comfortHome__icon">
                    <svg
                        width="72"
                        height="75"
                        viewBox="0 0 72 75"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_3168)">
                            <path
                                d="M61.6666 1.16663C59.8333 1.16663 58.3333 2.66663 58.3333 4.49996V14.5C58.3333 16.3333 59.8333 17.8333 61.6666 17.8333C63.5 17.8333 65 16.3333 65 14.5V4.49996C65 2.66663 63.5 1.16663 61.6666 1.16663Z"
                                fill="white"
                            />
                            <path
                                d="M61.6666 27.8333C63.5076 27.8333 65 26.3409 65 24.5C65 22.659 63.5076 21.1666 61.6666 21.1666C59.8257 21.1666 58.3333 22.659 58.3333 24.5C58.3333 26.3409 59.8257 27.8333 61.6666 27.8333Z"
                                fill="white"
                            />
                            <path
                                d="M35 29.2L45.9666 18.2333C47.2666 16.9333 47.2666 14.8333 45.9666 13.5333C44.6666 12.2333 42.5666 12.2333 41.2666 13.5333L35 19.8V11.1666C35 9.33329 33.5 7.83329 31.6666 7.83329C29.8333 7.83329 28.3333 9.33329 28.3333 11.1666V19.8L22.0666 13.5333C20.7666 12.2333 18.6666 12.2333 17.3666 13.5333C16.0666 14.8333 16.0666 16.9333 17.3666 18.2333L28.3333 29.2V34.5H23.0333L12.0666 23.5333C10.7666 22.2333 8.66663 22.2333 7.36663 23.5333C6.06663 24.8333 6.06663 26.9333 7.36663 28.2333L13.6333 34.5H4.99996C3.16663 34.5 1.66663 36 1.66663 37.8333C1.66663 39.6666 3.16663 41.1666 4.99996 41.1666H13.6333L7.36663 47.4333C6.06663 48.7333 6.06663 50.8333 7.36663 52.1333C8.66663 53.4333 10.7666 53.4333 12.0666 52.1333L23.0333 41.1666H28.3333V46.4666L17.3666 57.4333C16.0666 58.7333 16.0666 60.8333 17.3666 62.1333C18.6666 63.4333 20.7666 63.4333 22.0666 62.1333L28.3333 55.8666V64.5C28.3333 66.3333 29.8333 67.8333 31.6666 67.8333C33.5 67.8333 35 66.3333 35 64.5V55.8666L41.2666 62.1333C42.5666 63.4333 44.6666 63.4333 45.9666 62.1333C47.2666 60.8333 47.2666 58.7333 45.9666 57.4333L35 46.4666V41.1666H40.3L51.2666 52.1333C52.5666 53.4333 54.6666 53.4333 55.9666 52.1333C57.2666 50.8333 57.2666 48.7333 55.9666 47.4333L49.7 41.1666H58.3333C60.1666 41.1666 61.6666 39.6666 61.6666 37.8333C61.6666 36 60.1666 34.5 58.3333 34.5H35V29.2Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_3168"
                                x="0.666626"
                                y="0.166626"
                                width="71.3334"
                                height="74.6666"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_3168"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_3168"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > -1 && w_comfort <= -0.3) {
        comfortHome = (
            <div className="comfortHome comfortHome_cold">
                <div className="comfortHome__icon">
                    <svg
                        width="75"
                        height="75"
                        viewBox="0 0 75 75"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_1737)">
                            <path
                                d="M65 31.1667H54.4333L62.9 22.7C64.2 21.4 64.2 19.3 62.9 18C61.6 16.7 59.4666 16.7 58.1666 18L45 31.1667H38.3333V24.5L51.5 11.3334C52.8 10.0334 52.8 7.90002 51.5 6.60002C50.2 5.30002 48.1 5.30002 46.8 6.60002L38.3333 15.0667V4.50002C38.3333 2.66669 36.8333 1.16669 35 1.16669C33.1666 1.16669 31.6666 2.66669 31.6666 4.50002V15.0667L23.2 6.60002C21.9 5.30002 19.8 5.30002 18.5 6.60002C17.2 7.90002 17.2 10.0334 18.5 11.3334L31.6666 24.5V31.1667H25L11.8333 18C10.5333 16.7 8.39996 16.7 7.09996 18C5.79996 19.3 5.79996 21.4 7.09996 22.7L15.5666 31.1667H4.99996C3.16663 31.1667 1.66663 32.6667 1.66663 34.5C1.66663 36.3334 3.16663 37.8334 4.99996 37.8334H15.5666L7.09996 46.3C5.79996 47.6 5.79996 49.7 7.09996 51C8.39996 52.3 10.5333 52.3 11.8333 51L25 37.8334H31.6666V44.5L18.5 57.6667C17.2 58.9667 17.2 61.1 18.5 62.4C19.8 63.7 21.9 63.7 23.2 62.4L31.6666 53.9334V64.5C31.6666 66.3334 33.1666 67.8334 35 67.8334C36.8333 67.8334 38.3333 66.3334 38.3333 64.5V53.9334L46.8 62.4C48.1 63.7 50.2 63.7 51.5 62.4C52.8 61.1 52.8 58.9667 51.5 57.6667L38.3333 44.5V37.8334H45L58.1666 51C59.4666 52.3 61.6 52.3 62.9 51C64.2 49.7 64.2 47.6 62.9 46.3L54.4333 37.8334H65C66.8333 37.8334 68.3333 36.3334 68.3333 34.5C68.3333 32.6667 66.8333 31.1667 65 31.1667Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_1737"
                                x="0.666626"
                                y="0.166687"
                                width="74.6666"
                                height="74.6667"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_1737"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_1737"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > -0.3 && w_comfort <= 0.1) {
        comfortHome = (
            <div className="comfortHome comfortHome_cool">
                <div className="comfortHome__icon">
                    <svg
                        width="76"
                        height="77"
                        viewBox="0 0 76 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_1612)">
                            <path
                                d="M9.33328 47.5334L2.99995 41.2C0.399948 38.6 0.399948 34.3667 2.99995 31.7667L9.33328 25.4667V16.5C9.33328 12.8334 12.3333 9.83338 16 9.83338H24.9666L31.3 3.50005C33.9 0.900049 38.1333 0.900049 40.7333 3.50005L47.0333 9.83338H56C59.6666 9.83338 62.6666 12.8334 62.6666 16.5V25.4667L69 31.8C71.6 34.4 71.6 38.6334 69 41.2334L62.6666 47.5667V56.5C62.6666 60.1667 59.6666 63.1667 56 63.1667H47.0333L40.7 69.5C38.1 72.1001 33.8666 72.1001 31.2666 69.5L24.9333 63.1667H16C12.3333 63.1667 9.33328 60.1667 9.33328 56.5V47.5334ZM36 52.8334V20.1667C36 18.1334 34.1666 16.4667 32.1666 16.8667C22.9666 18.6667 16 26.7667 16 36.5C16 46.2334 22.9666 54.3334 32.1666 56.1334C34.1666 56.5334 36 54.8667 36 52.8334Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_1612"
                                x="0.0499268"
                                y="0.550049"
                                width="77.9"
                                height="77.9"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_1612"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_1612"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > 0.1 || w_comfort <= 0.65) {
        comfortHome = (
            <div className="comfortHome comfortHome_comfort">
                <div className="comfortHome__icon">
                    <svg
                        width="76"
                        height="77"
                        viewBox="0 0 76 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_2449)">
                            <path
                                d="M62.6667 47.5334L69 41.2C71.6001 38.6 71.6001 34.3667 69 31.7667L62.6667 25.4667V16.5C62.6667 12.8334 59.6667 9.83338 56 9.83338H47.0334L40.7 3.50005C38.1 0.900049 33.8667 0.900049 31.2667 3.50005L24.9667 9.83338H16C12.3334 9.83338 9.33338 12.8334 9.33338 16.5V25.4667L3.00005 31.8C0.400049 34.4 0.400049 38.6334 3.00005 41.2334L9.33338 47.5667V56.5C9.33338 60.1667 12.3334 63.1667 16 63.1667H24.9667L31.3 69.5C33.9 72.1001 38.1334 72.1001 40.7334 69.5L47.0667 63.1667H56C59.6667 63.1667 62.6667 60.1667 62.6667 56.5V47.5334ZM36 56.5C24.9667 56.5 16 47.5334 16 36.5C16 25.4667 24.9667 16.5 36 16.5C47.0334 16.5 56 25.4667 56 36.5C56 47.5334 47.0334 56.5 36 56.5Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_2449"
                                x="0.0500488"
                                y="0.550049"
                                width="77.9"
                                height="77.9"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_2449"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_2449"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > 0.65 && w_comfort <= 0.3) {
        comfortHome = (
            <div className="comfortHome comfortHome_warm">
                <div className="comfortHome__icon">
                    <svg
                        width="76"
                        height="77"
                        viewBox="0 0 76 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_1384)">
                            <path
                                d="M62.6667 47.5334L69 41.2C71.6001 38.6 71.6001 34.3667 69 31.7667L62.6667 25.4667V16.5C62.6667 12.8334 59.6667 9.83338 56 9.83338H47.0334L40.7 3.50005C38.1 0.900049 33.8667 0.900049 31.2667 3.50005L24.9667 9.83338H16C12.3334 9.83338 9.33338 12.8334 9.33338 16.5V25.4667L3.00005 31.8C0.400049 34.4 0.400049 38.6334 3.00005 41.2334L9.33338 47.5667V56.5C9.33338 60.1667 12.3334 63.1667 16 63.1667H24.9667L31.3 69.5C33.9 72.1001 38.1334 72.1001 40.7334 69.5L47.0667 63.1667H56C59.6667 63.1667 62.6667 60.1667 62.6667 56.5V47.5334ZM36 52.8334V20.1667C36 18.1334 37.8334 16.4667 39.8334 16.8667C49.0334 18.6667 56 26.7667 56 36.5C56 46.2334 49.0334 54.3334 39.8334 56.1334C37.8334 56.5334 36 54.8667 36 52.8334Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_1384"
                                x="0.0500488"
                                y="0.550049"
                                width="77.9"
                                height="77.9"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_1384"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_1384"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > 0.3 && w_comfort <= 0.1) {
        comfortHome = (
            <div className="comfortHome comfortHome_hot">
                <div className="comfortHome__icon">
                    <svg
                        width="76"
                        height="77"
                        viewBox="0 0 76 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_2963)">
                            <path
                                d="M62.6667 25.4667V16.5C62.6667 12.8334 59.6667 9.83338 56 9.83338H47.0334L40.7 3.50005C38.1 0.900049 33.8667 0.900049 31.2667 3.50005L24.9667 9.83338H16C12.3334 9.83338 9.33338 12.8334 9.33338 16.5V25.4667L3.00005 31.8C0.400049 34.4 0.400049 38.6334 3.00005 41.2334L9.33338 47.5667V56.5C9.33338 60.1667 12.3334 63.1667 16 63.1667H24.9667L31.3 69.5C33.9 72.1001 38.1334 72.1001 40.7334 69.5L47.0667 63.1667H56C59.6667 63.1667 62.6667 60.1667 62.6667 56.5V47.5334L69 41.2C71.6001 38.6 71.6001 34.3667 69 31.7667L62.6667 25.4667ZM36 56.5C24.9667 56.5 16 47.5334 16 36.5C16 25.4667 24.9667 16.5 36 16.5C47.0334 16.5 56 25.4667 56 36.5C56 47.5334 47.0334 56.5 36 56.5ZM36 23.1667C28.6334 23.1667 22.6667 29.1334 22.6667 36.5C22.6667 43.8667 28.6334 49.8334 36 49.8334C43.3667 49.8334 49.3334 43.8667 49.3334 36.5C49.3334 29.1334 43.3667 23.1667 36 23.1667Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_2963"
                                x="0.0500488"
                                y="0.550049"
                                width="77.9"
                                height="77.9"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_2963"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_2963"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    } else if (w_comfort > 0.1) {
        comfortHome = (
            <div className="comfortHome comfortHome_veryhot">
                <div className="comfortHome__icon">
                    <svg
                        width="62"
                        height="67"
                        viewBox="0 0 62 67"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_505_3046)">
                            <path
                                d="M27.9999 35.5L21.2332 42.1667C19.6999 43.7 18.4999 45.6 18.1332 47.7333C17.1332 53.8667 21.9332 59.1667 27.9999 59.1667C34.0666 59.1667 38.8666 53.8667 37.8666 47.7667C37.4999 45.6333 36.3332 43.7 34.7666 42.2L27.9999 35.5Z"
                                fill="white"
                            />
                            <path
                                d="M39.8667 14.3333C35.9334 19.2333 28 16.4667 28 10.1667V5.06666C28 2.4 25.0334 0.799996 22.8334 2.26666C15.0667 7.46666 1.33337 19.0667 1.33337 35.8333C1.33337 45.5667 6.53337 54.0667 14.3 58.7C11.9334 55.3 10.7667 51 11.6 46.4333C12.2334 42.9667 14.1 39.8333 16.6334 37.3667L25.6667 28.4667C26.9667 27.2 29.0334 27.2 30.3334 28.4667L39.4334 37.4333C41.9 39.8667 43.7667 42.9333 44.3667 46.3667C45.2 50.9 44.1334 55.1667 41.8 58.5667C48.1 54.7333 52.7667 48.3667 54.1667 40.9C56.2 30 51.4667 19.6667 43.4334 13.9C42.3334 13.0667 40.7667 13.2333 39.8667 14.3333Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_505_3046"
                                x="0.333374"
                                y="0.709415"
                                width="61.3041"
                                height="65.4573"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dx="3" dy="3" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_505_3046"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_505_3046"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    }
    return comfortHome;
};

export default ComfortHome;
