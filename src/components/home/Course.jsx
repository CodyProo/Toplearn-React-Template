import React from 'react';
import { Col, Card, CardBody, CardImg } from 'reactstrap';
import ClockImage from '../../assets/images/clock.png';

const Course = ({ data, xl, lg, md, sm, xs }) => {
	const sizes = { xl, lg, sm, md, xs };
	return (
		<Col className='mb-5' {...sizes}>
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
		</Col>
	);
};

export default Course;
