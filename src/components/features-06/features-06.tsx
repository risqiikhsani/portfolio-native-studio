import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    category: "Marketing and Sales",
    title: "Native Studio",
    details:
      "Rooted in authenticity, Native Studio is an interior design studio established in 2024, led by M. D. Brisbhanu. Native Studio’s focus is on creating distinctive, experiential spaces through a deep exploration of natural materials and forms. The name “Native” embodies the studio’s dedication to working with raw, authentic materials that carry a natural, unrefined beauty. At Native Studio, we believe in designing spaces that are not only visually captivating but also truly resonate with their surroundings and users. Our approach integrates the essence of the materials we work with, offering timeless design solutions that feel grounded and connected to their origins. Each project is an exploration of how spaces can come to life, evoking emotion and creating lasting memories. Native Studio specializes in creating immersive environments that blend raw materials and refined design into a harmonious experience. Whether it's a residential or commercial space, our projects focus on the unique narrative of each space, making them feel truly “native” to their environment.",
    tutorialLink: "#",
    image:"/logos/logo2.png"
  },
  {
    category: "Project Management",
    title: "M. D. Brisbhanu",
    details:
      "M. D. Brisbhanu, the principal designer and visionary behind Native Studio, is an Indonesian interior designer known for his innovative approach to space creation. With a passion for raw materials and an innate understanding of design, Brisbhanu founded Native Studio in 2024 to bring his vision of authentic, experiential spaces to life. Drawing on years of experience working with leading design studios in Indonesia, Brisbhanu’s designs are rooted in his belief that space should evoke emotion and connection. His distinctive approach incorporates natural materials, blending them seamlessly with modern design principles to create spaces that feel grounded and timeless. One of Brisbhanu’s hallmarks is his ability to translate the natural beauty of materials into captivating interior experiences. His work is a reflection of his dedication to authenticity, with a focus on creating spaces that are both unique and deeply connected to their environment.",
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
