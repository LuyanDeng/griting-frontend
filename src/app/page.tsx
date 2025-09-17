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
      <div className="absolute top-[0px] left-[0px] w-full h-full bg-gradient-to-r from-[#b1b4f8] via-30% via-[#FAE6FF] vto-100% to-[#75D2FB] animate-gradient-fast z-[-1]" />
      <div className="relative w-full max-w-[1920px]">
        <LandingBg />
        <div className="pt-[119px] pb-[109px] flex flex-col items-center gap-y-[56px] w-full max-w-[1920px] z-10">
          {/* <BannerWindow /> */}
          <div
            className={`
              w-11/12 md:w-4/5 lg:w-3/5 xl:w-[46.23%] 
              font-black 
              text-[28px] sm:text-[36px]
              text-[#1E1E1E] 
              leading-[1.4] 
              tracking-[0.03em] 
              text-center
            `}
          >
            <span className="text-center">
              Placeholder Title Part 1
            </span>
            <br />
            <span className="text-center">
              Placeholder Title Part 2
            </span>
          </div>

          <div className="w-[245px] h-[82px]" />
        </div>
      </div>
    </div>
  )
}