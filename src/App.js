import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Navbar from './components/Navbar'
import AddressBox from './components/AddressBox'
import { useState } from 'react'
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA7qTlCunaAft-BD_r3kKbfnv1FAmyKE8",
  authDomain: "alph-top.firebaseapp.com",
  projectId: "alph-top",
  storageBucket: "alph-top.appspot.com",
  messagingSenderId: "685954686771",
  appId: "1:685954686771:web:d463973b841a459be02846",
  measurementId: "G-ET8B0H8QBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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



          <p className='h3 mb-3'>Top 💯 addresses on the Alephium network</p>

          <div className='container border p-0 rounded-3 bg-dark mb-5 overflow-hidden shadow'>


            <div className="row p-3 ms-0 me-0 border-bottom bg-dark2 rounded-3">

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


          <div className='container-fluid bg-dark3 border-top'>
            <div className='container p-3'>
              <p className='mb-0'>Made with ❤️ by Wilhelm Källström</p>
            </div>
          </div>

      </div>
    )

  }


  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <p className='h3 spinning'>⌛</p>
    </div>
  )


}

export default App