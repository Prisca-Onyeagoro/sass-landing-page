import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title  mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortly turn your ideas into a fully functional, responsive, Saas
            website in just minutes with this templates
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="productimage" className="mt-10" />
          <Image
            src={pyramid}
            alt="pyramid"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src={tube}
            alt="tube image"
            height={248}
            className="absolute bottom-24 -left-36 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
