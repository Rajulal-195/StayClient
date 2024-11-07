import React from 'react'

function PaymentGate({ booking }) {
  console.log("booking id ", booking)
  return (
    <div>
      <h1 className='mt-5 py-5 alert alert-success'>
        Congratulation your<br/> 
        Booking hase been Confirmed
      </h1>
    </div>
  )
}

export default PaymentGate