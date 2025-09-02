'use client'
import React, { useState } from 'react'
import OrderDetails from '../OrderDetails/OrderDetails'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'


export default function Order() {
  const [loading, setLoading] = useState(false)
  const initialValues = {
    name: '',
    phone: '',
    address: '',
    quantity: ''

  }
  const price = 50;
  const fees = 3

  function orderNow(values, { resetForm }) {
    setLoading(true)
    emailjs.send(
      "service_je0u29g",
      "template_mn4c49f",
      {
        name: values.name,
        phone: values.phone,
        address: values.address,
        quantity: values.quantity,
        total: total
      },
      "aHntOEDY0NvDPGG3C",
    ).then(() => {
      toast.success('Order placed Successfully', { position: "top-center" })
      resetForm()

    }).catch((error) => {
      toast.error("Something worng" + error.text, { position: "top-center" });
    }).finally(() => setLoading(false))
  }

  const formik = useFormik({
    initialValues,
    onSubmit: orderNow
  })

  const total = formik.values.quantity ? (price + fees) * Number(formik.values.quantity) : 0

  return (
    <div className='c size min-h-screen '>

      <h2 className='font-semibold md:text-4xl text-[28px] text-green mt-1 md:mt-3 capitalize text-center md:mb-5'>Order Now</h2>
      <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm font-medium text-green ">Your Name</label>
          <input name='name' value={formik.values.name} onChange={formik.handleChange} type="text" id="text" className=" border border-green text-dark-green text-base rounded-lg focus:ring-green focus:border-green outline-0 block w-full p-2.5 " placeholder="Enter Your Name here" required />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green ">Your Phone</label>
          <input name='phone' value={formik.values.phone} onChange={formik.handleChange} type="tel" id="phone" className=" border border-green text-dark-green text-base rounded-lg focus:ring-green focus:border-green outline-0 block w-full p-2.5 " placeholder="Enter Your Phone here" required />
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-green ">Your Address</label>
          <input name='address' value={formik.values.address} onChange={formik.handleChange} type="text" id="address" className=" border border-green text-dark-green text-base rounded-lg focus:ring-green focus:border-green outline-0 block w-full p-2.5 " placeholder="Enter Your Address here" required />
        </div>
        <div className='mb-5'>
          <select name='quantity' required value={formik.values.quantity} onChange={formik.handleChange} className="block w-full p-2 mb-6 text-base text-dark-green border border-green rounded-lg  " >
            <option value="" className='text-dark-green text-base bg-transparent'>Select Quantity</option>
            {Array.from({ length: 10 }).map((_, i) => (
              <option className='text-dark-green text-base bg-transparent' key={i} value={`${i + 1}`}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className='mb-5 flex   flex-col'>
          <h2> Price: {price}$</h2>
          <h2> Quantity: {formik.values.quantity}</h2>
          <h2> Shipping Fees: {fees}$</h2>
          <h2 className='font-semibold'>Total: {total}$ </h2>
        </div>
        <button type="submit" disabled={loading} className={`flex items-center gap-2  justify-center text-white hover:bg-green/55 transition-all duration-300 cursor-pointer  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full ${loading ? "bg-green/50 cursor-not-allowed " : 'bg-green'}`}>{loading && <span className="loader"></span>} Place Order</button>
      </form>


    </div>
  )
}
