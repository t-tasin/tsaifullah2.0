import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { TbBrandNodejs } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiTensorflow } from "react-icons/si";
import { TbBrandDocker } from "react-icons/tb";
import { SiMicrosoftazure } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

export const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technology</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNodejs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiDjango className="text-7xl text-green-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDocker className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftazure className="text-7xl text-cyan-600" />
        </div>
      </div>
    </div>
  );
};
