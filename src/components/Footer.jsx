import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import discordIcon from '../../public/discord.svg'
import twitterIcon from '../../public/twitter.svg'



const Footer = () => {
    return (
        <footer>
            <section className='mt-10 mx-auto mb-32 w-65vw min-w-115 h-31rem pt-12 pb-10 px-12 text-white bg-accent-1 rounded-4.5rem p-16 cycle-container  '>
                <div className="mb-8">
                    <h1 className='mb-2 text-3xl font-extrabold tracking-wider'>The Epoch</h1>
                    <p className='text-base font-normal'>
                        Current Stage: Intra Epoch
                    </p>
                </div>
                <div className="flex flex-col w-full">
                    <p className="flex justify-end items-center mb-12 text-sm">
                        <span className='font-semibold mr-1'> 1d 19h 54m 35s </span> before the epoch ends
                    </p>
                    <div className="flex justify-between mb-7 cycle-chart-sections">
                        <div className='h-7 w-20 rounded-full  cycle-chart-progress'>
                            <div className="cycle-chart-settlemente-progress"></div>
                        </div>
                        <div className='h-7 w-40 rounded-full  cycle-chart-progress'>
                            <div className='cycle-chart-settlemente-progress '></div>
                        </div>
                        <div className='h-7 w-3/4 rounded-full  cycle-chart-progress'>
                            <div className='cycle-chart-intracycle-progress'></div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <p className='text-base font-normal'>Friday 7th 12:00 PM</p>
                        <p className='text-base font-normal'>Friday 14th 12:00 PM</p>
                    </div>
                </div>
            </section>

            <section className='w-4/5 mx-auto mb-8'>
                <div className="flex justify-between items-center mb-5">
                    <div className="flex justify-between items-center w-36">
                        <Link
                            href='https://discord.com/invite/s2NkRqauqZ'
                            target='_blank'>
                            <Image
                                priority
                                src={discordIcon}
                                alt="Swap Icon"
                                className='mr-1.5'
                            />
                        </Link>
                        <Link
                            href='https://discord.com/invite/s2NkRqauqZ'
                            target='_blank'>
                            <Image
                                priority
                                src={twitterIcon}
                                alt="Swap Icon"
                                className='mr-1.5'
                            />
                        </Link>
                    </div>
                    <div className="flex justify-between items-center w-60 text-base font-normal mr-36	">
                        <Link
                            href='https://docs.hermetica.fi/'
                            target='_blank'
                        >
                            <p className='underline'>How it works</p>
                        </Link>
                        <Link
                            href='#'
                            target='_blank'
                        >
                            <p className='underline'>Terms of Use</p>
                        </Link>
                    </div>
                    <div className="theme-toogle"></div>
                </div>
                <p className='w-fit mx-auto text-base font-normal'>@ 2023 Hermetica</p>
            </section>
        </footer>
    )
}

export default Footer
