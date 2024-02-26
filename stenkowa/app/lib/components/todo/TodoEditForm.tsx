'use client';
import useTodoEdit from '../../hooks/useTodoEdit';
import { TodoType } from '../../types/types';
import styles from '../../styles/details.module.scss';
import { MdDelete, MdColorLens } from 'react-icons/md';
import BackButtons from '../global/BackButtons';
import useColorChanging from '../../hooks/useColorChanging';

export default function TodoEditForm(todo: TodoType) {
	const {
		handleHeaderChange,
		handleDetailsChange,
		handleDateAddedChange,
		handleDateDeadlineChange,
		details_header,
		details,
		timeLeft,
	} = useTodoEdit(todo);
	const { color, handleColorChange } = useColorChanging();
	return (
		<form className={styles.details}>
			<div className={styles.details_header}>
				<div className={styles.input_container}>
					<input
						type='text'
						name='details_header'
						id='details_header'
						onChange={handleHeaderChange}
						value={details_header}
						autoComplete='off'
						minLength={3}
						color-changing='border-color'
						style={{ borderColor: `${todo.color}` }}
					/>
					<h4 className={styles.invisible}>{details_header}</h4>
				</div>
				<div className={styles.details_header_icons}>
					<div className={styles.input_color_container}>
						<MdColorLens
							style={{ color: `${todo.color}` }}
							color-changing='color'
						/>
						<input
							type='color'
							name='details_color'
							id='details_color'
							value={color}
							onChange={handleColorChange}
						/>
					</div>
					<MdDelete style={{ color: `${todo.color}` }} color-changing='color' />
				</div>
			</div>
			<div className={styles.textarea_container}>
				<div className={styles.details_text}>{details}</div>
				<textarea
					name='details_text'
					id='details_text'
					onChange={handleDetailsChange}
				>
					{details}
				</textarea>
			</div>

			<div className={styles.details_dates}>
				<div className={styles.details_date}>
					<p>Dodane:</p>
					<p
						style={{ borderColor: `${todo.color}` }}
						color-changing='border-color'
					>
						Deadline:
					</p>
				</div>
				<div className={styles.details_date}>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='details_date'
							id='details_date'
							defaultValue={todo.date_added.toISOString().slice(0, 16)}
							onChange={handleDateAddedChange}
						/>
					</div>
					<div className={styles.date_input_container}>
						<input
							type='datetime-local'
							name='details_date'
							id='details_date'
							defaultValue={todo.date_deadline.toISOString().slice(0, 16)}
							style={{ borderColor: `${todo.color}` }}
							color-changing='border-color'
							onChange={handleDateDeadlineChange}
						/>
					</div>
				</div>
			</div>
			<h3>
				Zostało:{' '}
				<span style={{ color: `${todo.color}` }} color-changing='color'>
					{timeLeft}
				</span>
			</h3>
			<p
				className={styles.details_edit_info}
				style={{ borderColor: `${todo.color}` }}
				color-changing='border-color'
			>
				Kliknij element, aby zmienić
			</p>
			<BackButtons href={`/todo/${todo.id}`} color={color} />
		</form>
	);
}
