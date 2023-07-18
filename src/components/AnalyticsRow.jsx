import React from 'react';
import Image from 'next/image'

import btcLogo from '../../public/btc_logo.svg'



const AnalyticsRow = ({ rowData, className }) => {
    return (
        <div className="flex justify-evenly w-full h-20 border-b border-gray-300" id="analytics-table">

            <div className="flex justify-evenly  items-center w-80  text-lg font-semibold analytics-row-product analytics-row-slot">
                <Image
                    src={btcLogo}
                    width="37"
                    height="36" />
                <div className="text-lg font-semibold analytics-row-product-call">
                    <p className="analytics-row-product-call-value">
                        <span className='text-yellow-500'>{rowData.currency}</span>&nbsp;{rowData.call} CALL
                    </p>
                    <p className="font-normal text-gray-400 analytics-row-product-call-date">{rowData.date}</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-80  text-lg font-semibold analytics-row-deposited analytics-row-slot">
                <p>{rowData.deposited}</p>
            </div>
            <div className="flex justify-center flex-col items-center w-80 h-9rem text-lg font-semibold analytics-row-premium analytics-row-slot">
                <p className="analytics-row-premium-value">{rowData.premium}</p>
                <p className="analytics-row-premium-percentage">{rowData.premiumPercentage}</p>
            </div>
            <div className="flex justify-center flex-col items-center w-80 h-9rem text-lg font-semibold analytics-row-return analytics-row-slot">
                <p className="analytics-row-premium-value ">{rowData.return}</p>
                <p className="analytics-row-premium-percentage">{rowData.returnPercentage}</p>
            </div>
            <div className="flex justify-center items-center w-48 h-9rem text-lg font-semibold analytics-row-link analytics-row-slot">
                <a
                    target="_parent"
                    rel="noopener noreferrer"
                    aria-label="dots link to hiro explorer"
                    href="#analytics-table"
                >
                    <svg
                        className="dots-link-svg"
                        width="6"
                        height="28"
                        viewBox="0 0 6 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="3" cy="3" r="3" fill="currentColor" className="dots-link-circle" />
                        <circle cx="3" cy="14" r="3" fill="currentColor" className="dots-link-circle" />
                        <circle cx="3" cy="25" r="3" fill="currentColor" className="dots-link-circle" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default AnalyticsRow;