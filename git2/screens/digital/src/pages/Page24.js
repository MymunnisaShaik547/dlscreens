import React from 'react'

const Page24 = () => {
    return (
        <div className='h-screen bg-blue-100 w-screen'>

                <div class="pl-96 pt-14 relative left-32 bottom-8">
                    <img src="./Assets/dl.png" alt="logo"></img>
                </div>
            <div style={{ height: 450, width: 550 }} className="bg-white rounded-lg absolute inset-  mt-20 ml-96 drop-shadow-2xl ">
                <p className='text-gray-400 text-xl font-semibold flex justify-center mt-12'>RESET YOUR PASSWORD</p>
                <div className='ml-10 mt-24'>
                    <input className='border-b-2 w-96' type="password" placeholder="NEW PASSWORD"></input>
                </div>
                <div className='p-10 mt-2 ml-6 '>
                    <input className='border-b-2 w-96' type="password" placeholder="CONFIRM PASSWORD"></input>
                </div>
                <div>
                    <button className=" bg-blue-500 w-40 rounded-md py-2 px-6 text-white ml-38 mt-2 text-lg font-medium">SUBMIT</button>
                </div>
            </div>
        </div>
    );
};

export default Page24;
