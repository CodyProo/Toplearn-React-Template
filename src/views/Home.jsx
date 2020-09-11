import React from 'react';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Course_Title from '../components/home/Course-Title';
import Courses from '../components/home/Courses';
import CourseSlider from '../components/home/CourseSlider';

const Home = () => {
	return (
		<React.Fragment>
			<Layout is_show_content>
				<Courses text='آخرین دوره های تاپ لرن' />
				<CourseSlider text='دوره های پیشنهادی تاپ لرن' />
				<Courses text='دوره های محبوب تاپ لرن' />
			</Layout>
		</React.Fragment>
	);
};

export default Home;
