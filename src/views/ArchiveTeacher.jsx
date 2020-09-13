import React from 'react';
import Footer from '../components/common/Footer';
import Layout from '../components/common/Layout';
import { Row, Col, Card, CardImg, CardBody } from 'reactstrap';
//
import UserOne from '../assets/images/teachers/iman_madaeny.jpg';
import UserTwo from '../assets/images/teachers/mohammad_ghari.jpg';
import UserThree from '../assets/images/teachers/mohammad_ordokhani.jpg';
import UserFour from '../assets/images/teachers/reza_por.jpeg';
import UserFive from '../assets/images/teachers/user-nine.jpeg';
import UserSix from '../assets/images/teachers/sajad_bagherzadeh.jpg';
import UserSeven from '../assets/images/teachers/younes_ghorbany.jpg';
import UserEight from '../assets/images/teachers/nima_ladmakhi.png';
import { IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';

const ArchiveTeachers = () => {
	const teachers = [
		{
			name: 'ایمان مدائنی',
			profile: UserOne,
		},
		{
			name: 'سجاد باقرزاده',
			profile: UserTwo,
		},
		{
			name: 'محمد اردوخانی',
			profile: UserThree,
		},
		{
			name: 'رضاپور',
			profile: UserFour,
		},
		{
			name: 'یونس قربانی',
			profile: UserFive,
		},
		{
			name: 'محمد قاری',
			profile: UserSix,
		},
		{
			name: 'سعید ترابی',
			profile: UserSeven,
		},
		{
			name: 'حسین لادمخی',
			profile: UserEight,
		},
	];
	return (
		<Footer>
			<Layout>
				<div className='archive-teachers-container'>
					<div className='archive-teachers-title'>
						<h1>معرفی مدرسین تاپ لرن</h1>
						<span className='text-muted'>تاپ لرن / معرفی مدرسین</span>
					</div>
					<div className='archive-teachers-content'>
						<Row>
							{teachers.map((element) => (
								<Col
									className='mb-5'
									xl={3}
									lg={4}
									md={6}
									sm={12}
									key={element.name}>
									<Card className='text-right'>
										<CardImg src={element.profile} />
										<CardBody>
											<div className='content-teacher'>
												<span>
													<IoMdPerson />
												</span>
												<Link to='/'>{element.name}</Link>
											</div>
										</CardBody>
									</Card>
								</Col>
							))}
						</Row>
					</div>
				</div>
			</Layout>
		</Footer>
	);
};

export default ArchiveTeachers;
