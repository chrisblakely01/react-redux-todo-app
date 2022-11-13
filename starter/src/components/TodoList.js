import React from 'react';
import TodoItem from './TodoItem';

import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/todoSlice';

const TodoList = () => {

	const dispatch = useDispatch();

	const todos = useSelector(
		(state) => state.todos
	);

	React.useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch]);



	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};		

export default TodoList;
