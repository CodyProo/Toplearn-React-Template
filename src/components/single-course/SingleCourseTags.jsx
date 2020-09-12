import React from 'react';
import { BsTagFill } from 'react-icons/bs';
import { Card, CardBody } from 'reactstrap';

const SingleCourseTags = () => {
	return (
		<Card className='my-4 tags'>
			<CardBody className='d-flex flex-column'>
				<div className='d-flex align-items-center flex-row'>
					<BsTagFill className='t-45'></BsTagFill>
					<span className='mr-2'>برچسب ها</span>
				</div>
				<ul className='content py-3'>
					<li>
						<a href='#'>سیشارپ</a>
					</li>
					<li>
						<a href='#'>یونیتی</a>
					</li>
					<li>
						<a href='#'>درآمد</a>
					</li>
					<li>
						<a href='#'>تاپ لرن</a>
					</li>
					<li>
						<a href='#'>بازی سازی</a>
					</li>

					<li>
						<a href='#'>برنامه نویسی</a>
					</li>
					<li>
						<a href='#'>سی شارپ در یونیتی</a>
					</li>

					<li>
						<a href='#'>یونیتی از صفر</a>
					</li>
					<li>
						<a href='#'>بازی سازی با یونیتی</a>
					</li>
				</ul>
			</CardBody>
		</Card>
	);
};

export default SingleCourseTags;
