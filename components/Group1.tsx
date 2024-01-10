import Image from "next/image";

export default function Group1() {
  const groupPart1 = [
    { title: "Soft chairs", price: 19, image: "/images/group1/1.png" },
    { title: "Sofa & chair", price: 19, image: "/images/group1/2.png" },
    { title: "Kitchen dishes", price: 19, image: "/images/group1/3.png" },
    { title: "Smart watches", price: 19, image: "/images/group1/4.png" },
  ];
  const groupPart2 = [
    { title: "Kitchen mixel", price: 100, image: "/images/group1/5.png" },
    { title: "Blenders", price: 39, image: "/images/group1/6.png" },
    { title: "Home appliance", price: 19, image: "/images/group1/7.png" },
    { title: "Coffe maker", price: 10, image: "/images/group1/8.png" },
  ];
  return (
    <section className="mt-5 border border-[#E0E0E0] rounded-md flex flex-row overflow-hidden">
      <div className="w-[280px] h-[250px] relative">
        <Image
          src="/images/group1/image 92.png"
          alt="Home and outdoor"
          width="280"
          height="250"
          className="h-[280px] absolute"
        />
        <div className="absolute top-5 left-3 ml-2">
          <h2 className="text-[#1C1C1C] font-semibold text-lg leading-6">
            Home and
            <br /> outdoor
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
                  className="w-[82px] h-[82px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
