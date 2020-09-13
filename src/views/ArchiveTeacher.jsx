import React from 'react';
import Footer from '../components/common/Footer';
import Layout from '../components/common/Layout';
import { Row } from 'reactstrap';
//
import UserOne from '../assets/images/teachers/iman_madaeny.jpg';
import UserTwo from '../assets/images/teachers/mohammad_ghari.jpg';
import UserThree from '../assets/images/teachers/mohammad_ordokhani.jpg';
import UserFour from '../assets/images/teachers/reza_por.jpeg';
import UserFive from '../assets/images/teachers/user-nine.jpeg';
import UserSix from '../assets/images/teachers/sajad_bagherzadeh.jpg';
import UserSeven from '../assets/images/teachers/younes_ghorbany.jpg';
import UserEight from '../assets/images/teachers/nima_ladmakhi.png';
import TeacherCard from '../components/archives-teacher/TeacherCard';

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
								<TeacherCard data={element} key={element.name} />
							))}
						</Row>
					</div>
				</div>
			</Layout>
		</Footer>
	);
};

export default ArchiveTeachers;
