import Navbar from "../components/Navbar";
import Card1 from "../components/Cards";
function Main() {
  return (
    <div className="main-page">
      {/* Navbar */}
      <Navbar />
      {/* Intro to Pulsemate Section */}
      <section className="main-content flex flex-col h-full bg-gray-100">
        <div className="flex flex-col pt-10 p-8">
          <div className="flex justify-center items-center">
            <img src="./sinocarebpm.png" alt="sinocarebpm" className="w-2/3" />
          </div>
          <div className="flex flex-col font-[poppins] mt-4">
            <h1 className="text-center py-4 text-2xl"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4BD2D7] to-[#0F85A5]">
              PulseMate
            </span> Next-Gen <br /> Smart Health Strong Heart.</h1>
            <p>PulseMate คือเครื่องวัดความดันอัจฉริยะที่เปรียบเสมือนเพื่อนรู้ใจของผู้ใช้งาน เพราะมีการจัดเก็บข้อมูลค่าวัดความดันบนระบบ อีกทั้งยังสามารถดูค่าวัดความดันได้บนเว็ปไซต์แบบเรียลไทม์เพื่อแก้ปัญหาการหลงลืมค่าวัดความดันและของผู้สูงอายุและช่วยให้แพทย์สามารถ วินิจฉัยโรคได้แม่นยำมากยิ่งขึ้น</p>
          </div>
        </div>
      </section>
      {/* Our value Section */}
      <section className="flex flex-col h-full bg-gray-100 pt-12">
        <h1 className="font-[Amaranth] flex justify-center text-2xl">Our Values</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-2 py-4">
          <Card1
            title="Accessibility & Convenience"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="24"
          />
          <Card1
            title="Innovation & Intelligence"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="32"
          />
          <Card1
            title="Reliability & Accuracy"
            description="Leveraging AI and machine learning to provide real-time, accurate health insights."
            text="32"
          />
        </div>

      </section>
      {/* Services */}
      <section className="flex flex-col bg-gray-100 pt-12 justify-center items-center font-[Amaranth] text-2xl">
        <h1>Services</h1>
        <div className="flex flex-col">
          <img src="/pulsemate_bp.png" alt="PulsemateBP" />
          <img src="/pulsemate_stetho.png" alt="PulsemateSteth" />
        </div>
      </section>
      <section className="flex flex-col bg-gray-100 pt-12 font-[Amaranth] ">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl">About Us</h1>
          <h1>Welcome to Pulsemate,Your Personalized Health Mate.</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src="/arnon1.png" alt="testing" />
          <p>Hello, we are first-year students of the Faculty of Engineering, Department of IoT and Information Systems, King Mongkut's Institute of Technology Ladkrabang. Currently, there are more elderly people with chronic diseases, and measuring blood pressure is one of the important steps in diagnosing these diseases. However, the problem that may occur is forgetting to record blood pressure data. Therefore, PulseMate is responsible for recording and sending blood pressure data, which also helps reduce the problem of forgetting and allows caregivers to check the blood pressure data of the elderly conveniently, making diagnosis more efficient and accurate</p>
        </div>
      </section>
      <footer className="bg-blue-300">
        <div className="flex">
          <h1>hello</h1>
          <img src="/pngtestpulse.svg" alt="" />
        </div>
      </footer>
    </div>
  );
}
export default Main;