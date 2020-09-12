import React from 'react';
import Course_Title from '../home/Course-Title';
import Header from './Header';
import { motion } from 'framer-motion';

const TranstionConf = {
	type: 'spring',
};

const VariantConf = {
	in: {
		opacity: 0,
		x: '100vw',
	},
	on: {
		opacity: 1,
		x: '0',
	},
};

const Layout = ({ children, is_show_content }) => {
	return (
		<motion.div
			initial={'in'}
			exit={'in'}
			animate={'on'}
			transition={TranstionConf}
			variants={VariantConf}>
			<Header is_show_content={is_show_content} />
			<Course_Title />
			{children}
		</motion.div>
	);
};

export default Layout;
