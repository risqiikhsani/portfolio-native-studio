import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    category: "Marketing and Sales",
    title: "Native Studio",
    details:
      "Rooted in authenticity and innovation, Native Studio is an interior design studio based in Jakarta, founded in 2024 under the leadership of M. D. Brisbhanu. With a distinctive philosophy centered around original materials and experiential narratives, Native Studio specializes in crafting spaces that evoke genuine connections and memorable experiences for both residential and commercial projects. The name 'Native' reflects the studio's commitment to embracing the essence of raw, unaltered materials—celebrating their innate beauty and texture. Every project is a testament to honoring origins, focusing on the exploration of natural materials and authentic forms to create spaces that resonate with the spirit of their environment. Native Studio’s design philosophy is an immersive journey, focusing on the experiential quality of space through unique narratives. By harmonizing materials, textures, and forms, Native Studio curates an organic dialogue between space and user, crafting environments that feel alive, intuitive, and deeply rooted in authenticity.",
    tutorialLink: "#",
    image:"/logos/logo2.png"
  },
  {
    category: "Project Management",
    title: "M. D. Brisbhanu",
    details:
      "an Indonesian interior designer based in Jakarta, is the visionary behind Native Studio. Armed with a profound respect for material authenticity and spatial storytelling, Brisbhanu`s work is a continuous exploration of how spaces can evoke emotion, memory, and a sense of belonging. Brisbhanu`s journey into interior design was shaped by a passion for blending the natural and the architectural. With a background enriched by collaborations with leading design studios in Indonesia, he established Native Studio in 2024 to realize a personal vision: creating spaces that feel profoundly connected to their materials and surroundings. One of Brisbhanu`s hallmarks is his sensitivity to the rawness and beauty found in nature and everyday life. His approach lends a distinctive, timeless quality to his designs—whether through the tactile richness of unprocessed wood, the serene weight of natural stone, or the deliberate imperfection of hand-crafted elements. With an innate ability to weave material honesty into compelling spatial experiences, Brisbhanu continues to shape a new narrative for contemporary Indonesian interior design.",
    tutorialLink: "#",
    image:"/pictures/PHOTO.png"
  },
];

const Features06Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
      <h2 className="text-4xl font-medium tracking-tight text-center">
          About
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature,i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              <div className="w-full aspect-[6/4] basis-1/2">
                <Image src={feature.image} alt="logo" width={1500} height={1500} className={i === 0 ? "object-cover dark:invert opacity-35" : "object-cover"}/>
              </div>
              <div className="basis-1/2 shrink-0">
                {/* <span className="uppercase font-semibold text-sm text-muted-foreground">
                  {feature.category}
                </span> */}
                <h4 className="my-3 text-3xl font-medium tracking-tight ">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground font-medium text-justify">
                  {feature.details}
                </p>
                {/* <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
