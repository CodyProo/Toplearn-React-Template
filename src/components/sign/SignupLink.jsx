import React from 'react';
import { IoMdLock, IoMdPerson } from 'react-icons/io';

const SignupLink = () => {
	return (
		<ul className='text-right'>
			<li>
				<a href='#'>
					<IoMdPerson />
					<span className='mr-2'>ورود به سایت</span>
				</a>
			</li>
			<li>
				<a href='#'>
					<IoMdLock /> <span className='mr-2'>رمز خود را فراموش کرده ام !</span>
				</a>
			</li>
		</ul>
	);
};

export default SignupLink;
