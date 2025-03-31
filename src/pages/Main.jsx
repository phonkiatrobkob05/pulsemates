import Navbar from "../components/Navbar";
import Card1 from "../components/Cards";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link, Element } from 'react-scroll';
function Main() {
  return (
    <div className="main-page">
      {/* Navbar */}
      <Navbar />
      {/* Intro to Pulsemate Section */}
      <Element name="section1">

      <section id="home" className="main-content flex flex-col h-full">
        <div className="flex flex-col pt-10 p-8 sm:flex-row ">
          <div className="flex justify-center items-center">
            <img src="./sinocarebpm.png" alt="sinocarebpm" className="w-2/3 sm:w-[1500px]" />
          </div>
          <div className="flex flex-col font-[poppins] mt-4 gap-8">
            <h1 className=" py-4 text-3xl font-bold md:text-5xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4BD2D7] to-[#0F85A5]">
              PulseMate
            </span> Next-Gen <br /> Smart Health Strong Heart.</h1>
            <p className="text-lg">PulseMate คือเครื่องวัดความดันอัจฉริยะที่เปรียบเสมือนเพื่อนรู้ใจของผู้ใช้งาน เพราะมีการจัดเก็บข้อมูลค่าวัดความดันบนระบบ อีกทั้งยังสามารถดูค่าวัดความดันได้บนเว็ปไซต์แบบเรียลไทม์เพื่อแก้ปัญหาการหลงลืมค่าวัดความดันและของผู้สูงอายุและช่วยให้แพทย์สามารถ วินิจฉัยโรคได้แม่นยำมากยิ่งขึ้น</p>
            <div className="flex justify-center mx-auto drop-shadow-sm rounded-full w-[239px] bg-[linear-gradient(-80deg,#007299,#56E0E0)] px-[18px] py-[13px] my-auto">
              <NavLink to="/Login" className="text-[20px] text-[#F4FEFF] font-semibold">
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      </Element>
      {/* Our value Section */}
      <Element name="section2">

      <section className="flex flex-col h-full bg-gray-100 pt-12">
        <h1 className="font-[Amaranth] flex justify-center text-3xl md:text-4xl py-8">Our Values</h1>
        <div className="flex flex-wrap justify-center items-center gap-16 mt-2 py-4">
          <Card1
            title="Accessibility & Convenience"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="22"
          />
          <Card1
            title="Innovation & Intelligence"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="22"
          />
          <Card1
            title="Reliability & Accuracy"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="22"
          />
        </div>

      </section>
      </Element>
      {/* Services */}
      <section id="services" className="flex flex-col bg-gray-100 pt-12 justify-center items-center font-[Amaranth] text-3xl md:text-4xl py-8">
        <h1>Services</h1>
        <div className="flex flex-col sm:flex-row">
          <img src="/pulsemate_bp.png" alt="PulsemateBP" className="sm:w-1/2" />
          <img src="/pulsemate_stetho.png" alt="PulsemateSteth" className="sm:w-1/2" />
        </div>
      </section>
      {/* Aboutus */}
      <section id="aboutus" className="flex flex-col bg-gray-100 pt-12 font-[Amaranth] gap-8 p-8">
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <h1 className="text-2xl md:text-4xl">About Us</h1>
          <h1>Welcome to Pulsemate,<br />Your Personalized Health Mate.</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row">
          <img src="/arnon1.png" alt="testing" className="rounded-xl md:w-1/2" />
          <p className="text-sm tracking-tight md:tracking-normal md:text-lg    ">Hello, we are first-year students of the Faculty of Engineering, Department of IoT and Information Systems, King Mongkut's Institute of Technology Ladkrabang. Currently, there are more elderly people with chronic diseases, and measuring blood pressure is one of the important steps in diagnosing these diseases. However, the problem that may occur is forgetting to record blood pressure data. Therefore, PulseMate is responsible for recording and sending blood pressure data, which also helps reduce the problem of forgetting and allows caregivers to check the blood pressure data of the elderly conveniently, making diagnosis more efficient and accurate</p>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-blue-300 p-8">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="sm:text-2xl">Ready to get started?</h1>
            <Link to="/Login" className=" py-4">
              <span className="text-[14px] inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Register / Login</span>
            </Link>
            <img src="/Pulsematelogo 1.svg" alt="" className="w-1/3"/>
            <h1 className="">© 2025 PulseMate Prototype. </h1>

          </div>

          <img src="/rayong.png" alt="" className="rounded-full w-30 border-4 border-blue-400" />
        </div>
      </footer>
    </div>
  );
}
export default Main;