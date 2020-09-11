import React from 'react';
import Course_Title from '../home/Course-Title';
import Header from './Header';

const Layout = ({ children, is_show_content }) => {
	return (
		<>
			<Header is_show_content={is_show_content} />
			<Course_Title />
			{children}
		</>
	);
};

export default Layout;
