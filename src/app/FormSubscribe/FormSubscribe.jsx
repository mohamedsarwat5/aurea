"use client";

import { useFormik } from 'formik'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
export default function FormSubscribe() {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values, { resetForm }) => {
            setLoading(true)
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                values,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            ).then(
                () => {
                    toast.success('Subscribed Successfully', { position: "top-center" }),
                        resetForm()
                    setLoading(false)
                },
                (error) => {
                    toast.error("Something worng" + error.text, { position: "top-center" });
                }
            )
        }
    })

    return (<>
        <form onSubmit={formik.handleSubmit} className="max-w-md md:mt-8 mt-4">
            <div className="relative">
                <input onChange={formik.handleChange} value={formik.values.email} name='email' type="email" id="default-search" className="block w-full p-4 pe-[150px] overflow-hidden text-base text-dark-green  rounded-lg bg-white-50 focus:ring-green outline-0 shadow-lg " placeholder="Enter your email here" required />
                <button disabled={loading} type="submit" className={`  flex items-center gap-2 text-white absolute end-2.5 bottom-2.5 ${loading?"bg-green/30 cursor-not-allowed" :"bg-green hover:bg-green/80 cursor-pointer"} transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 `}> {loading && <span className="loader"></span>} Subscribe </button>
            </div>
        </form>
    </>)
}
