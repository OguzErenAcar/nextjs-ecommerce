import React, { useState } from 'react'
import { RootState } from '../../redux/configure';
import { useSelector } from 'react-redux';

function UserInfo() {
  //telefon ve şifre ekle ,burası bilgi güncelleme sayfası 

  const widthScreen =useSelector((state:RootState)=>state.screen.width)
//root olduğu için çalışmıyor  ?
  return (
    <div>
      <div className='w-full relative bg-red-100'>

      <div className=" w-[50%] absolute py-3 sm:max-w-xl ">
        <div className="relative    bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10" >
          <div className="max-w-md mx-auto">
            <div className="  grid grid-cols-1 sm:grid-cols-2 gap-1 ">
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Full Name</label
                >
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="fullname"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Email</label
                >
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Username</label
                >
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="username"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Password</label  >
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="password"
                />
              </div>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-1">
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Date of Birth</label
                >
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="date"
                  id="dob"
                />
              </div>
              <div>
                <label
                  className="font-semibold text-sm text-gray-600 pb-1 block"

                >Gender</label
                >
                <select
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div>

              </div>
            </div>

          </div>
        </div>
        </div>
          <div className=" w-[50%] absolute py-3 sm:max-w-xl right-0">
        <div className="relative    bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10" >
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserInfo
