import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import Course_Title from '../components/home/Course-Title';
import Courses from '../components/home/Courses';
import CourseSlider from '../components/home/CourseSlider';

const Home = () => {
	return (
		<React.Fragment>
			<Footer>
				<Layout is_show_content>
					<Courses text='آخرین دوره های تاپ لرن' />
					<CourseSlider text='دوره های پیشنهادی تاپ لرن' />
					<Courses text='دوره های محبوب تاپ لرن' />
				</Layout>
			</Footer>
		</React.Fragment>
	);
};

export default Home;
