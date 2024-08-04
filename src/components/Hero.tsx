import b1 from '@/assets/images/b1.svg';
import b2 from '@/assets/images/b2.svg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className="animated-background | bg-space_cadet bg-gradient-to-r from-blue-950 to-indigo-900 w-full h-screen text-white animated-background via-space_cadet"
            id='home'
        >
            <div className="px-10 py-4 w-full h-full flex flex-col justify-center items-center relative">
                <Image
                    src={b1}
                    alt='bubble'
                    className="absolute top-12 left-0 m-4 w-28 h-w-28 opacity-50"
                />

                <Image
                    src={b2}
                    alt='bubble'
                    className="absolute bottom-0 right-0 m-4 w-24 h-24 opacity-50"
                />

                <div className="w-max mb-6">
                    <h1
                        className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-5xl text-2xl text-slate-300 font-bold text-center select-none">
                        Creative Frontend Developer
                    </h1>
                </div>

                <p className="lg:text-xl font-medium text-wrap text-center select-none">
                    Passionate about building responsive, user-friendly websites with a focus on modern technologies and clean design
                </p>

                <div className='mt-6 flex lg:flex-row flex-col items-center gap-6'>
                    <Link className='bg-blue-900 rounded-full lg:p-6 p-4 font-bold lg:text-lg hover:bg-blue-800 transition-all delay-100 ease-in-out' href="#work">
                        Explore My Projects
                    </Link>
                    <Link className='bg-blue-900 rounded-full lg:p-6 p-4 font-bold lg:text-lg hover:bg-blue-800 transition-all delay-100 ease-in-out' href="#contact">
                        Contact Me for Your Next Project
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero