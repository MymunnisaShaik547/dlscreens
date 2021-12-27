import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
const Page5 = () => {
    return (
        <div>
            <div className=" bg-white h-full ">
                <div>
                    <img src="./Assets/dl.png" alt="logo" class="h-20 ml-16 relative top-8" />
                </div>
                <h6 className=" text-gray-600  ml-96 relative left-96 bottom-4 border-b-2 w-32">My Class Room</h6>
                <img src="Assets/bellicon.png" alt='bell' className='float-right mr-80 relative right-80 bottom-12' />
                <img src="Assets/user.png" alt="user" className='float-right relative right-60 bottom-12' />
            </div>
            <div className='bg-white-200 drop-shadow-2xl ml-44 mt-24' style={{ width: 900, height: 200 }}>
                <img src="./Assets/amazon.png" alt="aws" className='relative  ' style={{ height: 200, width: 200 }} />
                <div className='pl-44 -mt-44 relative right-52 font-bold'>AWS</div>
                <div className="pl-44 mb-44 text-sm relative right-16">Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy<br />eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</div>
                <div className='flex flex-row relative bottom-36 left-64'>
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='gray' />
                </div>
                <div>
                    <button className="float-right border-2 w-36 h-10 relative bottom-60 mr-8 bg-blue-500 text-xl text-white">Continue<BsArrowRight size={24} className="ml-28 relative bottom-6" /></button>
                </div>
            </div>
            <div className='bg-white-200 drop-shadow-2xl ml-44 mt-24' style={{ width: 900, height: 200 }}>
                <img src="./Assets/python.png" alt="aws" className='relative  ' style={{ height: 200, width: 200 }} />
                <div className='pl-44 -mt-44 relative right-52 font-bold'>Python</div>
                <div className="pl-44 mb-44 text-sm relative right-16">Lorem ipsum dolor sit amet,consetetur sadipscing elitr,sed diam nonumy<br />eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</div>
                <div className='flex flex-row relative bottom-36 left-64'>
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='blue' />
                    <AiFillStar color='gray' />
                </div>
                <div>
                    <button className="float-right border-2 w-36 h-10 relative bottom-60 mr-8 bg-blue-500 text-xl text-white">Continue<BsArrowRight size={24} className="ml-28 relative bottom-6" /></button>
                </div>
            </div>


        </div>
    );
};

export default Page5;
