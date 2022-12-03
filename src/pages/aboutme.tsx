import { motion } from 'framer-motion';
import _ from 'lodash';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const bigTitleVariants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};
const smallTitleVariants = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};
const topParentVariants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: '-1000px',
    transition: {
      type: 'tween',
      duration: 30,
    },
  },
};
const parentVariants = {
  hidden: {},
  visible: {
    transition: {
      type: 'tween',
      staggerChildren: 0.2,
    },
  },
};
const parentVariants2 = {
  hidden: {},
  visible: {
    transition: {
      type: 'tween',
      staggerChildren: 0.05,
      delay: 2,
    },
  },
};

const AboutMePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <motion.div
        variants={topParentVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 flex flex-col justify-center items-center"
      >
        <motion.div variants={parentVariants} className="flex overflow-hidden">
          {_.split('Cuzknothz'.toUpperCase(), '').map((i, idx) => (
            <motion.div
              key={idx}
              className="md:text-9xl text-7xl font-august cuzknothz  select-none"
              variants={bigTitleVariants}
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
        <div className="h-[10px]"></div>
        <motion.div variants={parentVariants2} className="flex overflow-hidden">
          {_.split('Web Developer, ', '').map((i, idx) => (
            <motion.div
              key={idx}
              className="md:text-sm text-xs select-none font-neutra min-w-[5px]"
              variants={smallTitleVariants}
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={parentVariants2} className="flex overflow-hidden">
          {_.split('Hard-Dance Music Producer', '').map((i, idx) => (
            <motion.div
              key={idx}
              className="md:text-sm text-xs select-none font-neutra min-w-[5px]"
              variants={smallTitleVariants}
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={parentVariants2} className="flex overflow-hidden">
          {_.split('based in VietNam', '').map((i, idx) => (
            <motion.div
              key={idx}
              className="md:text-sm text-xs select-none font-neutra min-w-[5px]"
              variants={smallTitleVariants}
            >
              {i}
            </motion.div>
          ))}
        </motion.div>
        <div></div>
      </motion.div>
    </>
  );
};

export default AboutMePage;
