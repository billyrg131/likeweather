import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import WeatherUpdate from './Components/update-comp';
import NewsList from './Components/newsList';
import NavbarTwo from './Components/navbar-comp';
import Form from './Components/form';
function App() {
	return (
		<div className="App">
			<Router>
				<NavbarTwo />
				<Routes>
					<Route path="/likeweather/" element={<Form />} />
					<Route path="/likeweather/update" element={<WeatherUpdate />} />
					<Route path="/likeweather/news" element={<NewsList />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
