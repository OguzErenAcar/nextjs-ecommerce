import Navbar from '@/components/navbar'
import React from 'react' 
import '@/styles/global.scss'; // yol dosya yapına göre değişebilir

function _app({ Component, pageProps }:{ Component:any, pageProps:any }) {
  return (
    <div>
      <Navbar></Navbar> 
      <Component {...pageProps}/>
    </div>
  )
}

export default _app
