import Deposit from '../components/vaultSection/Deposit'
import VaultDetails from '../components/vaultSection/VaultDetails'
import About from '../components/vaultSection/About'



export default function Home() {
  return (
    <main className="flex flex-col  justify-center items-center">
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
