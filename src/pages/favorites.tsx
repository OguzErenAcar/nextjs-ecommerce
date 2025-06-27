import React, { Component } from 'react'
import { Button } from '@mui/material'
import ProductRow from '@/components/ProductRow'
export default class Favorites extends Component {
  render() {
    return (
        <div className=''>
          <span>Favorites</span>
          <div className='flex justify-center ' >
          <div className=' flex flex-col justify-between h-[2000px]' >
            {/* must grid */}
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>
          <ProductRow/>

          </div>
          </div>
        </div>
    )
  }
}
