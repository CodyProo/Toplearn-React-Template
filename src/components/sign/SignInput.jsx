import React from 'react';

const SignInput = ({ name, Icon, size, placeholder }) => {
	const args = { name, placeholder };
	return (
		<div className={`col-xl-${size} col-md-12 mt-3`}>
			<div className='input-content'>
				<input type='text' {...args} />
				<Icon />
			</div>
		</div>
	);
};

export default SignInput;
