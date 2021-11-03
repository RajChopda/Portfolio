import './App.css';
import { Route, Redirect } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
	return (
		<div>
			<Route exact path="/" render={
				() => {
					return (
						<Redirect to='/AboutMe' />
					)
				}
			}
			/>
			<Route exact path="/AboutMe" component={AboutMe} />
			<Route exact path="/Skills" component={Skills} />
			<Route exact path="/Projects" component={Projects} />
		</div>
	);
}

export default App;