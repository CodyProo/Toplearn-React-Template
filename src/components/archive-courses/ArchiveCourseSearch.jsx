import React from 'react';

const ArchiveCourseSearch = () => {
	return (
		<div className='archive-courses-search'>
			<div className='archive-courses-input'>
				<input type='text' placeholder='عنوان مورد نظر' />
				<i className='fa fa-search'></i>
			</div>
			<div className='archive-courses-select'>
				<select name='' id=''>
					<option value='create'>مرتب سازی براساس تاریخ انتشار</option>
					<option value='name'>مرتب سازی براساس عنوان</option>
					<option value='price'>مرتب سازی براساس هزینه</option>
					<option value='likes'>مرتب سازی براساس محبوبیت</option>
				</select>
				<i className='fa fa-caret-down'></i>
			</div>
		</div>
	);
};

export default ArchiveCourseSearch;
