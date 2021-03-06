import React from 'react'
import { BsClock } from 'react-icons/bs';
import { AiFillCheckCircle, AiFillCiCircle, AiFillAmazonCircle  } from 'react-icons/ai';
import { AiFillPlayCircle,AiFillStar } from 'react-icons/ai';
import { IoArrowUndo } from 'react-icons/io5';
const Page15 = () => {
    return (
        <div>
            <div class="w-screen">
                <img src="./Assets/dl.png" class="mt-6 ml-32"></img>
                <h1 style={{ marginLeft: 900 }} class="relative bottom-12"><u>My Class Room</u></h1>
                <img src="./Assets/bellicon.png" style={{ marginLeft: 1050 }} class="relative left-60 bottom-20"></img>
                <img src="./Assets/user.png" style={{ marginLeft: 1120 }} class="relative left-60 bottom-28 w-8"></img>
            </div>
            <div class="h-16 relative bottom-10 bg-blue-100">
                <BsClock class="ml-44 relative top-4" style={{ fontSize: 30 }} color="gray" />
                <p class="ml-42 relative right-96 bottom-2 text-gray-500">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
                <button class="w-36 p-1 relative bottom-10 bg-blue-500 text-white" style={{ marginLeft: 900 }}>Join Class</button>
            </div>
            <div>
                <p class="mr-96 relative right-96 text-sm">Recorded Classes</p>
            </div>
            <div class="border-2 drop-shadow-2xl float-left border-gray-300 ml-20 mt-6 rounded-xl" style={{ width: 450 }}>
                <p class="ml-12 mt-4">Module 1: UI Design</p>
                <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillCheckCircle class="ml-6 relative top-6 left-8" color="green" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <p class="mt-4 p-1 pl-12 bg-gray-300">Module 2: UX Design</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
                <AiFillPlayCircle class="ml-6 relative top-6 left-8" color="gray" /> <p class="ml-20 mt-1 text-gray-500">1. Lorem ipsum dolor sit amet, consetetur</p>
            </div>
            <div class="float-left mt-20 ml-44">
                <img src="./Assets/video.png"></img>
            </div>
            <div class="clear-left relative top-8">
                <ul class="flex ml-20">
                    <li class="text-gray-500">Courses Info</li>
                    <li class="text-gray-500 ml-10">Resources</li>
                    <li class="text-gray-500 ml-10">Assisments</li>
                    <li class="text-gray-500 ml-10">Projects</li>
                    <li class="text-gray-500 ml-10">Discuss</li>
                    <li class="text-gray-500 ml-10">Feedback</li>
                </ul>
                <hr class="border-4 border-blue-500 w-20 ml-52 relative  top-4"></hr>
                <hr class="mt-4"></hr>
            </div><br></br><br></br>
            


            <div>
                   <h1 class="text-gray-500  mt-4 mr-80 relative right-96 top-2">HTML Source Code</h1>
                   <h1 class="text-gray-500 mr-96 relative left-44 bottom-4">Download File</h1>
                   <img class="ml-72 relative left-96 bg-blue-600 bottom-10" src="./assets/download.png"></img>
                   <hr class="ml-40 relative bottom-6" style={{width:660}}></hr>
                   <h1 class=" mr-80 text-gray-500 relative right-96 bottom-4">CSS Git Hub Link</h1>
                   <h1 class="mr-80 text-gray-500 relative bottom-10 left-28">www.github.com/osacad/css-code</h1>
               </div>
               <div class="mt-10">
                   <h1 class="text-gray-500 mt-4 mr-96 relative right-96 top-2">JavaScript Source Code</h1>
                   <h1 class="text-gray-500 ml-96 relative right-64 bottom-4">Download File</h1>
                   <img class="ml-96 relative bg-blue-600 left-64 bottom-10" src="./assets/download.png"></img>
                   <hr class="ml-20 relative left-46 bottom-6" style={{width:660}}></hr>
                   <h1 class="ml-18 mr-96 text-gray-500 relative right-96 bottom-4">CSS Git Hub Link</h1>
                   <h1 class="ml-70 text-gray-500 relative bottom-10 left-26">www.github.com/osacad/css-code</h1>
               </div>
               <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-14 left-30" style={{marginLeft:904}}>Have a doubt?Rise a query</button>
                   <img src="./Assets/green.png" class="w-2 relative bottom-20 left-60" style={{marginLeft:900}}></img>
        </div>
    );
};

export default Page15;