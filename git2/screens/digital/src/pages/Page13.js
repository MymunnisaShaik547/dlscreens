import React from 'react'
const Page13 = () => {
    return (
        <div className='h-screen bg-blue-100 w-screen'>

            <div class="pl-96 pt-14 relative left-48 bottom-8">
                <img src="./Assets/dl.png" alt="logo"></img>
            </div>
            <div style={{ height: 400, width: 500 }} className="bg-white rounded-lg absolute inset-48  ml-96 mt-6 drop-shadow-2xl ">
                <p className='text-gray-700 text-xl font-semibold flex justify-center mt-32'>CHECK YOUR MAIL</p>
                <p className='text-gray-600 text-lg font-2xl flex justify-center mt-12'>An email with password reset instructions has been sent</p>
                <p className='text-gray-600 text-lg font-2xl flex justify-center '> to your email address</p>
            </div>
        </div>

    );
};

export default Page13;
