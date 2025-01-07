import Image from "next/image";

export default function MainContent() {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row lg:gap-16 h-[600px] justify-center items-center gap-16 overflow-hidden"
    >
      <div className="flex flex-col gap-8 items-center ">
        <div className="absolute w-[20%] aspect-square bg-purple-400/40 top-0 left-0 translate-x-[-20%] translate-y-[-20%] blur-3xl rounded-full -z-10"></div>

        <div className="absolute w-[20%] aspect-square bg-cyan-400/40 bottom-0 right-0 translate-y-[20%] blur-3xl rounded-full -z-10"></div>

        <h1 className="text-center">
          <span className="relative text-6xl text-center gradient-text !font-poppins !not-italic">
            Solutions. Designs. Innovation.
          </span>
        </h1>

        <div className="fixed-size">
          <p
            className="text-gray-400 text-lg text-center w-[30ch] max-w-[30ch] lg:w-[50ch] lg:max-w-[50ch]"
            id="typing-effect"
          >
            Transforming Visions into Reality with Cutting-Edge Web Design and
            Software Development Solutions
          </p>
        </div>

        <div className="relative flex gap-8 pt-4 md:pt-12">
          <a
            href="https://calendly.com/hiqualsoftwaresolutions/30min"
            className="btn-home !text-base border-t w-full !border-blue-400"
          >
            Book A Call
          </a>
          <Image
            width={120}
            height={32}
            src="/arrow.png"
            alt=""
            // style={{ width: "100%", height: "auto", color: "green" }}
            className="absolute top-8 right-0 translate-x-32 sm:translate-x-40 translate-y-8 rotate-12 h-8 "
          />
        </div>
      </div>
    </div>
  );
}
