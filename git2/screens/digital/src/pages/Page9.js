import React from 'react'

const Page9 = () => {
    return (
        <div className="h-screen bg-blue-100 ">
            <div>
                <img src="./Assets/dl.png" alt="logo" class="h-16 ml-72 relative left-96 top-8" />
            </div>
            <div style={{ height: 550, width: 750 }} className="bg-white box-lg absolute inset- ml-10 mt-16 mb-30 drop-shadow-2xl ml-52 relative left-96 ">
                <div className='h-16 bg-gray-400 text-white text-left text-xl p-4 '>
                    ORDER DETAILES
                </div>
                <div className='h-10  bg-gray-100 text-gray relative -bottom-10'>
                    <p className='mr-96 relative top-2'>COURSE</p><p className='ml-96 relative left-12 bottom-4'>PRICE</p>
                </div>
                <div className='h-26 w-40 relative top-20 ml-28 '>
                    <img src="./Assets/amazon.png" alt="aws" />
                    <p className='px-56 -mt-16'>AWS</p><p class="ml-96 relative left-16 bottom-4">₹34,999.00</p>
                    <hr className='border-b-1  mt-8 float-left relative right-28' style={{ width: 750 }}></hr>
                </div>
                <div className='ml-96 relative left-4 mt-32 font-semibold text-gray-500'> Total : ₹ 34,999.00</div>
                <div>
                    <input className='border-b-2 ml-80 w-24 mt-8' type="Coupon" placeholder="Coupon"></input>
                    <button className="   px-2 w-20 h-8 text-center text-gray-500 ml-96 relative left-20 bottom-8 text-lg font-medium border border-gray-300">Apply</button>
                </div>
                <div className='font-semibold ml-96'>Grand Total : ₹ 34,999.00</div>
                <div>
                <button className=" bg-blue-500 w-54 box-full py-2 px-2 text-white ml-96 mt-8  text-md font-medium">PROCEED FOR PAYMENT</button>
                </div>
            </div>
        </div>

    );

};

export default Page9;
