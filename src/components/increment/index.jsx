import React from 'react';
import PropTypes from 'prop-types';
import GrandMother from "./granny";

// export function Incrementer(props) {
// const { onClick } = props;

function Incrementer({ onUpdateUserInfo, onClick, names, values = [], person = null }) {
	const personInfo = `Here is the person info: ${ person.name }, ${ person.age }`;
	return (
		<React.Fragment>
			<p>{ personInfo }</p>
			<button name={ names[0] } onClick={ onClick }>{ values[0] || "Increment" }</button>
			<button name={ names[1] } onClick={ onClick }>{ values[1] || "Decrement" } </button>
			<hr />
			<GrandMother
				person={ person }
				onUpdateUserInfo={ onUpdateUserInfo }
			/>
		</React.Fragment>
	)
}

export default React.memo(Incrementer);

Incrementer.propTypes = {
	onClick: PropTypes.func.isRequired, // обработчик события - клик по кнопке
	names: PropTypes.array.isRequired, // массив с именами кнопок
	values: PropTypes.array, // массив с текстами для кнопок
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
	}),
	onUpdateUserInfo: PropTypes.func,
};