import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

  let addressIndex = 0;
  const [isLoading, setLoading] = useState(true);

  //Fetch all top 100 blocks
  fetch('https://alephium.ono.re/api/stats/addresses?top=256')
    .then(response => response.json())
    .then(data => {

      addresses = data.addresses
      //console.log(addresses)
      setLoading(false)

    })


  if (!isLoading) {

    return (
      <div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='container p-3 bg-white rounded-10 mb-3'>
                <p className='fw-bold lead mb-0'>News</p>
                <p>Latest tweets from the official Alephium Twitter</p>
                <iframe className='rounded-0' title='newsFeed' height="300" width='100%' data-tweet-url="https://twitter.com/alephium" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/alephium%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20alephium%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>
              </div>
            </div>

            <div className='col-lg-8 order-sm-first'>
              <div className='container p-3 bg-white rounded-10'>
                <p className='fw-bold lead mb-0'>Top {addresses.length} Addresses</p>
                <p className=''>Addresses with most ALPH</p>
                <div className='container rounded-3 border-start border-end border-top p-0 scroll-y address-container'>
                  {addresses.map((address) => {

                    addressIndex++;

                    return (
                      <AddressBox address={address.address} balanceHint={address.balanceHint} index={addressIndex} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container p-3 pt-5 pb-5'>
          <p className='mb-0'>Made with ❤️ by <a className='text-decoration-none' href='https://github.com/WilhelmKallstrom' target='_blank'>Wilhelm Källström</a></p>
          <p className='mb-0'>API provided by <a className='text-decoration-none' href='https://github.com/sven-hash/' target='_blank'>Svenhash</a></p>
        </div>
      </div>

    )

  }


  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='container p-3 bg-white rounded-10 mb-3'>
            <p className='fw-bold lead mb-0 bg-loading text-transparent w-content'>News</p>
            <p className='bg-loading text-transparent w-content'>Latest tweets from the official Alephium Twitter</p>
            <div className='twitter-loading'></div>
          </div>
        </div>
        <div className='col-lg-8 order-sm-first'>
          <div className='container p-3 bg-white rounded-10'>
            <p className='fw-bold lead mb-0 bg-loading text-transparent w-content'>Top *** Addresses</p>
            <p className='bg-loading text-transparent w-content'>Addresses with most ALPH</p>
            <div className='container border-start border-end border-top p-0'>
              <div className='address-loading'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default App