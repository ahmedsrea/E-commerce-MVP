import Image from "next/image";
import InquiryForm from "./InquiryForm";

export default function Inquiry() {
  return (
    <section className="mt-5 border border-[#E0E0E0] rounded-md flex flex-row justify-between overflow-hidden py-8 px-5 pl-7 h-[420px] relative">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/Mask group.png"
          width="1380"
          height="420"
          alt="background"
          className="w-full"
        />
      </div>
      <div className="z-20">
        <h2 className="Title-H2">
          An easy way to send <br /> requests to all suplliers
        </h2>
        <p className="Text-info mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Beatae
          facilis inventore maxime
        </p>
      </div>
      <InquiryForm />
    </section>
  );
}
