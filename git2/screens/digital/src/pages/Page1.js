import React from 'react'

const Page1 = () => { 
    return (
        <div>
        <div className="flex bg-white h-18 mt-5 w-screen">
        <div>
            <img className="mx-28 h-16" src="Assets/dl.png" alt="logo" />
        </div>
        <div className="flex  gap-16 items-center mx-44">
            <div className="flex text-gray-600">
                Courses
            </div>
            <div className="flex text-gray-600 ">
                Programs
            </div>
            <div className=' flex text-gray-600'>
                ContactUs
            </div>                                      
            <div>
                <button className=" bg-yellow-300 w-40 rounded-full py-3 px-6 text-gray-600 float-left text-base">Get Trained</button>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Page1;
