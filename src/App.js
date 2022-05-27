import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { initializeApp } from "firebase/app";
import Chart from 'react-apexcharts'
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

let options = { labels: [] }
let series = []

let addresses = []

function App() {

  let addressIndex = 0;
  const [isLoading, setLoading] = useState(true);

  //Fetch all top 100 blocks
  fetch('https://alephium.ono.re/api/stats/addresses?top=256')
    .then(response => response.json())
    .then(data => {

      fetch('https://mainnet-backend.alephium.org/infos/supply/total-alph')
        .then(response => response.json())
        .then(data2 => {

          let topSum = 0;
          let othersSum = 0;
          let totalAlph = 0;

          totalAlph = data2
          addresses = data.addresses

          series = addresses.map(a => a.balance).slice(0, 10)

          series.forEach(element => {
            topSum += element
          })

          othersSum = topSum - totalAlph

          series.push(othersSum)
          options.labels = ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', '#10', 'others']

          setLoading(false)


        })


    })


  if (!isLoading) {

    return (
      <div>
        <div className='container mt-4'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='container p-3 bg-white rounded-10 mb-3'>
                <p className='fw-bold lead mb-0'>Pie Chart</p>
                <p>Top 10 addresses displayed in a pie chart compared to "others"</p>
                <Chart options={options} series={series} type="pie" width="100%" />
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
                      <AddressBox address={address.address} balanceHint={address.balanceHint} index={addressIndex} name={address.name} />
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
            <p className='fw-bold lead mb-0 bg-loading text-transparent w-content'>Pie Chart</p>
            <p className='bg-loading text-transparent w-content'>Top 10 addresses displayed in a pie chart compared to "others"</p>
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