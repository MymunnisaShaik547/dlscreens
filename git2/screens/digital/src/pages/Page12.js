import React from 'react'
import { BsArrowRight } from "react-icons/bs"
const Page12 = () => {
    return (
        <div className='h-screen bg-blue-100 w-screen'>

                <div class="pl-96 pt-14 relative left-32 bottom-8">
                    <img src="./Assets/dl.png" alt="logo"></img>
                </div>
                <div class="relative bottom-10">
                    <img src="./Assets/boy.png" className='w-52 ml-96 relative top-4 left-52'></img>
                    <img src="./Assets/tickmark.png" className='w-16  relative bottom-28' style={{ marginLeft: 820 }}></img>
                    <h1 class="text-3xl font-bold text-center">Welcome to the world of cyber security</h1>

                </div>
                <div className="bg-white rounded-lg ml-52  mt-20 drop-shadow-2xl relative left-40 bottom-20" style={{ height: 200, width: 900 }} >
                    <div> <p className='text-gray-800 text-2xl font-semibold text-center mr-64 p-8 relative top-10'>AWS</p>
                    </div>

                    <img src='./Assets/amazon.png' alt='aws' style={{ height: 200, width: 250, position: 'relative', bottom: 95 }} />

                    <div >
                        <button className='float-right border-2 w-44 h-12 mr-10 bg-blue-500 text-xl text-white relative bottom-52'>Start Course<BsArrowRight size={24} className='ml-36 relative bottom-6' /> </button>
                    </div>
                </div>
                <button className='border border-yellow-500 w-40 p-2 bg-white ml-54 mt-6 relative right-76 bottom-20'>My Class Room</button>


            </div>
       
    );
};

export default Page12;
