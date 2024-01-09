import Category from "./Category";
import GetStarted from "./GetStarted";

export default function MainSection() {
  return (
    <section className="mt-5 p-5 border border-[#E0E0E0] rounded-md bg-white flex">
      <div className="mr-7">
        <Category />
      </div>
      <div>
        <GetStarted />
        <div className="bg-[#F38332] text-white mt-2 p-3 pl-5 rounded-md">
          Get US $10 off <br /> with a new <br /> supplier
        </div>
        <div className="bg-[#55BDC3] text-white mt-2 p-3 pl-5 rounded-md">
          Send qoutes with <br /> supplier <br />
          preferences
        </div>
      </div>
    </section>
  );
}
