import React from 'react';
import Footer from '../components/common/Footer';
import Layout from '../components/common/Layout';
import { IoIosMail, IoMdLock, IoMdPerson } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa';
import SignTitle from '../components/sign/SignTitle';
import SignInput from '../components/sign/SignInput';
import SignupLink from '../components/sign/SignupLink';

const Signup = () => {
	const args = [
		{ name: 'username', placeholder: 'نام کاربری', Icon: IoMdPerson, size: 6 },
		{ name: 'phone', placeholder: 'موبایل', Icon: FaPhone, size: 6 },
		{ name: 'email', placeholder: 'آدرس ایمیل', Icon: IoIosMail, size: 12 },
		{ name: 'password', placeholder: 'رمز عبور', Icon: IoMdLock, size: 6 },
		{
			name: 'confirm_password',
			placeholder: 'تکرار رمز عبور',
			Icon: IoMdLock,
			size: 6,
		},
	];

	return (
		<Footer>
			<Layout>
				<div className='sign-container'>
					<div className='card card-one'></div>
					<div className='card card-content'>
						<SignTitle />
						<form class='form-row'>
							{args.map((element) => (
								<SignInput {...element} key={element.name} />
							))}
							<div className='col-md-12 text-left mt-3'>
								<button>ثبت نام در سایت</button>
							</div>
						</form>
						<SignupLink />
					</div>
				</div>
			</Layout>
		</Footer>
	);
};

export default Signup;
