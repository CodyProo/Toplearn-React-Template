import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import SingleCourse from './views/SingleCourse';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path={'/archive/courses'} component={ArchiveCourses} />
				<Route path={'/single/course/:id'} component={SingleCourse} />
			</Switch>
		</Router>
	);
};

export default App;
