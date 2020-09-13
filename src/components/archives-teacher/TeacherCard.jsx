import React from 'react';
import { Col, Card, CardImg, CardBody } from 'reactstrap';
import { IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TeacherCard = ({ data }) => {
	return (
		<Col className='mb-5' xl={3} lg={4} md={6} sm={12} key={data.name}>
			<Link to='/single/teacher/1'>
				<Card className='text-right'>
					<CardImg src={data.profile} />
					<CardBody>
						<div className='content-teacher'>
							<span>
								<IoMdPerson />
							</span>
							<Link to='/'>{data.name}</Link>
						</div>
					</CardBody>
				</Card>
			</Link>
		</Col>
	);
};

export default TeacherCard;
