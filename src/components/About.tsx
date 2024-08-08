import bubbles from '@/assets/images/bubbles.svg';
import girl from '@/assets/images/girl1.svg';
import Image from "next/image";

const About = () => {
    return (
        <section className="bg-space_cadet py-10 xl:py-0 xl:h-screen w-full text-white text-lg font-medium flex flex-col items-center justify-center shadow-2xl" id="about">
            <div className="w-10/12">
                <div className="flex items-center xl:flex-row flex-col xl:gap-20 gap-10">
                    <div className='xl:w-3/12 lg:w-5/12'>
                        <div className="xl:w-full min-w-80 min-h-80 relative border border-slate-600 rounded-md shadow-md">
                            <Image src={bubbles} className="absolute object-cover w-full h-full opacity-25" alt="bubbles" />
                            <Image src={girl} className="absolute object-cover w-full h-full" alt="confident" />
                        </div>
                    </div>
                    <div className='lg:w-9/12 xl:text-left text-center w-full'>
                        <p className='text-wrap'>Hello! I am Guli Ahmedova, an innovative frontend developer with a passion for creating responsive and user-friendly web interfaces. I specialize in HTML, CSS, JavaScript, and React, and have hands-on experience with a variety of tools and frameworks such as Redux Toolkit, Axios, Zustand, Next.js and etc.</p>
                        <div className='mt-6'>
                            <h3 className='font-bold text-slate-300 uppercase mb-2 select-none'>Education</h3>
                            <p className='text-wrap'>Bachelor of Computer Science
                                Azerbaijan Technical University</p>
                        </div>

                        <button className='mt-6 bg-gradient-to-br from-blue-800 to-purple-800 shadow-lg rounded-full px-4 py-2'>Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;