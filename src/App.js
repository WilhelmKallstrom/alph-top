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
          <div className='row'>
            <div className='col-lg-8 mb-3'>

              <div className='container p-3 bg-white rounded-10'>


                <p className='fw-bold lead mb-0'>Top 100 Addresses</p>
                <p>Addresses with most ALPH on the Alephium network</p>


                <div className='container rounded-3 border-start border-end border-top p-0'>


                  {addresses.map((address) => {

                    return (
                      <AddressBox address={address.address} balanceHint={address.balanceHint} />
                    )

                  })}

                </div>


              </div>

            </div>

            <div className='col-lg-4'>


              <div className='container p-3 bg-white rounded-10'>

                <p className='fw-bold lead mb-0'>News</p>
                <p>Latest tweets from the official Alephium Twitter</p>

                <iframe className='rounded-0' title='newsFeed' height="400" width='100%' data-tweet-url="https://twitter.com/alephium" src="data:text/html;charset=utf-8,%3Ca%20class%3D%22twitter-timeline%22%20href%3D%22https%3A//twitter.com/alephium%3Fref_src%3Dtwsrc%255Etfw%22%3ETweets%20by%20alephium%3C/a%3E%0A%3Cscript%20async%20src%3D%22https%3A//platform.twitter.com/widgets.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A"></iframe>

              </div>

            </div>



          </div>

        </div>


          <div className='container p-3'>
            <p className='mb-0 text-center'>Made with ❤️ by Wilhelm Källström</p>
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