import React from 'react';
import { Collapse } from 'reactstrap';
import Toplearn_Logo from '../../assets/images/logo/toplearn-logo.svg';

const HeaderSmall = ({ isopen, toggleNav }) => {
	const [Sections, ChangeSection] = React.useState([
		{
			text: 'برنامه نویسی موبایل',
			data: [
				'Xamrine (زامارین)',
				'Kotlin',
				'Ionic',
				'Android',
				'Cordova',
				'PWA',
				'Dart',
				'Flutter',
			],
			isopen: false,
		},
		{
			text: 'برنامه نویسی وب',
			data: [
				'ASP.NET Webforms',
				'ASP.NET MVC',
				'PHP',
				'Asp.net core',
				'Wordpress',
				'WCF',
				'Blazor',
				'Ruby',
				'GraphQL',
				'Web GIS',
			],
			isopen: false,
		},
		{
			text: 'طراحی سایت',
			data: [
				'React',
				'Vue',
				'Angular',
				'Sass',
				'Composer',
				'Bootstrap',
				'Javascript',
				'VueJS',
				'Electron',
				'Less',
				'Kendo UI',
				'FlexBOX',
				'Typescript',
				'طراحی سایت',
			],
			isopen: false,
		},
		{
			text: 'بانک های اطلاعاتی',
			data: [
				'SQL Server',
				'MySQL',
				'NoSQL',
				'Redis',
				'Oracel',
				'Neo4j',
				'PostgressSQL',
			],
			isopen: false,
		},
		{
			text: 'برنامه نویسی تحت ویندوز',
			data: [
				'Csharp',
				'Java',
				'Python',
				'C',
				'Matlab',
				'Visual Basic',
				'Nodejs',
				'WPF',
				'مهندسی نرم افزار',
				'بازی سازی',
				'هوش مصنوعی',
				'UWC',
			],
			isopen: false,
		},
		{
			text: 'سئو',
			data: [],
			isopen: false,
		},
		{
			text: 'سیستم عامل',
			data: [
				'linux',
				'windows',
				'macos',
				'kali linux',
				'docker',
				'مدیریت پروژه',
				'برنامه های کاربردی',
				'Excel',
				'تولید محتوا',
				'Network',
				'Security',
			],
			isopen: false,
		},
		{
			text: 'امینت',
			data: [],
			isopen: false,
		},
		{
			text: 'گرافیک',
			data: [
				'Photoshop',
				'Premier',
				'Adobe Dreamweaver',
				'Corel Draw',
				'Adobe Illustrator',
				'Adobe XD',
				'Figma',
				'Adobe Indesign',
				'Sketch',
				'XD Workflow',
				'3D Max',
				'انیمیشن سازی',
				'موشن گرافیک',
				'Cinema 4D',
			],
			isopen: false,
		},
	]);

	const onHoverEvent = (args, boolData) => {
		const data = [...Sections];
		const index = data.findIndex((element) => element.text == args);
		data[index].isopen = boolData;
		ChangeSection(data);
	};

	return (
		<div
			className={`header-small-container ${
				isopen ? 'panel_section_body_active open-navbar-sm' : ''
			}`}>
			<div className='header-small'>
				<i className='fa fa-close' onClick={toggleNav}></i>

				<div className='text-center'>
					<img src={Toplearn_Logo} />
				</div>
				<div className='header-small-input'>
					<input type='text' placeholder='جستوجو کنید' />
					<i className='fa fa-search'></i>
				</div>
				<ul>
					<li>
						<a href='#'>آموزش های تاپ لرن</a>
					</li>

					{Sections.map((courses_data) => (
						<li
							className={courses_data.isopen ? 'put-start' : ''}
							onClick={() =>
								onHoverEvent(courses_data.text, !courses_data.isopen)
							}
							key={courses_data.text}>
							<div className='d-flex flex-column'>
								<div>
									<a href='#'>{courses_data.text}</a>
									{courses_data.data.length > 0 && (
										<a href='#' className='mr-auto'>
											<i className='fa fa-plus'></i>
										</a>
									)}
								</div>
								<Collapse isOpen={courses_data.isopen}>
									<div className='menu'>
										{courses_data.data.map((ele) => (
											<a href='#' key={ele}>
												{ele}
											</a>
										))}
									</div>
								</Collapse>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HeaderSmall;
