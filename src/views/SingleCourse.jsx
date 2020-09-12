import React from 'react';
import Layout from '../components/common/Layout';
import SingleCourseTitle from '../components/single-course/SingleCourseTitle';
import { Row, Col, Card, CardBody } from 'reactstrap';
import SingleCourseBanner from '../components/single-course/SingleCourseBanner';
import SingleCourseDetailsTitle from '../components/single-course/SingleCourseDetailTitle';
import SingleCourseDetailsContent from '../components/single-course/SingleCourseDetailsContent';
import SingleCourseSocial from '../components/single-course/SingleCourseSocial';
import SingleCourseTags from '../components/single-course/SingleCourseTags';
import SingleCourseContentData from '../components/single-course/SingleCourseContentData';
import BtnQuestion from '../components/single-course/BtnQuestion';
import Bullet3 from '../assets/images/bullet-3.svg';
import SingleCourseEditor from '../components/single-course/SingleCourseEditor';

import One from '../assets/images/users/one.png';
import Two from '../assets/images/users/two.png';
import Footer from '../components/common/Footer';

const SingleCourse = () => {
	return (
		<Footer>
			<Layout>
				<div className='single-course-container'>
					<SingleCourseTitle />
					<SingleCourseBanner />
					<Row className='single-course-content'>
						<Col xl={4} lg={4} className='text-right'>
							<Card className='my-4'>
								<CardBody>
									<SingleCourseDetailsTitle />
									<SingleCourseDetailsContent />
								</CardBody>
							</Card>
							<SingleCourseSocial />
							<SingleCourseTags />
							<BtnQuestion />
						</Col>
						<Col xl={8} lg={8}>
							<SingleCourseContentData />
							<Card className='my-4 comments text-right'>
								<CardBody>
									<div className='my-3 align-items-center d-flex'>
										<div className='bullet-img'>
											<img src={Bullet3} alt='' />
										</div>
										<h1>نظرات کاربران در رابطه با این دوره </h1>
									</div>
									<p>نظر خود را وارد کنید</p>
									<div className='mb-4'>
										<SingleCourseEditor />
									</div>
									<ul>
										<li>
											<img src={One} alt='' />
											<div className='comment-container'>
												<div className='comment-header'>
													<p>محمد کاوه</p>
													<span>ارسال شده در 1399/06/09</span>
													<button>گزارش</button>
												</div>
												<div className='comment-body'>
													<p>
														سلام جناب مدائنی عزیز خواستم کمال تشکر رو ازتون بابت
														این دوره برای هموطنای ناشنوای عزیزم داشته باشم واقعا
														کارتون شایسته تقدیر و قدردانی هست...
													</p>
												</div>
											</div>
										</li>

										<li>
											<img src={Two} alt='' />
											<div className='comment-container'>
												<div className='comment-header'>
													<p>mohammad kazem</p>
													<span> ارسال شده در 1399/06/20</span>
													<button>گزارش</button>
												</div>
												<div className='comment-body'>
													<p>
														سلام استاد مدائنی وقتتون بخیر دو هفته ای است ک اموزش
														شمارو شروع کردم ب یادگیری اموزشتون واقعا کامله
														مخصوصا پروژه اخرش ک خیلیی خوب بود فقط میتونم یک
														ایراد ازتون بگیرم اونم اینکه احساس میکنم شما خیلی با
														بوت استرپ کار نمیکنید و تسلط کافی بر روی کدها اینارو
														ندارید و ی حوری تو اموزش فک میکنم ک اینجوریه دارید
														حفظ میکنید و جلو میرید و بنظر من این برای ی مدرس تاپ
														شاید خیلیی خوب نباشه شوخی ها و حرفای ک مربوط ب دوره
														نبود توی دوره خستگی رو از تن ادم بیرون میکرد و این
														کارتون رو تحسین میکنم ... اما در کل دوره اموزشی خوبی
														بود کامل بود و انشالله از این تاریخ 12 / 5 / 99 ک
														دورم به پایان رسید چندتا اموزش پروژه محور دیگ ن کلاس
														های بوت استرپ .... برای تسلط بیشتر نگاه کنم مفاهیم
														رو یاد بگیرم و انشالله در فرصت مناسب ی قالب خوب رو
														براتون ایمیل کنم موفق باشید یا حق
													</p>
												</div>
											</div>
										</li>
									</ul>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</div>
			</Layout>
		</Footer>
	);
};

export default SingleCourse;
