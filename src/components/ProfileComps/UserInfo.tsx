import React, { useState } from 'react'
import { RootState } from '../../redux/configure';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import {Formik,Field , Form, FormikHelpers} from 'formik'
import { json } from 'stream/consumers';


function UserInfo({height}:{height:number}) {
  //telefon ve şifre ekle ,burası bilgi güncelleme sayfası 

  const widthScreen =useSelector((state:RootState)=>state.screen.width)

interface Values{
  name:string,
  lastname:string,
  email:string,
  number:number|null,
  dateOfBirth:Date|null
}

interface PasswordValues{
  Password:string,
  newPassword:string,
  newPasswordAgain:string,
}


  const sendInfoForm=(values:Values)=>{
    alert(JSON.stringify(values,null,2))
  }
  const sendPasswordForm=(values:PasswordValues)=>{
    alert(JSON.stringify(values,null,2))
  }
  
  return (
    <div className='w-full '>
      <div className=' flex justify-between '>
      <div style={{width:widthScreen*33/100 ,height:height}} className={` py-3 sm:max-w-xl`}>
        <div className=" h-full relative bg-white mx-8 md:mx-0 shadow rounded-l sm:p-10" >
          <div className="max-w-md mx-auto">
          <Formik <Values>
            initialValues={{
                  name:"",
                  lastname:"",
                  email:"",
                  number:null,
                  dateOfBirth:null
            }}
             onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
                ) => {
              setTimeout(() => {
                sendInfoForm(values)
               // alert(JSON.stringify(values, null, 30));
                setSubmitting(false);
              }, 500);
            }}>
          <Form>
            <div className="  grid grid-cols-1 sm:grid-cols-2 gap-1 ">
              <div>
                <label className="font-semibold text-sm text-gray-600 pb-1 block"> Name</label>
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="name"
                  />
              </div>
              <div>
                <label  className="font-semibold text-sm text-gray-600 pb-1 block" >Last Name </label >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="lastname"
                  />
              </div>
            </div>
              <div>
                <label  className="font-semibold text-sm text-gray-600 pb-1 block" >Email</label >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  name="email"
                  />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block" >Number</label  >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="number"
                  name="number"
                  />
              </div>
            <div className=" grid grid-cols-1  gap-1">
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block">Date of Birth</label >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="date"
                  name="dateOfBirth"
                  />
              </div>
            </div>
            <div>
              <Button sx={{backgroundColor:"#b3e5fc"}}
                type='submit'
              > Update </Button>
            </div>
            </Form>
          </Formik>

          </div>
        </div>
      </div>
      <div style={{width:widthScreen*33/100 ,height:height}} className=" py-3 sm:max-w-xl ">
        <div className="h-full relative  bg-white mx-8 md:mx-0 shadow rounded-l sm:p-10" >
          <Formik <PasswordValues>
            initialValues={{
                Password:"",
                newPassword:"",
                newPasswordAgain:"",
            }}
            onSubmit={(values:PasswordValues,
              {setSubmitting}:FormikHelpers<PasswordValues>)=>{
              setTimeout(()=>{
                sendPasswordForm(values)
                setSubmitting(false)
              },500)
            }}
          >
            <Form>
          <div className="max-w-md mx-auto">
              <div>
                <label  className="font-semibold text-sm text-gray-600 pb-1 block" >Password</label >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="Password"
                  name="Password"
                  />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block" >New Password</label  >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="Password"
                  name="newPassword"
                  />
              </div>
               <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block" >New Password (Again)</label  >
                <Field
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="Password"
                  name="newPasswordAgain"
                  />
                <span className='font-serif text-xs '>New Password must include number and uppercase</span>
              </div>
          
            <div>
              <Button type="submit" sx={{backgroundColor:"#b3e5fc" ,marginTop:3 }}> Update </Button>
            </div>
          </div>
        </Form>
      </Formik>
        </div>
        </div>
      </div>

    </div>
  )
}

export default UserInfo
