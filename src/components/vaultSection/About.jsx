import React, { useState } from 'react';
import Image from 'next/image';
import arrowBtn from '../../../public/arrowBtn.svg';

const About = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div
            className={`w-10/12 flex px-20 flex-col pt-0 border-none rounded-2xl vault-details-box ${showDetails ? 'h-96' : 'pb-0'
                } ${showDetails && 'open'}`}
            onClick={toggleDetails}
        >
            <div className="flex justify-between items-center text-left mt-8 w-full text-2xl font-medium cursor-pointer vault-details-action">
                <p>About strategy</p>
                <span className={`vault-details-btn ${showDetails ? 'orange-bg' : ''}`}>
                    <Image
                        src={arrowBtn}
                        width={37}
                        height={36}
                        style={{ transform: showDetails ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    />
                </span>
            </div>
            <div
                className="vault-details-content mt-8"
                style={{
                    maxHeight: showDetails ? '500px' : '0',
                    transition: 'max-height 0.3s ease, padding 0.3s ease',
                }}
            >
                <div
                    className="bottom-0 flex flex-col justify-start my-0.5 mr-4 about-strategy-conte.open"
                    style={{
                        opacity: showDetails ? 1 : 0,
                        maxHeight: showDetails ? '500%' : '0',
                        transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    }}
                >
                    <div className="w-full h-80 flex justify-between text-lg about-strategy-info">
                        <div className="flex flex-col justify-between w-1/2 pt-0 pb-44 leading-9 mr-16 about-strategy-description-">
                            <p>
                                <b>Performance:</b> Best in bearish to mild bull markets.
                            </p>
                            <p>
                                <b>Strategy:</b> This vault generates income by running an automated covered call strategy and collecting the option premium. Deposits are deployed in the upcoming Epoch and earnings are auto-compounded weekly.
                            </p>
                        </div>

                        <div className="w-1/2 h-44 pt-4 pb-16 px-8 bg-accent-1 text-white rounded-lg about-strategy-risk-box">
                            <div className="flex items-center justify-start ween max-w-xs mb-1 about-strategy-risk-title">
                                <svg className="mr-2" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        className="warning-icon-path"
                                        d="M4.47012 21.0002H19.5301C21.0701 21.0002 22.0301 19.3302 21.2601 18.0002L13.7301 4.99018C12.9601 3.66018 11.0401 3.66018 10.2701 4.99018L2.74012 18.0002C1.97012 19.3302 2.93012 21.0002 4.47012 21.0002ZM12.0001 14.0002C11.4501 14.0002 11.0001 13.5502 11.0001 13.0002V11.0002C11.0001 10.4502 11.4501 10.0002 12.0001 10.0002C12.5501 10.0002 13.0001 10.4502 13.0001 11.0002V13.0002C13.0001 13.5502 12.5501 14.0002 12.0001 14.0002ZM13.0001 18.0002H11.0001V16.0002H13.0001V18.0002Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                                <h4>Risk</h4>
                            </div>
                            <p>
                                If the price of the underlying asset goes above the call option’s strike price at expiration and the options are in-the-money, the vault may incur a loss.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About