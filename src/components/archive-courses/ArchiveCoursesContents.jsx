import React from 'react';
import { Row, Col } from 'reactstrap';
import Course from '../../components/home/Course';

const ArchiveCoursesContent = ({ fakeData }) => {
	return (
		<Col xl={9} lg={8} sm={12}>
			<Row>
				{fakeData.map((data) => (
					<Course
						data={data}
						key={data.title}
						xl={4}
						lg={6}
						md={6}
						sm={6}
						xs={12}
					/>
				))}
			</Row>

			<ul className='custom-pagination'>
				<li>
					<a href='#'>1</a>
				</li>
				<li>
					<a href='#'>2</a>
				</li>
				<li>
					<a href='#'>3</a>
				</li>
				<li>
					<a href='#'>4</a>
				</li>
				<li>
					<a href='#'>5</a>
				</li>
				<li>
					<a href='#'>6</a>
				</li>
				<li>
					<a href='#'>7</a>
				</li>
				<li>
					<a href='#'>8</a>
				</li>
				<li>
					<a href='#'>9</a>
				</li>
				<li>
					<a href='#'>10</a>
				</li>
				<li>
					<a href='#'>11</a>
				</li>
				<li>
					<a href='#'>12</a>
				</li>
			</ul>
		</Col>
	);
};

export default ArchiveCoursesContent;
