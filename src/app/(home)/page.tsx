import { SearchIcon } from "lucide-react";
import FeatureGrid from "@/components/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="relative flex items-center min-h-screen bg-[url(/lightbg.jpg)] dark:bg-[url(/darkbg.jpg)] bg-cover bg-center transition-colors duration-500">
        <div className="absolute inset-0 bg-black/60 dark:bg-black/60 z-0" />
        <div className="w-full flex flex-col justify-center items-center gap-5 max-w-lg mx-auto mt-30 text-white text-center z-10 ">
          <div className="text-6xl  tracking-tight font-bold">
            Own Your Online Identity
          </div>
          <div className="text-xl tracking-wide text-gray-200 dark:text-gray-300 mb-2 font-light">
            Analyze how you're seen on the web and make smarter, safer decisions
            about your digital presence. Take control of your digital identity
            in minutes
          </div>
          <div className="flex items-center justify-center rounded-xl overflow-hidden max-w-md shadow-md mx-auto">
            <input
              type="text"
              placeholder="Enter username or email"
              className="px-4 py-2 w-full text-sm text-gray-800 placeholder-gray-500 focus:outline-none bg-white"
            />
            <button className="flex items-center gap-1 cursor-pointer bg-black text-white px-4 py-2 text-sm font-semibold hover:bg-gray-800 transition">
              <SearchIcon size={16} />
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center transition-colors duration-500">
        <section className="px-6 flex items-center bg-[var(--bg-color)] dark:bg-[var(--bg-color)] text-black dark:text-white py-16">
          <div className="w-full max-w-7xl text-neutral-800 dark:text-neutral-300 mx-auto mt-7">
            <div className=" max-w-7xl mx-auto mb-20">
              <p className="font-bold mb-3">HOW IT WORKS</p>
              <p className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold">
                Secure your online identity in 3 simple steps
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-20 lg:gap-x-36 gap-y-24 w-full max-w-7xl text-neutral-800 dark:text-neutral-300 mx-auto">
              <div className="max-w-lg mx-auto">
                <p className=" font-semibold text-8xl text-neutral-300 dark:text-neutral-800 mb-5">
                  01
                </p>
                <h3 className="leading-4 text-2xl lg:text-3xl font-bold  mb-8">
                  Submit Your Identifier
                </h3>
                <p className="text-lg lg:text-xl tracking-wide leading-8">
                  Provide a name, email, username, or any identifier you
                  commonly use online.This simple input kicks off the entire
                  process no complex forms or setup required. Just type and tap.
                </p>
              </div>
              <div className="max-w-lg mx-auto">
                <Image
                  src="/image_fx (20).jpg"
                  alt="Top Tools"
                  height={420}
                  width={420}
                  className="h-full w-full max-w-lg rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="max-w-lg mx-auto">
                <Image
                  src="/image_fx (26).jpg"
                  alt="Top Tools"
                  height={420}
                  width={420}
                  className="h-full w-full max-w-lg rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="max-w-lg mx-auto">
                <p className=" font-semibold text-8xl text-neutral-300 dark:text-neutral-800 mb-5">
                  02
                </p>
                <h3 className="leading-4 text-2xl lg:text-3xl font-bold  mb-8">
                  Scan and Analyze
                </h3>
                <p className="text-lg lg:text-xl tracking-wide leading-8">
                  Our system scrapes the web and runs AI analysis on found data,
                  checking for leaks, mentions, and privacy vulnerabilities in
                  real time. It all happens silently in the background fast,
                  secure, and private.
                </p>
              </div>
              <div className="max-w-lg mx-auto">
                <p className=" font-semibold text-8xl text-neutral-300 dark:text-neutral-800 mb-5">
                  03
                </p>
                <h3 className="leading-4 text-2xl lg:text-3xl font-bold  mb-8">
                  Get Your Privacy Report
                </h3>
                <p className="text-lg lg:text-xl tracking-wide leading-8">
                  Receive a detailed exposure report with a risk score and
                  smart, actionable steps to protect your digital footprint.
                  It's like a digital audit simplified and focused on protecting
                  you.
                </p>
              </div>
              <div className="max-w-lg mx-auto">
                <Image
                  src="/image_fx (27).jpg"
                  alt="Top Tools"
                  height={420}
                  width={420}
                  className="h-full w-full max-w-lg rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 flex justify-center bg-[var(--bg-color)] dark:bg-[var(--bg-color)] text-black dark:text-white py-16">
          <FeatureGrid />
        </section>
        <section className="bg-[var(--text-color)] text-white dark:bg-[var(--text-color)] text-center py-20 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-black mb-4">
            Digital privacy isn't optional anymore. It’s survival.
          </h2>
          <p className="dark:text-gray-700 text-gray-300 max-w-md mx-auto mb-6">
            The average user has over 100 online accounts. From old forums to
            forgotten shopping carts—your data is scattered, exposed, and
            vulnerable.
          </p>
          <div>
            <button className="inline-flex items-center gap-2 bg-[var(--bg-color)] text-black dark:bg-black dark:text-white font-semibold py-2 px-6 rounded-md dark:hover:bg-gray-800 hover:bg-gray-300 transition cursor-pointer">
              <Link href="/scan">Scan Now</Link>{" "}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
        <section className="dark:bg-[var(--bg-color)] bg-[var(--bg-color)]  dark:text-white text-black py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
            {/* Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                Free tools to explore your{" "}
                <span className="text-[#07B5AD]">Digital Footprint</span> and
                online exposure
              </h1>
              <p className="dark:text-neutral-400 text-neutral-800 text-lg leading-relaxed">
                Use our free tools to explore where your online profile is
                registered. Track down where your personal details have leaked
                via data breaches and more.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-black text-white border border-white dark:bg-white dark:text-black  hover:bg-[#0f0f10] font-medium py-2 px-5 rounded-md dark:hover:bg-gray-100 transition cursor-pointer">
                Profile checker
              </button>
              <button className="bg-[#f9f9f9]  dark:bg-black border border-black dark:border-white dark:text-white text-black font-medium py-2 px-5 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer">
                Data breach checker
              </button>
            </div>
          </div>
        </section>

        {/* <section className="bg-[var(--bg-color)] dark:bg-[#0f0f10] dark:text-white text-black py-16 px-6 transition-colors duration-500 flex flex-col items-center pt-30">
          <h1 className="text-2xl mb-10">Frequently Asked Questions</h1>
          <Accordion
            type="single"
            collapsible
            className="max-w-7xl mx-auto min-w-md w-5/6 md:min-w-2xl md:w-1/2 flex flex-col gap-2 "
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                How does your scanner work?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7">
                Our scanner uses advanced AI models and secure web scraping
                technologies to search public sources—like search engines,
                forums, and social media platforms—for any mentions of your
                name, email, or username. It then analyzes the data to determine
                exposure risk.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Is my data safe during the scan?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7">
                Yes. We take your privacy seriously. We do not store, sell, or
                share your input or scan results. All scans are performed using
                encrypted protocols, and your data is either temporarily
                processed or anonymized where possible.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                How often should I scan my digital footprint?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7">
                We recommend scanning your footprint once every few months, or
                after any major online activity such as joining new platforms,
                job changes, or public posts. You can also enable scan reminders
                in your account settings.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Who is this service for?
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7">
                Anyone who wants to take control of their digital
                presence—professionals, job seekers, parents, public figures, or
                anyone concerned about online privacy. Your digital reputation
                matters more than ever.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section> */}
        {/* <footer className="bg-[var(--bg-color)] dark:bg-[#0f0f10] dark:text-white text-black py-16 px-6">
          <div className="container mx-auto px-4 text-center space-y-6">
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                Free checker
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="hover:text-[var(--main)] transition-colors"
              >
                <FaTwitter size={18} />
              </a>
            </div>

            <p className="text-xs">
              &copy; 2024 Digital Footprint Check. All rights reserved.
            </p>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
