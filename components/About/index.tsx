"use client";

import React from "react";
import SectionHeading from "../Section/Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Even before graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, programming{" "}
        was already a big thing in my life. At 12, I found out that games{" "}
        were made with it and since then, here we are. I enrolled in a coding{" "}
        bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is that{" "}
        sometimes it really makes me wonder if I made the right choice. My favourite{" "}
        things to work with are{" "}
        <span className="font-medium">
          React, React Native, Next.js, Node.js, Prisma and PostgreSQL
        </span>
        . I'm mostly inclined to use TypeScript wherever I can fit it, but am also open{" "}
        to learn new things in any programming language, after all, they're the means to an end.{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">reading some manga</span>.
      </p>
    </motion.section>
  );
}
