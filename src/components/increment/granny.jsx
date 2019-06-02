import React from 'react';
import PropTypes from 'prop-types';
import Mother from "./mommy";

function GrandMother(props) {

	return (
		<div style={ {
			backgroundColor: "#D9FFF8",
			padding: "10px",
		} }>
			<h4>This is GrandMother:</h4>
			<h5>Props: {props.person.name }, {props.person.age }</h5>
			<Mother
				person={ props.person }
				onUpdateUserInfo={ props.onUpdateUserInfo }
			/>

		</div>
	);

}

GrandMother.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
	}),
	onUpdateUserInfo: PropTypes.func,
};

export default GrandMother;