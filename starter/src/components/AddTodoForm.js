import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../redux/todoSlice';

import s from "./AddTodoForm.module.scss"

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
		dispatch(
			addTodoAsync({
				title: value,
			})
		);
	};

	return (
		<form onSubmit={onSubmit} className={s.form__add}>
			<input
				type='text'
				className={s.form__input}
				placeholder='Добавить дело...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className={s.btn}>
				Добавить
			</button>
		</form>
	);
};

export default AddTodoForm;
