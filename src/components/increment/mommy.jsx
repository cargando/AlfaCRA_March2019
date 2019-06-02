import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from "../context";

export  default class Mother extends React.PureComponent {

	state = {
		name: "",
		age: "",
	};

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		name: "",
	// 		age: "",
	// 	}
	// }

	handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		this.setState({
			[name]: value,
			// age: 30 -> только в том случае если изменения произошли в input name="age"
			// name: "Sofi" -> только в том случае если изменения произошли в input name="name"
		});

	};
	handleClick = (e) => {
		const data = {
			name: this.state.name,
			age: this.state.age,
		};
		console.log("new data: ", data);
		this.props.onUpdateUserInfo(data);
		return null;
	};

	handleChangeOld() {

	}

	render () {
		const divStyle = {
			border: "1px solid green",
			backgroundColor: "#AE8B55",
			padding: "10px",
		};

		return (
			<Consumer>
				{
					(props) => {
						console.log("FamilyConsumer:: ", props.data.data.userName, props)
							return (
								<div style={ divStyle }>
									<h4>This is Mommy:</h4>
									Please enter your name:
									<input
										type="text"
										name="userName"
										value={ props.data.data.userName }
										onChange={ props.onChange }
									/><br />
									Please enter your age:
									<input
										type="text"
										name="userAge"
										value={ props.data.data.userAge }
										onChange={ props.onChange }
									/>
									<br />
									<button onClick={ this.handleClick }>Update Person Data</button>
								</div>
							);
					}
				}

			</Consumer>
		);
	}
}


Mother.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
	}),
	onUpdateUserInfo: PropTypes.func,
};