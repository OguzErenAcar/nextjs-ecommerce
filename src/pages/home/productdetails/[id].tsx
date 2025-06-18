import React from 'react'
import { useRouter } from 'next/router'

function Productdetails() {
  const router = useRouter();
  const {id} =router.query;
  return (
    <div>
      {id}
    </div>
  )
}

export default Productdetails
