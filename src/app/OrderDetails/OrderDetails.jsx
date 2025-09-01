import React from 'react'

export default function OrderDetails() {
    return (<>


        <div>
            <form className="max-w-sm mt-6">
                <select className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " >
                    <option defaultValue="Select Quantity">Select Quantity</option>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <option key={i} value={`${i + 1}`}>{i + 1}</option>
                    ))}
                </select>
            </form>
        </div>
    </>

    )
}
