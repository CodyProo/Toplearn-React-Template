import React from 'react';
import Home from './views/Home';
import ArchiveCourses from './views/ArchiveCourses';
import SingleCourse from './views/SingleCourse';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = () => {
	return (
		<Router>
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} timeout={2000} classNames='fade'>
							<Switch location={location}>
								<Route path='/' exact component={Home} />
								<Route path={'/archive/courses'} component={ArchiveCourses} />
								<Route path={'/single/course/:id'} component={SingleCourse} />
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}></Route>
		</Router>
	);
};

export default App;
