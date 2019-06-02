import React from 'react';
import logo from "../logo.svg";

export function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={ logo } className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export const  Mini = () => {
	return (
		<div className="App">
			<h4>This is Mini</h4>
		</div>
	);
};

export default App;
