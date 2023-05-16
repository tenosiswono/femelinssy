import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8 max-w-md m-auto">
      <div className="flex flex-row align-middle">
        <div className="mr-8">
          <div className="text-2xl mb-2 font-bold">femelinssy</div>
          <div className="text-sm font-medium text-accent">
            Agent and Partner Seller of Muslimah Clothing and Apparel Clothing
          </div>
        </div>
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage src="/profile.jpeg" />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div>
        <div className="relative rounded-xl mt-12 flex flex-col justify-end h-80 w-full">
          <video
            contentEditable={false}
            className="absolute rounded-xl h-80 w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="vid.webm" />
          </video>
          <a
            href="https://api.whatsapp.com/send/?phone=6282114222054&text&type=phone_number&app_absent=0"
            rel="noreferrer"
            target="_blank"
            className="relative p-4"
          >
            <div className="rounded-md bg-background flex flex-row p-4">
              <Phone />
              <span className="font-bold mx-4">Whatsapp Us now</span>
            </div>
          </a>
        </div>
        <div className="mt-6 flex flex-row flex-wrap gap-6">
          <a
            className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
            href="https://www.instagram.com/femelinssy/"
          >
            <Instagram className="h-8 w-8" />
            <div>Instagram</div>
          </a>
          <a
            className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
            href="https://www.instagram.com/femelinssy/"
          >
            <Image
              src="/tokopedia.png"
              className="h-8 w-8"
              alt="tokopedia"
              width={32}
              height={32}
            />
            <div>Instagram</div>
          </a>
          <a
            className="rounded-xl bg-background p-4 h-32 w-32 flex flex-col justify-between"
            href="https://www.instagram.com/femelinssy/"
          >
            <Image
              src="/shopee2.png"
              className="h-8 w-8"
              alt="shopee"
              width={32}
              height={32}
            />
            <div>Shopee</div>
          </a>
        </div>
      </div>
    </main>
  );
}
