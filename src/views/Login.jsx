import React from 'react';
import Footer from '../components/common/Footer';
import Layout from '../components/common/Layout';
import { IoIosMail, IoMdLock } from 'react-icons/io';
import SignTitle from '../components/sign/SignTitle';
import SignInput from '../components/sign/SignInput';
import SignupLink from '../components/sign/SignupLink';

const Login = () => {
	const args = [
		{ name: 'email', placeholder: 'آدرس ایمیل', Icon: IoIosMail, size: 12 },
		{
			name: 'confirm_password',
			placeholder: 'تکرار رمز عبور',
			Icon: IoMdLock,
			size: 12,
		},
	];
	return (
		<Footer>
			<Layout>
				<div className='sign-container'>
					<div className='card card-one'></div>
					<div className='card card-content'>
						<SignTitle title={'ورود'} />
						<form className='form-row'>
							{args.map((element) => (
								<SignInput {...element} key={element.name} />
							))}
							<div className='col-md-12 text-left my-3'>
								<button> نام در سایت</button>
							</div>
						</form>
						<SignupLink />
					</div>
				</div>
			</Layout>
		</Footer>
	);
};

export default Login;
