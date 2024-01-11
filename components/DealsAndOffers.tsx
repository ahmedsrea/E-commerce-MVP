import Image from "next/image";

export default function DealsAndOffers() {
  const groupPart1 = [
    {
      title: "Smart watches",
      discount: 19,
      image: "/images/dealsandoffers/8.png",
    },
    { title: "Laptops", discount: 19, image: "/images/dealsandoffers/7.png" },
    { title: "Cameraes", discount: 19, image: "/images/dealsandoffers/9.png" },
    {
      title: "Headphones",
      discount: 19,
      image: "/images/dealsandoffers/11.png",
    },
    {
      title: "Headphones",
      discount: 19,
      image: "/images/dealsandoffers/15.png",
    },
  ];
  return (
    <section className="mt-5 border border-[#E0E0E0] rounded-md flex flex-row overflow-hidden bg-white h-[240px]">
      <div className="min-w-[280px] border-r border-[#E0E0E0] p-5">
        <div>
          <h2 className="text-[#1C1C1C] text-xl font-semibold">
            Deals and offers
          </h2>
          <p className="text-[#8B96A5]">Hygiene equipments</p>
        </div>
        <div className="mt-4 flex flex-row gap-2">
          <div className="count-down">
            <span className="font-semibold leading-4 mt-1">04</span>
            <p className="text-[13px] font-light">Days</p>
          </div>
          <div className="count-down">
            <span className="font-semibold leading-4 mt-1">13</span>
            <p className="text-[13px] font-light">Hour</p>
          </div>
          <div className="count-down">
            <span className="font-semibold leading-4 mt-1">34</span>
            <p className="text-[13px] font-light">Min</p>
          </div>
          <div className="count-down">
            <span className="font-semibold leading-4 mt-1">56</span>
            <p className="text-[13px] font-light">Sec</p>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-5">
        {groupPart1.map(({ title, discount, image }, index) => (
          <div
            key={index}
            className="p-3 flex flex-col justify-center items-center border-r boder-[#E0E0E0]"
          >
            <div className="w-[140px] h-[140px] flex items-center justify-center">
              <Image
                src={image}
                width="140"
                height="140"
                alt={title}
                className="max-w-full max-h-full"
              />
            </div>
            <h2 className="text-[#1C1C1C] mt-1">{title}</h2>
            <p className="text-[#EB001B] bg-[#FFE3E3] font-semibold px-3 py-1 text-sm mt-3 rounded-2xl">
              -{discount}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
