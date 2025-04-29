import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "SevenLab Coffee",
    description: "",
    url: "/works/sevenlab",
    image: "/pictures/1/Scene_3.png"
  },
  {
    title: "daCoffeee",
    description: "",
    url: "/works/dacoffeee",
    image: "/pictures/3/Image4.png"
  },
  {
    title: "Antara bedroom",
    description: "",
    url: "/works/antara",
    image: "/pictures/2/Image1.png"
  },

];

const Features02Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-6 gap-16">
      <div className="w-full">
        <h2 className="text-4xl font-medium tracking-tight text-center">
          Our projects
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 w-full mx-auto px-6">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.url} className="hover:cursor-pointer hover:border-2 hover:border-primary hover:rounded-2xl p-4">
            <div className="flex flex-col text-start gap-2">
              <Image src={feature.image} alt="logo" width={800} height={800} className="rounded-md"/>
              <span className="text-2xl font-light tracking-tight">
                {feature.title}
              </span>
              <p className="mt-2 max-w-[25ch] text-muted-foreground text-[17px]">
                {feature.description}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features02Page;
