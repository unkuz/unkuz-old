import { appRoutes } from '@/routes';
import { motion } from 'framer-motion';
import _ from 'lodash';
import Link from 'next/link';
import React from 'react';

const bigTitleVariants = {
  hidden: {
    y: '100px',
  },
  visible: {
    y: 0,
    transition: {
      type: 'tween',
    },
  },
};
const topParentVariants = {
  hidden: {},
  visible: {
    transition: {
      type: 'tween',
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

export const Loading = () => {
  return (
    <motion.div
      variants={topParentVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 flex flex-col justify-center items-center"
    >
      <Link href={appRoutes.HOME} passHref>
        <div className="absolute top-0 left-0 md:cursor-pointer ">{'<'}</div>
      </Link>
      <motion.div variants={parentVariants} className="flex overflow-hidden outline-title">
        {'cuzknothz'
          .toUpperCase()
          .split('')
          .map((i) => (
            <motion.div
              key={i}
              className="md:text-6xl text-4xl outline-title text-transparent"
              variants={bigTitleVariants}
            >
              {i}
            </motion.div>
          ))}
      </motion.div>
      <div className="h-[10px]"></div>
      <motion.div variants={parentVariants2} className="flex overflow-hidden">
        {_.split('Font-end Developer', '').map((i) => (
          <motion.div key={i} className="md:text-sm text-xs" variants={bigTitleVariants}>
            {i}
          </motion.div>
        ))}
      </motion.div>
      <div></div>
    </motion.div>
  );
};
