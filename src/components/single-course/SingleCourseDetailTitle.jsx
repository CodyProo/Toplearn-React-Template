import React from 'react';


const SingleCourseDetailsTitle = () => {
	return (
		<div className='card-title'>
			<h1 className='py-2'>
				<span>
					<i className='fa fa-dollar'></i>
				</span>{' '}
				قیمت این دوره : <span className='font-weight-bold'>100,000 تومان</span>
			</h1>
			<hr />
		</div>
	);
};

export default SingleCourseDetailsTitle;
