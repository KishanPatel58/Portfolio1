import React from 'react'
import All from '../assets/All.js'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Projects = () => {
    const [text1] = useTypewriter({
        words: ['My Works _'],
        loop: {},
      });
    const project = [
        {
            title: 'My Project Website',
            livelink: 'https://projects-webs.netlify.app/',
            image: All.ProjectWeb,
            language: ['HTML', 'CSS', 'JS', 'React']
        },
        {
            title: 'Portfolio Website 2.0',
            livelink: 'https://new-one-portfolio.netlify.app/',
            image: All.Portfolio2,
            language: ['HTML', 'CSS', 'Tailwind', 'JS', 'React']
        },
        {
            title: 'Ganesh Chaturthi Invitation',
            livelink: 'https://ganesh-chaturthi-card.netlify.app/',
            image: All.GaneshChaturthi,
            language: ['HTML', 'CSS']
        },
        {
            title: 'Portfolio Website 1.0',
            livelink: 'https://my-new-profile-web.netlify.app/',
            image: All.Portfolio1,
            language: ['HTML', 'CSS', 'JS']
        }
    ]

    return (
        <section id="projects" className='relative !p-[20px] w-screen h-[100%] flex flex-col items-center justify-center bg-black rounded-[40px_40px_0px_0px]'>
            <div className="w-full h-[10%] flex items-center justify-center">
                <h1 className='text-white text-3xl font-[font2] font-semibold lg:!mt-[5%]'>{text1}<Cursor/></h1>
            </div>
            <div className="w-full h-[90%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                {project.map((projects, index) => (
                    <div id={`id${index}`} className={`relative card w-[90%] h-[400px] !mt-[20%] !ml-auto !mr-auto rounded-xl overflow-hidden`}>
                        <div className="intro bg-[#421F63] absolute top-[0] left-0 w-full h-full flex flex-col justify-center transition-all duration-300 gap-[35px]">
                            <div className="w-full h-[20%] !py-[10px]">
                            <h1 className='text-white text-center text-3xl font-[font2]'>{projects.title}</h1>
                            </div>
                            <div className="w-full h-[60%] grid grid-cols-3 !h-[30px] gap-4 !p-[5px] justify-center drop-shadow-[0px_0px_10px_blueviolet]">
                                {projects.language.map((lang,index)=>(
                                    <div 
                                    key={index}
                                    className='text-white w-[100px] border-1 border-[blueviolet] text-xl font-semibold font-[font1] flex items-center justify-center rounded-2xl bg-[#000000] !p-[5px]'>{lang}</div>
                                ))}
                            </div>
                            <div className="w-full h-[20%] flex items-center justify-center !mt-[45px]">
                                <a className='w-full flex items-center justify-center' target='_blank' href={projects.livelink}>
                                    <button className='!w-[80%] h-[50px] bg-[blueviolet] rounded-3xl flex items-center justify-center gap-5 text-2xl cursor-grab active:cursor-grabbing text-white'>Show Preview <FaArrowUpRightFromSquare /></button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects