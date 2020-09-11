import React from 'react';
import LeftArrow from '../../assets/images/left-arrow.png';

const CourseHeader = ({ text }) => {
	return (
		<div className='courses-title'>
			<div>
				<h2>{text}</h2>
				<div className='courses-title-border'></div>
			</div>
			<div>
				<span>مشاهده همه دوره ها</span>
				<img src={LeftArrow} alt='' />
			</div>
		</div>
	);
};

export default CourseHeader;
