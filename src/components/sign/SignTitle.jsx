import React from 'react';
import RegisterImage from '../../assets/images/register.svg';

const SignTitle = ({ title }) => {
	return (
		<React.Fragment>
			<h1 className='my-3'>{title} در سایت</h1>
			<p className='text-muted'>
				با ثبت نام در سایت ، از مزایای کاربران سایت بهره مند شوید
			</p>
			<img src={RegisterImage} />
		</React.Fragment>
	);
};

export default SignTitle;
