import React from 'react';
import DeafImage from '../../assets/images/Deaf.png';
import CaretDown from '../../assets/images/down-arrow.png';

const Course_Title = () => {
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
		<div className='course-title-container'>
			<ul className='course-title'>
				{Sections.map((element) => (
					<li
						className='title'
						key={element.text}
						onMouseEnter={() => onHoverEvent(element.text, true)}
						onMouseLeave={() => onHoverEvent(element.text, false)}>
						<a
							href='#'
							className={`${element.isopen ? 'text-blue' : ''} ${
								element.data.length == 0 ? 'ml-4' : ''
							}`}>
							{element.text}
						</a>
						{element.data.length > 0 && <img src={CaretDown} />}
						<ul
							className={`dropdown-section ${
								element.isopen ? 'panel_section_body_active' : ''
							}`}>
							{element.data.map((data) => (
								<li key={data}>
									<a href='#'>{data}</a>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
			<div className='spc-section'>
				<img src={DeafImage} />
				<span>مخصوص ناشنوایان</span>
			</div>
		</div>
	);
};

export default Course_Title;
