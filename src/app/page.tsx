import Navbar from "@/modules/NavBar";
import Image from "next/image";
import LandingBg from "./LandingBg";

const Home: React.FC = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <LandingMain />
      <div
        id="info"
        className="pl-[2.33%] sm:pl-[0px] w-[95%] sm:w-11/12 sm:h-fit xl:w-[79%] max-w-[1920px]"
      >
      
      </div>
    </main>
  )
}

export default Home

const LandingMain: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center w-full h-fit">
      {/* <div className="absolute top-[0px] left-[0px] w-full h-full bg-gradient-to-r from-[#b1b4f8] via-30% via-[#FAE6FF] vto-100% to-[#75D2FB] animate-gradient-fast z-[-1]" /> */}
      <div className="relative w-full max-w-[1920px]">
        <div className="pt-[227.5px] pb-[109px] flex flex-col items-center gap-y-[26px] w-full max-w-[1920px] z-10">
          {/* <BannerWindow /> */}
          <div
            className={`
              w-11/12 md:w-4/5 lg:w-3/5 xl:w-[66.23%] 
              
              font-semibold
              text-[58px] sm:text-[36px]
              text-[#1E1E1E] 
              leading-[1.4] 
              tracking-[0.03em] 
              text-center
            `}
          >
            <span className="text-center">
              Discover soloutions. Get inspired.
            </span>
            <br />
            <span className="text-center">
              Boost your productivity.
            </span>
          </div>
          <div className="w-max-[250px] text-[18px] font-normal text-[#555555] text-center leading-[24px] tracking-[0] opacity-100">
          <span className="text-center">Join a global community of learners and leaders, ready 
          </span>
          <br />
          <span className="text-center">to share knowledge, insights,</span> 
          <br />
          <span className="text-center">and real-world experience.</span> 
          </div>

          <div className="items-center">
          <Image
      src="/Group.png"
      alt="Info section"
      width={1845}
      height={338}
      className="
        absolute 
        top-[721px] left-[-20px] 
        opacity-100 
        rounded-[20px]
      "
    />
    </div>
        </div>
      </div>
    </div>
  )
}