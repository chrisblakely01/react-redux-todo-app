import React from 'react';
import TodoItem from './TodoItem';

import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

import s from "./TodoList.module.scss"

const TodoList = () => {

	const dispatch = useDispatch();

	const todos = useSelector(
		(state) => state.todos
	);

	React.useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch]);



	return (
		<ul className={s.list__group}>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};		

export default TodoList;
