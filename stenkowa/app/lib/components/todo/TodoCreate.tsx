'use client';
import { useFormState } from 'react-dom';
import { createTodo } from '../../functions/actions';
import useColorChanging from '../../hooks/useColorChanging';
import styles from '../../styles/create.module.scss';
import BackButtons from '../global/BackButtons';
export default function TodoCreate() {
	const { color, handleColorChange } = useColorChanging('');
	const initialState = { message: '' };
	const [state, dispatch] = useFormState(createTodo, initialState);
	console.log('Date ' + new Date());
	console.log('Date start');
	console.log(new Date());
	console.log('Date end');
	console.log('Date now ' + new Date(Date.now()));
	console.log('Date utc ' + new Date().toUTCString());
	console.log('Date ISO ' + new Date().toISOString());
	console.log('Date to string ' + new Date().toString());
	return (
		<div className={styles.container}>
			<h3 color-changing='border-color'>Dodaj nowe todo</h3>
			<form action={dispatch}>
				<div className={styles.input_container}>
					<label htmlFor='new_todo_name' color-changing='border-color'>
						Nazwa:
					</label>
					<input type='text' name='new_todo_name' id='new_todo_name' required />
				</div>
				<div className={styles.input_container}>
					<label htmlFor='new_todo_description' color-changing='border-color'>
						Opis:
					</label>
					<textarea name='new_todo_description' id='new_todo_description' />
				</div>
				<div className={styles.date_container}>
					<label htmlFor='new_todo_added' color-changing='border-color'>
						Dodano:
					</label>
					<input
						type='datetime-local'
						name='new_todo_added'
						id='new_todo_added'
						defaultValue={new Date(Date.now()).toISOString().slice(0, 16)}
						required
						readOnly
					/>
				</div>
				<div className={styles.date_container}>
					<label htmlFor='new_todo_deadline' color-changing='border-color'>
						Deadline:
					</label>
					<input
						type='datetime-local'
						name='new_todo_deadline'
						id='new_todo_deadline'
						defaultValue={new Date().toISOString().slice(0, 16)}
						required
						step={'any'}
					/>
				</div>
				<div className={styles.color_container}>
					<label htmlFor='new_todo_color' color-changing='border-color'>
						Kolor:
					</label>
					<input
						type='color'
						name='new_todo_color'
						id='new_todo_color'
						defaultValue='#0050b8'
						onChange={handleColorChange}
						required
					/>
				</div>
				<BackButtons href='/todo' color={color} />
			</form>
		</div>
	);
}
