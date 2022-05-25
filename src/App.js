import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

import Navbar from './components/Navbar'
import AddressBox from './components/AddressBox'
import { useState } from 'react'
let addresses = []

function App() {

  const [isLoading, setLoading] = useState(true);

  fetch('https://alephium.ono.re/api/stats/addresses?top=100')
    .then(response => response.json())
    .then(data => {

      addresses = data.addresses
      console.log(addresses)
      setLoading(false)

    })


  if (!isLoading) {

    return (
      <div>
        <Navbar />

        <div className='container pt-5'>



         

          <p className='h3 mb-3'>Top 100 addresses</p>

          <div className='container border p-0 rounded-5 bg-white mb-5'>


            <div className="row p-3 ms-0 me-0 border-bottom bg-light">

              <div className="col-lg-6">
                <p className='mb-0'>Address</p>
              </div>

              <div className="col-lg-6">
                <p className='mb-0'>Balance</p>
              </div>

            </div>


            {addresses.map((address) => {

              return (
                <AddressBox address={address.address} balanceHint={address.balanceHint} />
              )

            })}

          </div>
        </div>


          <div className='container-fluid bg-light'>
            <div className='container p-3'>
              <p className='mb-0'>Made with ❤️ by Wilhelm Källström</p>
            </div>
          </div>

      </div>
    )

  }





}

export default App