import React from 'react';

import Toplearn_Logo from '../../assets/images/logo/toplearn-logo.svg';
import Panel_Section_Image from '../../assets/images/panel-navbar.png';
import Student_Image from '../../assets/images/status/student.svg';
import Teacher_Image from '../../assets/images/status/teacher.svg';
import Time_Image from '../../assets/images/status/time.svg';
import HeaderSmall from './Header-sm';
import { Link, useHistory } from 'react-router-dom';

const Header = ({ is_show_content }) => {
	const history = useHistory();
	const [OpenSection, HandleSection] = React.useState(false);
	const Handler = () => HandleSection((prev) => !prev);
	const activeClass = OpenSection ? 'panel_section_body_active' : '';
	const [OpenNav, ToggleNav] = React.useState(false);
	const HandlerToggleNav = () => {
		ToggleNav((prev) => !prev);
		if (!OpenNav) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'unset';
	};

	const CloseNavChangeRoute = () => {
		document.body.style.overflow = 'unset';
		ToggleNav(false);
		history.push('/');
	};

	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to='/'>
							<img src={Toplearn_Logo} alt='' />
						</Link>
					</li>
					<li>
						<Link to='/archive/courses'>آخرین دوره ها</Link>
					</li>
					<li>
						<a href='#'>معرفی مدرسین</a>
					</li>
					<li>
						<a href='#'>بلاگ</a>
					</li>
					<li>
						<a href='#'>پرسش و پاسخ</a>
					</li>
					<li>
						<a href='#'>درخاست مشاوره</a>
					</li>
					<li>
						<a href='#'>تماس با ما</a>
					</li>
					<li>
						<a href='#'>درباره با ما</a>
					</li>
				</ul>
				{/* login */}
				{/* <i onClick={HandlerToggleNav} className='fa fa-bars'></i>
				<div className='panel_section' onClick={Handler}>
					<img src={Panel_Section_Image} alt='' />
					<span>Mohammad_1382__</span>
					<i className='fa fa-caret-down'></i>
				</div> */}

				{/* must login */}
				<div className='panel_section'>
					<span>ورود</span>
					<span>/</span>
					<span>
						<Link to='/signup' className='text-white text-decoration-none'>
							{' '}
							ثبت نام{' '}
						</Link>
					</span>
				</div>
			</nav>

			{is_show_content && (
				<div className='header-content'>
					<div>
						<h1>خودآموزی ، کسب تجربه ، ورود به بازار کار با تاپ لرن</h1>
						<h1>با کمترینــــ هزینه خودت حرفه ایــــ یاد بگیـر</h1>
					</div>
					<div className='input-header'>
						<input type='text' placeholder='چی میخای یاد بگیری ؟' />
						<i className='fa fa-search'></i>
					</div>
					<div className='header-status'>
						<ul>
							<li>
								<span>158,884</span>
								<div>
									<img src={Time_Image} alt='' />
									<span>دقیقه آموزش</span>
								</div>
							</li>
							<li>
								<span>106</span>
								<div>
									<img src={Teacher_Image} alt='' />
									<span>مدرس مجرب</span>
								</div>
							</li>

							<li>
								<span>131,845</span>
								<div>
									<img src={Student_Image} alt='' />
									<span>نفر دانشجو</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			)}

			{/* when you login */}
			<div className={`panel_section_body ${activeClass}`}>
				<ul>
					<li>
						<a href='#'>
							موجودی شما : <span>0 تومان</span>
						</a>
					</li>
					<li>
						<a href='#'>مشاهده حساب کاربری</a>
					</li>
					<li>
						<a href='#'>ویرایش حساب کابری</a>
					</li>
					<li>
						<a href='#'>تغییر رمز عبور</a>
					</li>
					<li>
						<a href='#'>کیف پول من</a>
					</li>
					<li>
						<a href='#'>فاکتور های من</a>
					</li>
					<li>
						<a href='#'>دوره های من</a>
					</li>
					<li>
						<a href='#'>خروج از حساب کاربری</a>
					</li>
				</ul>
			</div>

			<HeaderSmall
				closeNav={CloseNavChangeRoute}
				isopen={OpenNav}
				toggleNav={HandlerToggleNav}
			/>
		</header>
	);
};

export default Header;
