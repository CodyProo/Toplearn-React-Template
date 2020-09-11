import React from 'react';
import Header from '../components/common/Header';
import Course_Title from '../components/home/Course-Title';
import Courses from '../components/home/Courses';
import CourseSlider from '../components/home/CourseSlider';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Course_Title />
			<Courses text="آخرین دوره های تاپ لرن" />
			<CourseSlider text="دوره های پیشنهادی تاپ لرن" />
			<Courses text="دوره های محبوب تاپ لرن" />
		</React.Fragment>
	);
};

export default Home;
