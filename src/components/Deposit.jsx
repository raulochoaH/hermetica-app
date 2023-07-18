import React, { useState } from 'react';
import Image from 'next/image'
import btcLogo from '../../public/btc_logo.svg'



const Deposit = () => {

    const [isDepositing, setIsDepositing] = useState(true);


    return (
        <div className="flex flex-col w-full p-28 px-20 pb-0">
            <div className="dw-tabs">
                <ul className="flex justify-start text-base list-none">
                    <li className={`flex  text-lg items-center my-4 mx-6  dw-tab-deposit before:block before:content before:bg-arrow-up before:bg-no-repeat before:w-10 before:h-10 ${isDepositing ? 'before:-rotate-180 font-semibold' : 'cursor-pointer before:rotate-0'} hover:cursor-pointer`}
                        onClick={() => setIsDepositing(true)}>
                        Deposit
                    </li>
                    <li className={`flex  text-lg items-center my-4 mx-6  dw-tab-deposit before:block before:content before:bg-arrow-up before:bg-no-repeat before:w-10 before:h-10 ${isDepositing ? 'cursor-pointer before:rotate-0 ' : 'before:-rotate-180 cursor-pointer font-semibold'} hover:cursor-pointer `}
                        onClick={() => setIsDepositing(false)}>
                        Withdraw
                    </li>
                </ul>
            </div>

            <div className="flex justify-between items-center mb-16 px-10">
                <div className="relative flex flex-col justify-between  p-12 text-white dw-box">
                    <div className=" flex justify-between w-ful dw-box-title">
                        <div className="dw-box-main-title">
                            <h2 className='mb-2 text-3xl font-extrabold tracking-widest'>{isDepositing ? 'Deposit' : 'Withdraw'}</h2>
                            <p className='text-base text-white font-medium tracking-widest'>
                                Balance: 0 BTC
                            </p>
                        </div>
                        <div className="flex flex-col items-end justify-evenly">
                            <p className='text-sm font-medium tracking-widest text-gray-500'>auto-compund in</p>
                            <p className="text-sm font-medium tracking-widest text-gray-500 dw-box-timer">1d 0h 40m</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-end h-40 m-12 dw-box-input">
                        <div className="flex dw-box-input-section">
                            <div className="flex items-center justify-center h-20 pl-4 pr-8 mr-3.5 bg-hover-dark border border-gray-400 rounded-lg dw-box-input-field content-after">
                                <input placeholder="Enter amount" id="dw-amout" min="1" type="number" name="amount" className='w-40 h-full p-6 bg-transparent text-white font-normal text-base input-field appearance-none border-none' />
                            </div>

                            <button className='flex items-center justify-center m-auto p-10 h-16 w-24 text-base font-normal tracking-wider text-white bg-accent-color-1 border border-gray-400 rounded-lg cursor-pointer dw-box-input-field-button'>Max</button>
                        </div>
                        <div className=" flex items-center justify-center w-fit-content h-10 mt-4 pb-8  text-base font-medium text-white tracking-widest dw-box-pending-section ">
                            {isDepositing ? 'deposit 0 BTC' : 'withdraw 0 BTC '}
                            <span className='dw-info-icon'></span>
                        </div>
                    </div>
                    <button className='m-auto h-16 w-72 mt-4 rounded-3xl mx-auto text-lg font-semibold tracking-widest text-white bg-transparent border border-white  cursor-pointer"
                        style={{ fontSize: "1.6rem" }}'>{isDepositing ? 'Deposit' : 'Withdraw'}</button>
                </div>

                <span className='before:block before:content before:bg-right-arrow before:bg-no-repeat before:w-10 before:h-10 '></span>

                <div className="flex flex-col justify-between h-42rem w-2/4 p-12 rounded-39rem border border-white vault-balance dw-box-second">
                    <div className=" flex flex-col justify-between w-full ">
                        <div className='flex'>
                            <figure>
                                <Image
                                    src={btcLogo}
                                    width="37"
                                    height="36"
                                />
                            </figure>
                            <h2 className='mb-2 text-3xl font-extrabold tracking-wider ml-3.5'>BTC Covered Call</h2>
                        </div>
                        <div>
                            <p className='text-base text-white font-medium tracking-widest ml-2'>
                                Your deposits: 0 BTC
                            </p>
                        </div>

                    </div>


                    <div className="flex flex-col items-center justify-center h-32 w-60 mx-auto text-6xl tracking-wider font-extrabold">
                        <p>8%</p>
                        <p className='pt-2 tracking-widest font-normal leading-6 px-2 text-2xl'>Target APY</p>
                    </div>

                    <div className="vault-total-deposits-bar-container mb-8 2rem; ml-8">
                        <div className="w-full h-3 bg-white rounded-md">
                            <div class="vault-total-deposits-bar-fill h-3 width: 4.59304%"></div>
                            <div class="my-2 text-base font-normal tracking-wider pb-4 ">Total: 0.0459 of 1 BTC</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Deposit