"use client";

import { useFormik } from 'formik'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import * as Yup from 'yup';

export default function FormSubscribe() {

    const [loading, setLoading] = useState(false)
    const validationSchema = Yup.object({
        email: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Invalid email format').required('Please Enter your Email')
    })
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            setLoading(true)
            emailjs.send(
                "service_o10pwm4",
                "template_6xngb9o",
                { email: values.email },
                "_8_aWp1MgejgtEnk2"
            ).then(
                () => {
                    toast.success('Subscribed Successfully', { position: "top-center" }),
                        resetForm(),
                        setLoading(false)
                },
                (error) => {
                    toast.error("Something worng" + error.text, { position: "top-center" });
                }
            ).finally(() => { setLoading(false) })
        }
    })

    return (<>
        <form onSubmit={formik.handleSubmit} className="max-w-md md:mt-8 mt-4">
            <div className="relative">
                <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name='email' type="email" id="default-search" className="block w-full p-4 pe-[150px] overflow-hidden text-base text-dark-green  rounded-lg bg-gray-50 focus:ring-green outline-0 shadow-lg " placeholder="Enter your email here" required />
                <button disabled={loading} type="submit" className={`  flex items-center gap-2 text-white absolute end-2.5 bottom-2.5 ${loading ? "bg-green/30 cursor-not-allowed" : "bg-green hover:bg-green/80 cursor-pointer"} transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 `}> {loading && <span className="loader"></span>} Subscribe </button>

            </div>
            {formik.touched.email && formik.errors.email && <p className='text-red-700 text-base mt-1 ms-2
                '>{formik.errors.email}</p>}
        </form>
    </>)
}
