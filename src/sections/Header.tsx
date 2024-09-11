import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div className="bg-black text-white text-sm flex justify-center items-center py-3">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <Image src={Logo} alt="sass logo" height={40} width={40} />
        </div>
      </div>
    </header>
  );
};
