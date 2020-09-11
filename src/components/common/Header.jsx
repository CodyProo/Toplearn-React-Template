import React from 'react';

import Toplearn_Logo from '../../assets/images/logo/toplearn-logo.svg';
import Panel_Section_Image from '../../assets/images/panel-navbar.png';
import Student_Image from '../../assets/images/status/student.svg';
import Teacher_Image from '../../assets/images/status/teacher.svg';
import Time_Image from '../../assets/images/status/time.svg';
import HeaderSmall from './Header-sm';

const Header = () => {
	const [OpenSection, HandleSection] = React.useState(false);
	const Handler = () => HandleSection((prev) => !prev);
	const activeClass = OpenSection ? 'panel_section_body_active' : '';
	const [OpenNav, ToggleNav] = React.useState(false);
	const HandlerToggleNav = () => ToggleNav((prev) => !prev);

	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href='#'>
							<img src={Toplearn_Logo} alt='' />
						</a>
					</li>
					<li>
						<a href='#'>آخرین دوره ها</a>
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
				<i onClick={HandlerToggleNav} className='fa fa-bars'></i>
				<div className='panel_section' onClick={Handler}>
					<img src={Panel_Section_Image} alt='' />
					<span>Mohammad_1382__</span>
					<i className='fa fa-caret-down'></i>
				</div>
			</nav>

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

			<HeaderSmall isopen={OpenNav} toggleNav={HandlerToggleNav} />
		</header>
	);
};

export default Header;