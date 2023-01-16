import React from 'react'
import Wordle from '../assets/wordle.png'
import HyruleCastle from '../assets/HyruleCastle.png'
import Etna from '../assets/Etna.png'

const Projects = () => {
  return (
    <div name='projects' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Project</p>
                <p className='py-6'>/// Check out some of my latest Project</p>
            </div>

            {/* container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* grid */}
                <div
                style={{ backgroundImage: `url(${Wordle})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            Wordle
                        </span>
                        <div className="pt-8 text-center ">
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                style={{ backgroundImage: `url(${HyruleCastle})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            Hyrule Castle
                        </span>
                        <div className="pt-8 text-center ">
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                style={{ backgroundImage: `url(${Etna})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                >

                    {/* hover effects */}
                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font bold text-white tracking-wider ">
                            Etna melee
                        </span>
                        <div className="pt-8 text-center ">
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Projects;