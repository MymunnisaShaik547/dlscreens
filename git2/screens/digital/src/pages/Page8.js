import React from 'react'

const Page8 = () => {
    return (
        <div className="h-screen bg-blue-100 flex justify-center items-center">
            <div>
                <img src="./Assets/dl.png" class="relative left-6  bottom-52 h-20 w-34" alt="logo" />
            </div>
            <div style={{ height: 350, width: 500 }} className="bg-white rounded-lg absolute inset- ml-10 mt-24 drop-shadow-2xl ">
                <div className='ml-4'>
                    <p className="mt-2 ml-46 text-gray-400  mt-20 font-bold justify-center">RESET YOUR PASSWORD</p>
                    <p className='mt-2 ml-46 text-gray-400 justify-center'>Please provide the Email Address you used When You Signed Up<br />for YourOSAcad account </p>
                    <input className='border-b-2 mt-10 relative right-10 w-96' type="text" placeholder="EMAIL ADDRESS"></input>
                </div>
                <div>
                    <button className=" bg-blue-500 w-40 rounded-full py-2 px-6 text-white ml-30 mt-12  text-lg font-medium">SEND EMAIL</button>
                </div>
            </div>
        </div>
    );
};

export default Page8;
