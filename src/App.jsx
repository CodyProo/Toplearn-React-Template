import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import SingleCourse from './views/SingleCourse';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Switch location={location}>
				<Route path='/' exact component={Home} />
				<Route path={'/archive/courses'} component={ArchiveCourses} />
				<Route path={'/single/course/:id'} component={SingleCourse} />
			</Switch>
		</AnimatePresence>
	);
};

export default App;
