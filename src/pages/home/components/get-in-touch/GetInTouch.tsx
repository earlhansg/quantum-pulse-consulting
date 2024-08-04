// assets 
import contentImage from '@images/home/section-three.jpg'

const GetInTouch = () => {
  return (
    <div className="h-[100vh] lg:h-[100vh] flex lg:flex-row flex-col">
        <section className='bg-black lg:w-[50%] w-[100%] px-10 py-10 flex lg:flex-col md:flex-row flex-col md:gap-0 lg:gap-[20rem] lg:h-auto h-[50vh]'>
            <span className='lg:mr-0 mr-auto'>
                <h1 className='text-7xl'>GET IN</h1>
                <h1 className='text-7xl'>TOUCH</h1>
            </span>
            <span className='flex flex-col gap-1 lg:justify-start justify-end md:mt-0 mt-[5rem]'>
                <h3 className='md:text-2xl text-xl'>Email:</h3>
                <h5>arvin.anba@qpulse.tecj</h5>
            </span>
        </section>
        {/* end of first section  */}
        <div style={{backgroundImage: `url(${contentImage})`, backgroundPosition: "center"}}
        className='lg:w-[50%] w-[100%] bg-cover relative py-10 lg:h-auto h-[50vh]'>
            <section className='flex flex-col justify-center'>
                <span className='flex flex-col gap-10'>
                    <h1 className='md:text-6xl text-5xl text-center'>QUESTIONS?</h1>
                    <h5 className='md:text-xl text-lg text-center'>Head to our FAQ page here</h5>
                </span>
                <button className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </section>
            {/* end of second section  */}
        </div>
    </div>
  )
}

export default GetInTouch
