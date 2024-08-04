// assets 
import contentImage from '@images/home/section-two.jpg'

const FinancialReporting = () => {
  return (
    <div className="h-[auto] lg:h-[110vh] bg-black flex flex-col">
      <section className='flex md:py-[4rem] py-[2rem] xl:px-20 px-10 md:justify-end justify-center'>
        <button className="border-2 border-[#5c5c5c] md:px-[4rem] px-[2rem] md:py-3 py-2 text-lg text-[#838282]">Services</button>
      </section>
      {/* end of first section  */}
      <section className='flex lg:flex-row flex-col'>
        <img className="lg:w-[50%] w-[100%]" src={contentImage} alt="Content Report" />
        <span className='xl:px-20 md:px-10 px-7'>
            <h3 className='lg:text-5xl text-3xl text-center xl:my-10 my-5 font-medium'>Financial Reporting</h3>
            <p className='lg:mt-20 mt-0 lg:text-lg text-sm'>At Quantum Pulse Consulting we provide detailed financial reports and timely weekly market insights to help our clients make informed investment decisions. Our reports cover key financial metrics, earnings analysis, and sector trends, while our weekly updates offer concise summaries of market developments, economic indicators, and ivestment opportunities. Stay ahed with our expert ananlysis and actionable insights.</p>
            <span className='flex justify-center lg:mb-0 mb-5'>
                <button className='xl:mt-20 mt-10 xl:text-2xl lg:text-xl text-lg flex justify-center gap-2' style={{alignItems: 'center'}}>
                  <span>
                    Learn More
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
            </span>
        </span>
      </section>
      {/* end of second section  */}
    </div>
  )
}

export default FinancialReporting
