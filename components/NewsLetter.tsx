import { MdOutlineEmail } from "react-icons/md";
import Container from "./Container";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function NewsLetter() {
  return (
    <section className="bg-gray-200 mt-5 py-5">
      <Container>
        <div className="flex flex-col justify-center items-center p-5">
          <h4 className="Title-H4 Text-dark mb-2">
            Subscribe on our newsletter
          </h4>
          <p className="text-[#606060]">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>

          <div className="mt-6 w-[395px] flex flex-row gap-2">
            <div className="w-[70%] relative">
              <Input placeholder="Email" className="w-full pl-8" />
              <MdOutlineEmail
                size="20"
                className="absolute top-3 left-2 text-[#8B96A5]"
              />
            </div>
            <Button className="bg-[#127FFF]">Subscribe</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
