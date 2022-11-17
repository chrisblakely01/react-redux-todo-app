import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync} from '../redux/todoSlice';

import s from "./TodoItem.module.scss"

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({
			id: id, 
			completed: !completed
		}));
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({
			id: id, 
		}));
	}

	return (
		<li className={s.item}>
			
				<div className={s.item__content}>
					<input type='checkbox' className={s.check} checked={completed}
					onChange={handleCompleteClick}></input>
					<div className={s.title}>{title}</div>

					
				</div>
				<button className={s.btn} onClick={handleDeleteClick} >Delete</button>
			
		</li>
	);
};

export default TodoItem;
