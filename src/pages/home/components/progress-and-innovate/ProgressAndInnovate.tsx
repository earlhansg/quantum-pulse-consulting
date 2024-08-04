// assets
import bgImage from "@images/home/section-one.png"

const ProgressAndInnovate = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center"
      }}
      className="h-[50vh] lg:h-[90vh] bg-no-repeat bg-cover flex flex-col justify-center"
    >
      <div className="flex px-5 lg:px-0 justify-center lg:justify-start">
        <section className="lg:pl-10 lg:pr-3 lg:pb-10 pt-3 pb-5 pl-3 pr-3 flex flex-col" style={{ backgroundColor: 'rgba(59, 84, 114, 0.8)' }}>
          <h5 className="text-sm lg:text-base text-[12px]">Quantum Pulse Consulting: Empowering Futures, Digitally Defined</h5>
          <h3 className="lg:text-5xl mb:text-3xl text-2xl font-medium mt-3">Progress & Innovate with Quantum Pulse</h3>
          <h5 className="lg:mt-3 lg:text-base lg:w-auto mt-0 mb:text-sm mb:w-[520px] text-[12px]">Where your business’s digital aspirations become groundbreaking realities, setting you apart in today’s competitive market</h5>
        </section>
        {/* end of section  */}
      </div>
    </div>
  );
};

export default ProgressAndInnovate;
