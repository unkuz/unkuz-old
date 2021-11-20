import React from 'react';
import { motion } from 'framer-motion';
import _ from 'lodash';
import Link from 'next/link'
import { appRoutes } from '@/routes';
import { NextPage } from 'next';

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
const topParentVariants = {
  hidden: {
    y:0
  },
  visible: {
    y:'-1000px',
    transition: {
      type: 'tween',
      duration: 30
 
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
    },
  },
};

const AboutMePage:NextPage = () => {
  return (
    <motion.div
      variants={topParentVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 flex flex-col justify-center items-center"
    >
        <Link href={appRoutes.HOME} passHref> 
        <div className="absolute top-0 left-0 md:cursor-pointer ">{"<"}</div>
        </Link>
      <motion.div variants={parentVariants} className="flex overflow-hidden outline-title">
        {'cuzknothz'
          .toUpperCase()
          .split('')
          .map((i) => (
            <motion.div
              key={i}
              className="md:text-6xl text-4xl outline-title text-transparent select-none"
              variants={bigTitleVariants}
            >
              {i}
            </motion.div>
          ))}
      </motion.div>
      <div className="h-[10px]"></div>
      <motion.div variants={parentVariants2} className="flex overflow-hidden">
        {_.split('Font-end Developer', '').map((i) => (
          <motion.div key={i} className="md:text-sm text-xs select-none" variants={bigTitleVariants}>
            {i}
          </motion.div>
        ))}
      </motion.div>
      <div></div>
    </motion.div>
  );
};

export default AboutMePage;
