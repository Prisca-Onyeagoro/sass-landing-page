import Image from "next/image";
import Logo from "@/assets/logosaas.png";
import Socialx from "@/assets/social-x.svg";
import Socialinsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black py-10 text-[#BCBCBC] text-sm text-center">
      <div className="container">
        <div className="inline-flex relative before:content[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="sass-logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6 ">
          <Socialx />
          <Socialinsta />
          <SocialPin />
          <SocialLinkedin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Burning-Fire, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};
