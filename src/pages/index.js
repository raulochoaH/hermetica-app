import Image from 'next/image'
import { Inter } from 'next/font/google'
import Deposit from '../components/Deposit'
import VaultDetails from '../components/VaultDetails'
import About from '../components/About'



export default function Home() {
  return (
    <main className="h-57rem flex flex-col  justify-center items-center">
      <div className="w-full h-full vault-body">
        <Deposit />
      </div>
      <div className='w-full px-0'>
          <VaultDetails />
          <About />
        </div>
    </main>
  )
}
