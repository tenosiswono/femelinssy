import Partner from "@/components/Partner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 max-w-xl m-auto">
      <div className="flex flex-row align-middle">
        <div className="mr-8">
          <div className="text-2xl mb-2 font-bold">femelinssy</div>
          <div className="text-sm font-medium text-accent">
            Agent and Partner Seller of Muslimah Clothing and Apparel Clothing
          </div>
        </div>
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage src="/logo.jpeg" />
            <AvatarFallback>femelinssy</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="relative rounded-xl mt-12 flex flex-col justify-end h-80 w-full">
        <video
          contentEditable={false}
          className="absolute rounded-xl h-80 w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="vid.webm" type="video/webm" />
          <source src="vid.mp4" type="video/mp4" />
        </video>
        <a
          href="https://api.whatsapp.com/send/?phone=6282114222054&text&type=phone_number&app_absent=0"
          rel="noreferrer"
          target="_blank"
          className="relative p-4"
        >
          <div className="rounded-md bg-background flex flex-row p-4">
            <Phone className="text-accent" />
            <span className="font-bold mx-4 text-accent">Whatsapp Us now</span>
          </div>
        </a>
      </div>
      <div className="mt-6 flex flex-row flex-wrap gap-6">
        <a
          className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
          href="https://www.instagram.com/femelinssy/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/ig.png"
            className="h-8 w-8"
            alt="instagram"
            width={32}
            height={32}
          />
          <div className="font-medium text-accent">Instagram</div>
        </a>
        <a
          className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
          href="https://www.instagram.com/femelinssy/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/tokopedia.png"
            className="h-8 w-8"
            alt="tokopedia"
            width={32}
            height={32}
          />
          <div className="font-medium text-accent">Tokopedia</div>
        </a>
        <a
          className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
          href="https://www.instagram.com/femelinssy/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/shopee2.png"
            className="h-8 w-8"
            alt="shopee"
            width={32}
            height={32}
          />
          <div className="font-medium text-accent">Shopee</div>
        </a>
      </div>
      <div className="mt-6">
        <span className="text-xl font-bold">Our Partners</span>
      </div>
      <div className="mt-6 flex flex-row flex-wrap gap-6">
        <Partner name="sheba_id" />
        <Partner name="jaimelavie.id" />
        <Partner name="saleehaofficial" />
        <Partner name="alfihuraiyah_" />
        <Partner name="ummusarah_id" />
        <Partner name="myzauhara_" />
        <Partner name="albeera.id" />
      </div>
    </main>
  );
}
