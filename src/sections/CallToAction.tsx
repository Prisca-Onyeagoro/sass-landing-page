import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motovate your efforts
          </p>
          <Image
            src={StarImage}
            width={360}
            alt="starimage"
            className="absolute -left-[350px] -top-[-8px]"
          />
          <Image
            src={SpringImage}
            width={360}
            alt="springimage"
            className="absolute -right-[331px] -top-[-19px]"
          />
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-2">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
