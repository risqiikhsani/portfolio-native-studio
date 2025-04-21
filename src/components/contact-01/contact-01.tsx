import { InstagramIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

const Contact01Page = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-4xl font-medium tracking-tight text-center">
          Contact Us
        </h2>
      <p className="mt-4 text-base sm:text-lg">
        Let's connect
      </p>
      <div className="max-w-screen-xl mx-auto py-24 grid md:grid-cols-2 gap-16 md:gap-10 px-6 md:px-0">
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MailIcon className="text-red-400"/>
          </div>
          <h3 className="mt-6 font-semibold text-xl">Email</h3>
          <p className="mt-2 text-muted-foreground">
            Our friendly team is here to help.
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="mailto:nativestudioo@gmail.com"
          >
            nativestudioo@gmail.com
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <MapPinIcon className="text-green-400"/>
          </div>
          <h3 className="mt-6 font-semibold text-xl">Office</h3>
          <p className="mt-2 text-muted-foreground">
            Come say hello at our office HQ.
          </p>
          <Link
            className="mt-4 font-medium text-primary"
            href="https://map.google.com"
            target="_blank"
          >
            Jakarta, Indonesia
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <PhoneIcon className="text-green-400"/>
          </div>
          <h3 className="mt-6 font-semibold text-xl">Whatsapp Messanger</h3>
          <p className="mt-2 text-muted-foreground">Mon-Fri from 8am to 5pm.</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="https://wa.me/+6287874961309"
            target="_blank"
          >
            +62 878 7496 1309
          </Link>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
            <InstagramIcon className="text-red-400"/>
          </div>
          <h3 className="mt-6 font-semibold text-xl">Instagram</h3>
          <p className="mt-2 text-muted-foreground">View or work.</p>
          <Link
            className="mt-4 font-medium text-primary"
            href="https://www.instagram.com/nativestudio.o/"
            target="_blank"
          >
            @nativestudio.o
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Contact01Page;
