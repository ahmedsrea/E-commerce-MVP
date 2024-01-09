import { FaUser } from "react-icons/fa6";

export default function GetStarted() {
  return (
    <div className="w-[250px]">
      <div className="bg-[#E3F0FF] p-3 rounded-md">
        <div className="flex items-center">
          <div className="w-[44px] h-[44px] rounded-full bg-[#91B1E7] flex items-end justify-center mr-2 overflow-hidden">
            <FaUser className="text-white" size="30" />
          </div>
          <div>
            <p className="text-[#1C1C1C] font-medium leading-5">
              Hi, user <br />
              let&apos;s get started
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2 w-full">
          <button className="text-white bg-[#127FFF] py-1 rounded-md text-sm">
            Join now
          </button>
          <button className="text-[#127FFF] bg-white py-1 rounded-md text-sm border border-[#DEE2E7]">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
