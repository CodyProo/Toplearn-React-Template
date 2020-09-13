import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import SingleCourse from './views/SingleCourse';
import Signup from './views/Signup';
import Login from './views/Login';
import ArchiveTeachers from './views/ArchiveTeacher';
import SingleTeacher from './views/SingleTeacher';

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Switch location={location}>
				<Route path='/' exact component={Home} />
				<Route path={'/archive/courses'} component={ArchiveCourses} />
				<Route path={'/archive/teachers'} component={ArchiveTeachers} />
				<Route path={'/single/course/:id'} component={SingleCourse} />
				<Route path={'/single/teacher/:id'} component={SingleTeacher} />
				<Route path={'/signup'} component={Signup} />
				<Route path={'/login'} component={Login} />
			</Switch>
		</AnimatePresence>
	);
};

export default App;
