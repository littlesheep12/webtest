import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Image from "next/image";
import photo from "@/assets/logo.png";
function HomePage() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">

    {/* <div className=" rounded-full p-3 md:p-4">
      <MotionDiv>
      <Image
            src={photo}
            alt="photo"
            priority
            className="w-[500px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
          />
      </MotionDiv>
    </div> */}
    <div className=" rounded-full p-3 md:p-4">
      <MotionDiv delayOffset={0.2}>
      <h1>
        <span className="text-[#407BBF]">PowerAI</span> <br />
        for a Brighter Future <br />
      </h1>
      </MotionDiv>
      <h3>
      Empowering Tomorrow, Powering Today
      </h3>
    </div>


    <div className="my-8">
      <ContactList delayOffset={1} showWhenInView={false} />
    </div>

  </section>
  );
}

export default HomePage;