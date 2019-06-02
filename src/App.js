import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import echo from './lib/functions'
import * as All from './components/app_func';
// import App, { Mini } from './components/app_func';
import './App.css';
import Incrementer from "./components/increment";
import { Provider } from './components/context';

// class App2 extends Component - тоже самое что и ниже



class AppClass extends React.Component {

	static propTypes = {
		title: PropTypes.string,
	};

	static defaultProps = {
		title: "Текст по умолчанию для title",
	};

	constructor(props) {
		super(props);

		this.state = {
			data: {
				headerText: 'This is Class based component0',
				userName: "Sofi",
				userAge: 20,
				counter: 0,

			}
		};

	}

	handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;
		// this.setState({headerText: value}); // 1й вариант обновления стейта
		// this.setState({headerText: value}, () => {....}); // 2й вариант обновления стейта + колбэк, который срабатывает после изменения стейта

		/* 3й вариант (dddd) => {...}
		this.setState((prevState) => {
			return {
				headerText: (prevState.headerText + value),
			}
		});*/
		// 4й вариант обновления стейта
		this.setState((prevState, prevProps) => {
				return {
					data: {
						...prevState.data,
						[name]: value,
					}
				}
			}, () => {
			echo("Test");
			console.log("Стейт поменялся, вот его новые значения: ", this.state)
		});

		// console.log(name, value);
	};

	handleCounterClick = (e) => {
			const { target } = e;
			const { name } = target;

			let res = this.state.data.counter;
			if (name === "inc") {
				res = res + 1;
			} else {
				res -= 1;
			}
			this.setState((prevState) => {
				return {
					data: {
						...prevState.data,
						counter: res,
					}
				}
			})

	}

	handleUpdateUserInfo = (data) => {
		console.log("handleUpdateUserInfo:: ", data);
		this.setState((prevState) => {
			return {
				data: {
					...prevState.data,
					userName: data.name,
					userAge: parseInt(data.age ? data.age : prevState.data.userAge, 10),
				}
			}
		});
	};

	render() {
		const person = {
			name: this.state.data.userName,
			age: this.state.data.userAge,
		};

		const providerData = {
			data: this.state,
			onChange: this.handleChange,
		};

		// <FamilyContext.Provider value={ this.state }>
		return (
			<Provider value={ providerData }>
				<div className="App">
					<header className="App-header">
						<h1>{ this.state.data.headerText }</h1>
						<h3>This is title: {this.props.title }</h3>
						<h4>{ this.state.data.counter }</h4>
						<All.Mini />
						<img src={ logo } className="App-logo" alt="logo" />
						<input onChange={ this.handleChange } type="text" name="headerText" value={ this.state.data.headerText } />
						<br />
						<input onChange={ this.handleChange } type="text" name="userName" value={ this.state.data.userName } />
						<br />
						<input
							onChange={ this.handleChange }
							type="text"
							name="userAge"
							value={ this.state.data.userAge }
						/>
						<br />
						<div>
						<Incrementer
							onClick={ this.handleCounterClick }
							names={ ["inc", "dec"] }
							person={ person }
							onUpdateUserInfo={ this.handleUpdateUserInfo }
						/>
						</div>
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
					<All.App />
				</div>
			</Provider>);
	}

}
// первый вариант, такой же как у функциональных компонентов
// AppClass.propTypes = {
// 	title: PropTypes.string,
// }


export default AppClass;
