import dynamic from 'next/dynamic';
import Image from 'next/image';
import btcLogo from '../../public/btc_logo.svg'
import Table from '../components/Table'
import AnalyticsRow from '../components/AnalyticsRow'




const DynamicPriceBtc = dynamic(
  () => import('../components/PriceBtc'),
  { ssr: false }
);



export default function Analytics() {

  const data = [
    {
      label: 'Extrapolated APY (pre-fees)',
      value: '16.1%',
    },
    {
      label: 'Extrapolated APY (post-fees)',
      value: '14.4%',
    },
    {
      label: 'Latest 7 Days Growth',
      value: '0.17%',
    },
    {
      label: 'Latest Epoch Annualized',
      value: '9.04%',
    },
    {
      label: '30 Days Growth',
      value: '0%',
    },
    {
      label: '30 Days Growth Annualized',
      value: '0%',
    },
    {
      label: 'Growth Since Inception',
      value: '0.73%  (16 Days)',
    },
    {
      label: 'Growth Since Inception Annualized',
      value: '13.4%',
    },
    {
      label: 'Total Premium Generated',
      value: '$3.89',
    },
  ];


  const rowData1 = {
    currency: 'BTC',
    call: '35,000',
    date: 'Jul 21, 2023',
    deposited: '0.05308004 BTC',
    premium: '0.0000795 BTC',
    premiumPercentage: '0.150%',
    return: 'In Progress',
    returnPercentaje: ''
  };

  const rowData2 = {
    currency: 'BTC',
    call: '34,000',
    date: 'Jul 14, 2023',
    deposited: '0.04593042 BTC',
    premium: '0.0000765 BTC',
    premiumPercentage: '0.167%',
    return: '0.00006885 BTC',
    returnPercentage: '0.150%'
  };

  const rowData3 = {
    currency: 'BTC',
    call: '33,000',
    date: 'Jul 7, 2023',
    deposited: '0.012 BTC',
    premium: '0.0000492 BTC',
    premiumPercentage: '0.410%',
    return: '0.00004428 BTC',
    returnPercentage: '0.369% '
  };

  return (
    <main className="h-57rem flex flex-col  justify-center items-center">

      <div className='w-full  px-28 mt-36 h-full mb-0'>

      <h1 class="mx-auto pl-2 my-12 text-3xl font-extrabold tracking-wide">Covered Call Analytics</h1>

        <div className="flex justify-between w-full px-2 vault-details-info "
        >
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
                  <h2 className="my-1 mx-2 py-0.25 px-0.25 text-3xl font-semibold tracking-wide">30,138 USD</h2>
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

        <div className=" mt-16 px-2 analytics-table">
          <div>
            <div className='flex justify-evenly w-full h-20 border-b border-gray-300 '>
              <div className="flex justify-evenly w-full border-b border-gray-300" id="analytics-table-header">
                <div className="flex justify-center items-center  w-80  h-5rem text-2xl font-semibold analytics-table-title-slot">
                  <p>Product</p>
                </div>
                <div className="flex justify-center items-center  w-80  h-5rem text-2xl font-semibold analytics-table-title-slot">
                  <p>Deposited</p>
                </div>
                <div className="flex justify-center items-center  w-80  h-5rem text-2xl font-semibold analytics-table-title-slot analytics-table-title-premium">
                  <p className="analytics-row-premium-value">Premium</p>
                </div>
                <div className="flex justify-center items-center  w-80  h-5rem text-2xl font-semibold analytics-table-title-slot">
                  <p className="analytics-row-return-value">Return</p>
                </div>
                <div className="flex justify-center items-center  w-48  h-5rem text-2xl font-semibold analytics-table-tx analytics-table-title-slot">
                  <p>Tx</p>
                </div>
              </div>
            </div>


            <AnalyticsRow rowData={rowData1} />
            <AnalyticsRow rowData={rowData2} />
            <AnalyticsRow rowData={rowData3} />
          </div>

        </div>

      </div>

    </main>
  )
}