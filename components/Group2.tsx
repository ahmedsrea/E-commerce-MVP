import Image from "next/image";

export default function Group2() {
  const groupPart1 = [
    { title: "Smart watches", price: 19, image: "/images/group2/1.png" },
    { title: "Cameras", price: 89, image: "/images/group2/2.png" },
    { title: "Headphones", price: 10, image: "/images/group2/3.png" },
    { title: "Smart watches", price: 90, image: "/images/group2/4.png" },
  ];
  const groupPart2 = [
    { title: "Gaming set", price: 35, image: "/images/group2/5.png" },
    { title: "Laptops & PC", price: 340, image: "/images/group2/6.png" },
    { title: "Smartphones", price: 19, image: "/images/group2/7.png" },
    { title: "Electric Kattle", price: 240, image: "/images/group2/8.png" },
  ];
  return (
    <section className="mt-5 border border-[#E0E0E0] rounded-md flex flex-row overflow-hidden">
      <div className="w-[280px] h-[250px] relative">
        <Image
          src="/images/group2/Group 2.png"
          alt="Home and outdoor"
          width="280"
          height="250"
          className="h-[250px] absolute"
        />
        <div className="absolute top-5 left-3 ml-2">
          <h2 className="text-[#1C1C1C] font-semibold text-lg leading-6">
            Consumer
            <br /> electronics and <br /> gadgets
          </h2>
          <button className="mt-4 bg-white px-3 py-1 rounded-md font-medium">
            Source now
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-grow bg-white">
        <div className="h-[125px] grid grid-cols-4 border-b border-[#E0E0E0]">
          {groupPart1.map(({ title, price, image }, index) => (
            <div
              key={index}
              className="flex flex-row justify-between border-r border-[#E0E0E0] last:border-0 pt-4 pr-1"
            >
              <div className="flex flex-col ml-4">
                <h2 className="mb-2 text-[#1C1C1C]">{title}</h2>
                <p className="text-[#8B96A5] text-sm leading-[18px]">
                  From <br /> USD {price}
                </p>
              </div>
              <div className="flex items-end pb-2">
                <Image
                  src={image}
                  alt={title}
                  width="82"
                  height="82"
                  className="w-[82px] h-[82px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-[125px] grid grid-cols-4">
          {groupPart2.map(({ title, price, image }, index) => (
            <div
              key={index}
              className="flex flex-row justify-between border-r border-[#E0E0E0] last:border-0 pt-4 pr-1"
            >
              <div className="flex flex-col ml-4">
                <h2 className="mb-2 text-[#1C1C1C]">{title}</h2>
                <p className="text-[#8B96A5] text-sm leading-[18px]">
                  From <br /> USD {price}
                </p>
              </div>
              <div className="flex items-end pb-2">
                <Image
                  src={image}
                  alt={title}
                  width="82"
                  height="82"
                  className="w-[82px] h-[82px] bg-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
