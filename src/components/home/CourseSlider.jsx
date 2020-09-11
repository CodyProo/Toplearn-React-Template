import React from 'react';
import CourseHeader from './Courses-Header';
import ReactSlider from 'react-slick';

import { Col, Card, CardBody, CardImg } from 'reactstrap';
import ClockImage from '../../assets/images/clock.png';

import MovieStream from '../../assets/images/courses/movie-stream.png';
import ExcelImage from '../../assets/images/courses/Excel.jpg';
import PythonForDeaf from '../../assets/images/courses/PythonForDear.png';
import DigitalMarketing from '../../assets/images/courses/DigitalMarketing.jpg';
import VisualBasic from '../../assets/images/courses/visualbasic.png';
import UnrealEngine from '../../assets/images/courses/UnrealEngine.jpg';
import XamarineForms from '../../assets/images/courses/XamarineForms.jpg';
import WORKAPI from '../../assets/images/courses/API.png';

const CourseSlider = ({ text }) => {
	const fakeData = [
		{
			image: MovieStream,
			title: 'آموزش ساخت اپلیکیشن با Movie Streaming',
			teacher: 'ایل بیگی',
			view: '3,609',
			comment: '32',
			clock: '11:53:00',
			price: '250.000 تومان',
		},
		{
			image: PythonForDeaf,
			title: 'آموزش رایگان مقدماتی تا پیشرفته پایتون برای ناشنوایان',
			teacher: 'اردوخانی',
			view: '2,254',
			comment: '5',
			clock: '00:46:00',
			price: 'رایگان',
		},
		{
			image: DigitalMarketing,
			title: 'آموزش ویدئو مارکتینگ (اینستاگرام، اپارات، یوتیوب)',
			teacher: 'مصححی',
			view: '4,164',
			comment: '21',
			clock: '04:48:00',
			price: '90,000 تومان',
		},
		{
			image: ExcelImage,
			title: 'آموزش جامع اکسل (Excel)',
			teacher: 'راست رو صرمی',
			view: '15,574',
			comment: '28',
			clock: '19:10:00',
			price: '35,000 تومان',
		},
		{
			image: VisualBasic,
			title: 'آموزش ویژوال بیسیک مقدماتی  مخصوص ناشنوایان',
			teacher: 'نبهانی',
			view: '357',
			comment: '0',
			clock: '01:04:00',
			price: 'رایگان',
		},
		{
			image: UnrealEngine,
			title: 'آموزش کار با موتور بازی سازی آنریل انجین',
			teacher: 'میرشبی',
			view: '4,568',
			comment: '27',
			clock: '13:34:00',
			price: '100,000 تومان',
		},
		{
			image: XamarineForms,
			title: 'آموزش طراحی اپلیکیشن فروشگاهی با Xamarin Forms',
			teacher: 'سهولی',
			view: '5,206',
			comment: '51',
			clock: '11:53:00',
			price: '300,000 تومان',
		},
		{
			image: WORKAPI,
			title: 'کار با API اندروید پروژه محور',
			teacher: 'ایل بیگی',
			view: '1,035',
			comment: '9',
			clock: '5:55:00',
			price: '85,000 تومان',
		},
	];

	return (
		<div className='courses-container'>
			<CourseHeader text={text} />
			<ReactSlider
				className='courses-content'
				infinite
				slidesPerRow={4}
				autoplay
				centerPadding
				slidesToScroll={1}>
				{fakeData.map((data) => (
					<div className='px-1 text-right'>
						<Card>
							<CardImg src={data.image}></CardImg>
							<CardBody>
								<h5>{data.title}</h5>
								<div className='content'>
									<div>
										<i className='fa fa-user'></i>
										<span>{data.teacher}</span>
									</div>
									<div>
										<i className='fa fa-eye'></i>
										<span>{data.view}</span>
									</div>
									<div>
										<i className='fa fa-comment'></i>
										<span>{data.comment}</span>
									</div>
								</div>
								<div className='details'>
									<div>
										<img src={ClockImage} />
										<span className='clock'>{data.clock}</span>
									</div>
									<span className='price'>{data.price}</span>
								</div>
							</CardBody>
						</Card>
					</div>
				))}
			</ReactSlider>
		</div>
	);
};

export default CourseSlider;
