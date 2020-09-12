import React from 'react';
import { FiGithub, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Card, CardBody } from 'reactstrap';

const SingleCourseSocial = () => {
	return (
		<Card className='my-4 social'>
			<CardBody className='d-flex justify-content-between align-items-center'>
				<p>اشتراک گذاری</p>
				<ul className='d-flex justify-content-between align-items-center'>
					<li>
						<a href='#'>
							<FiInstagram></FiInstagram>
						</a>
					</li>
					<li>
						<a href='#'>
							<FiTwitter></FiTwitter>
						</a>
					</li>
					<li>
						<a href='#'>
							<FiGithub></FiGithub>
						</a>
					</li>
				</ul>
			</CardBody>
		</Card>
	);
};

export default SingleCourseSocial;
