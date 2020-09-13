import React from 'react';
import { Row, Col } from 'reactstrap';
import Course from '../../components/home/Course';
import PaginationCourses from '../common/Pagination';

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

			<PaginationCourses />
		</Col>
	);
};

export default ArchiveCoursesContent;
