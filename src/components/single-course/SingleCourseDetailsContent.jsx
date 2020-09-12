import React from 'react';
import { IoMdPerson, IoMdCalendar, IoMdTime, IoIosApps } from 'react-icons/io';
import { BsPeopleFill, BsInfoCircleFill } from 'react-icons/bs';

const SingleCourseDetailsContent = () => {
	return (
		<ul className='card-content'>
			<li>
				<IoMdPerson />
				<span>مدرس دوره : </span>
				<span className='value'>
					عرفان شادبخت{' '}
					<a href='#' id='resume'>
						( رزومه )
					</a>
				</span>
			</li>
			<li>
				<BsPeopleFill />
				<span>تعداد دانشجویان دوره: </span>
				<span className='value'>56 نفر</span>
			</li>
			<li>
				<IoMdTime />
				<span>مدت زمان دوره : </span>
				<span className='value'>36:27:00</span>
			</li>
			<li>
				<IoIosApps />
				<span>سطح دوره : </span>
				<span className='value'>متوسط</span>
			</li>
			<li>
				<BsInfoCircleFill />
				<span>وضعیت دوره : </span>
				<span className='value'>
					<a href='#' id='status'>
						درحال برگزاری
					</a>
				</span>
			</li>
			<li>
				<IoMdCalendar />
				<span>تاریخ آخرین بروزرسانی : </span>
				<span className='value'>1399/06/22</span>
			</li>
			<li>
				<button>ثبت نام در این دوره</button>
			</li>
		</ul>
	);
};

export default SingleCourseDetailsContent;
