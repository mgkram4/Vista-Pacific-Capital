"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, LucideIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from "react";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  imageSrc: string;
}

interface ServicesCarouselProps {
  services: Service[];
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (services.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section ref={ref} className="w-full">
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 60,
            }}
            className="flex"
          >
            {services.map((service, index) => {
              return <Card key={index} {...service} />;
            })}
          </motion.div>
        </div>

        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[50%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-black backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <ChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[50%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-black backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <ChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ title, description, features, icon: Icon, href, imageSrc }: Service) => {
  return (
    <Link href={href}>
      <div
        className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl w-full"
        style={{
          width: CARD_WIDTH,
          height: 450, 
          marginRight: MARGIN,
        }}
      >
        <Image
          src={imageSrc}
          alt={`${title} equipment financing`}
          fill
          className="object-cover rounded-2xl"
        />
        <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/80 via-black/50 to-transparent p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
          <div className="flex items-center space-x-2">
            <Icon className="h-8 w-8" />
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>
          <p className="mt-2 text-lg text-slate-300">{description}</p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-[#0EB5B2]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};
