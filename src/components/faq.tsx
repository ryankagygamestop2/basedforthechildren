import Link from "next/link";
import React from "react";
import Image from "next/image";
import shaolin from "../../public/og.jpg";
import faq_child from "../../public/faq/child.png";
import faq_1_1 from "../../public/faq/1_1.png";
import faq_1_2 from "../../public/faq/1_2.png";
import faq_2_1 from "../../public/faq/2_1.png";
import faq_3_1 from "../../public/faq/3_1.png";
import faq_3_2 from "../../public/faq/3_2.png";
import { britney } from "@/app/fonts";

// import sponsors from "../../public/sponsors.png";
import financial_charity_army from "../../public/faq/financial_charit_army.png";

function FAQ() {
  return (
    <section className="flex flex-col py-20 gap-20 bg-[--blue] text-white">
      <div className="flex flex-col gap-5 lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:w-[500px] gap-12">
          <p className={`${britney.className} text-center text-2xl md:text-[65px] leading-none`}>
            WHY FoR tHe cHiLdReN?
          </p>
          <p className="text-xl">
            The faces of the kids we help are a strong reminder of why we do this. This July, we'll be making another documentary with Wu-Tang Clan, as we feed hungry children in the Dominican Republic through onchain art & culture. <br /> <br /> We will bring them new clothing to wear to be proud of, and give out bookbags full of pencils, erasers, notepads, and school supplies to support their education, so that one day these children have a chance to become builders in their own community.
          </p>
          <Image
            src={financial_charity_army}
            alt="Sponsors"
            className="h-[45px] w-auto"
          />
        </div>

        <div className="flex flex-col items-end gap-2.5">
          <div className="flex flex-row gap-2.5">
            <Image
              src={faq_child}
              alt="Sponsors"
              className="h-[350px] w-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center lg:items-start lg:flex-row gap-[30px]">
          <p className="w-[90%] lg:w-[380px]">
            The Shaolin Financial Charity Army is a nonprofit created by founding members of The Creators & Wu-Tang Clan with the goal of ending the commoditization of our art & culture, bringing it onchain, & channeling its power so that the next generation, our children, can grow up in a world where they are free to be artists, musicians, writers, builders and creators.
          </p>
          <p className="w-[90%] lg:w-[380px]">
            Our project has suceeded in bringing over 40 fresh new artists onchain, and has united over 30 communities over a shared vision of real-world impact. For the whole month of July, we're asking you to add your voice to ours. Join the list of sponsors and signatures who have done it For The Children, and find yourself listed among the leaders of this space in the official mint and documentary we are creating when we travel to DR in July.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Link
          href="https://app.deform.cc/form/8bfa649c-8f6f-4c2c-a854-8e14fb0f3fef"
          className="rounded-full font-[500] text-[--blue] bg-white px-4 py-2 text-center w-[250px]"
        >
            Join the cause
        </Link>
      </div>
    </section>
  );
}

export default FAQ;
