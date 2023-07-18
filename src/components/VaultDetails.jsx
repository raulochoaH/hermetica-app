import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import PriceBtc from '../components/PriceBtc'
import Table from '../components/Table'
import dynamic from 'next/dynamic';
import btcLogo from '../../public/btc_logo.svg'
import arrow_btn from '../../public/arrow_btn.svg'



const DynamicPriceBtc = dynamic(
    () => import('../components/PriceBtc'),
    { ssr: false }
);

const VaultDetails = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [addClass, setAddClass] = useState(false);


    const toggleDetails = () => {
        setShowDetails(!showDetails);
        setAddClass(!addClass);

    };

    const data = [
        {
            label: 'Underlying Asset',
            value: 'xBTC',
        },
        {
            label: 'Price',
            value: '$29,944',
        },
        {
            label: 'Last Traded Option',
            value: '$35,000 CALL Jul 21',
        },
        {
            label: 'Breakeven Price',
            value: '$35,053 (15.8%)',
        },
        {
            label: 'Epoch Length',
            value: '1 Week',
        },
        {
            label: 'Option Style',
            value: 'European',
        },
        {
            label: 'Auto-Compounding In',
            value: '4d 19h 6m 59s',
        },
        {
            label: 'Fees',
            value: '10% / 1%',
        },
    ];

    return (
        <div className={`h-3/5 w-10/12 px-20  flex mx-16 flex-col pt-0 border-none rounded-2xl vault-details-box ${addClass ? 'pb-20' : 'pb-0'}`}
        >
            <div className="flex justify-between  items-center text-left mt-8 w-full text-2xl font-medium cursor-pointer  vault-details-action"
                onClick={toggleDetails}
            >
                <p>Vault Details</p>
                <span
                    className={`vault-details-btn ${showDetails ? "orange-bg" : ""
                        }`}
                >
                    <Image
                        src={arrow_btn}
                        width="37"
                        height="36"
                        style={{ transform: showDetails ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    />
                </span>
            </div>

            <div className={`vault-details-content mt-8 ${showDetails ? 'open' : ''
                }`}
                style={{
                    maxHeight: showDetails ? '500px' : '0',
                    transition: 'max-height 0.3s ease, padding 0.3s ease',
                }}>

                <div className="flex justify-between w-full vault-details-info"
                    style={{
                        opacity: showDetails ? 1 : 0,
                        maxHeight: showDetails ? '100%' : '0',
                        transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    }}>
                    <div className="flex flex-col justify-around w-49 h-40rem bg-grey-background rounded-3.9rem p-4 assets-chart-box">

                        <div className="p-4 pb-6 asset-chart-box-header">
                            <div className="asset-chart-info">
                                <div className="flex asset-chart-info-title">
                                    <Image
                                        src={btcLogo}
                                        width="37"
                                        height="36"
                                    />
                                    <h1 className='ml-2 tracking-wider text-3xl font-extrabold'>BTC Covered Call</h1>
                                </div>
                                <div className="asset-trend">
                                    <h2 className="my-1 mx-2 py-0.25 px-0.25 text-3xl font-semibold tracking-wide">29,944 USD</h2>
                                    <span className="asset-trend-difference-percentaje"></span>
                                </div>
                            </div>
                            <button className="drop-time-asset"></button>
                        </div>

                        <div className="asset-chart">
                            <DynamicPriceBtc />
                        </div>
                    </div>



                    <div className="ml-8 w-3/5 vault-details-info-table">
                        <Table data={data} />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default VaultDetails