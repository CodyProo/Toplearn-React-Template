import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path={'/archive/courses'} component={ArchiveCourses} />
			</Switch>
		</Router>
	);
};

export default App;
