import React from 'react';
import { Card, CardBody, Col, Collapse } from 'reactstrap';

const ArchiveCourseSections = ({ Sections }) => {
	const mustOpenFirst = window.innerWidth > 1000;

	const [PriceSec, ChangePriceSec] = React.useState(mustOpenFirst);
	const HandlePriceSec = () => ChangePriceSec((prev) => !prev);

	const [TitleSec, ChangeTitleSec] = React.useState(mustOpenFirst);
	const HandleTitleSec = () => ChangeTitleSec((prev) => !prev);

	return (
		<Col className='options-select' xl={3} lg={4} sm={12}>
			<Card className='selectPrice'>
				<CardBody>
					<h1 className={!PriceSec ? 'pb-2' : ''} onClick={HandlePriceSec}>
						فلیتر براساس قیمت
					</h1>
					{PriceSec && <hr />}
					<Collapse isOpen={PriceSec}>
						<ul>
							<li className='active'>
								<a href='#'>همه</a>
							</li>
							<li>
								<a href='#'>خریدنی</a>
							</li>
							<li>
								<a href='#'>رایگان</a>
							</li>
						</ul>
					</Collapse>
				</CardBody>
			</Card>
			<Card className='my-4 selectTitle'>
				<CardBody>
					<h1 onClick={HandleTitleSec} className={!TitleSec ? 'pb-2' : ''}>
						فیلتر براساس دسته بندی
					</h1>
					{TitleSec && <hr />}
					<Collapse isOpen={TitleSec}>
						<ul>
							{Sections.map((section_data) => (
								<li key={section_data.text}>
									<input type='checkbox' />
									<a className='font-weight-bold' href='#'>
										{section_data.text}
									</a>
									<ul className='mr-4'>
										{section_data.data.map((data_) => (
											<li key={data_}>
												<input type='checkbox' />
												<a href='#'>{data_}</a>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</Collapse>
				</CardBody>
			</Card>
		</Col>
	);
};

export default ArchiveCourseSections;
