import homeImg from "../assets/home_img.jpg";
import { GrLinkedin } from "react-icons/gr";
import { ImGithub } from "react-icons/im";
import { IoMdArrowForward } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen bg-gradient-to-b from-zinc-900 to-indigo-950 flex items-center justify-center"
    >
      <div className="flex flex-col items-center text-white font-light gap-4">
        <div className="w-[37vw] sm:w-[30vw] md:w-[25vw] lg:w-[18vw] rounded-full pt-4">
          <img
            src={homeImg}
            className=" border-2 rounded-full border-sky-300"
          ></img>
        </div>
        <div className="flex flex-col items-center gap-2 w-[80vw]">
          <h1 className="text-3xl lg:text-4xl mt-4">
            Hi, I am <span className="text-sky-300  ">Mahima</span>.
          </h1>
          <h3 className="text-lg lg:text-xl text-center">
            A Fullstack developer based in New Delhi, India
          </h3>

          <div className="flex gap-4 items-center">
            <HashLink to="#projects" smooth>
              <div
                className="rounded-full px-4 py-2 border-2 border-sky-300 text-sky-300 text-lg lg:text-xl font-medium ml-8
            hover:text-black hover:bg-sky-300 duration-300 "
              >
                My Projects{" "}
                <IoMdArrowForward size={25} className="inline-block" />
              </div>
            </HashLink>
            <a
              href="https://www.linkedin.com/in/mahima-pandey11/"
              className="cursor-pointer"
            >
              <GrLinkedin size={25} />
            </a>
            <a href="https://github.com/mahima-111/" className="cursor-pointer">
              <ImGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
