import React from 'react'
import Doll1 from "../pages/Assets/Doll1.png"

const Page3 = () => {
    return (
        <div className="h-screen bg-blue-100 flex justify-center items-center">
            <div>
                <img src="./Assets/dl.png" class="relative left-60 top-6" alt="logo" />

                <div> <img className='' src={Doll1} alt='logo' style={{ position: "relative", left: 10, width: 700 }} /></div>
            </div>
            <div style={{ height: 450, width: 400 }} className="bg-white rounded-lg absolute inset- ml-10 mt-16 drop-shadow-2xl ">
                <button className=" bg-gray-200 w-1/2 rounded-xs py-3 px-6 text-gray-600 float-left text-xl font-semibold">SIGN UP</button>
                <button className=" bg-white w-1/2 rounded-xs py-3 px-6 text-gray-600 float-right text-xl font-semibold">SIGN IN</button>
                <div className='ml-4'>
                    <input className='border-b-2 mt-10 w-96' type="text" placeholder="EMAIL"></input>
                </div><br></br>
                <div className='ml-4'>
                    <input className='border-b-2 w-96' type="password" placeholder="PASSWORD"></input>
                </div>
                <div className='p-4 mt-2 flex gap-4'>
                    <input className='border-b-2 ml-32 w-32' type="Forget Password" placeholder="Forget Password"></input>
                </div>
                <div>
                    <div>
                        <button className=" bg-blue-500 w-40 rounded-full py-2 px-6 text-white ml-30  text-lg font-medium">Sign In</button>
                        <p className='mt-2 ml-46 text-gray-400'>OR</p>
                    </div>
                    <div className='flex flex-row gap-2 ml-36 mt-2'>
                        <img className='h-12' src='assets/in.png' alt='logo' />
                        <img className='h-12' src='assets/Google.png' alt='logo' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
