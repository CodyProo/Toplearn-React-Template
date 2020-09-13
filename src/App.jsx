import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import SingleCourse from './views/SingleCourse';
import { Switch, Route, useLocation } from 'react-router-dom';
import Signup from './views/Signup';
import { AnimatePresence } from 'framer-motion';
import Login from './views/Login';

const App = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Switch location={location}>
				<Route path='/' exact component={Home} />
				<Route path={'/archive/courses'} component={ArchiveCourses} />
				<Route path={'/single/course/:id'} component={SingleCourse} />
				<Route path={'/signup'} component={Signup} />
				<Route path={'/login'} component={Login} />
			</Switch>
		</AnimatePresence>
	);
};

export default App;
