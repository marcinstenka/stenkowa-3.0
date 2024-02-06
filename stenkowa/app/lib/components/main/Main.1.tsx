import BookmarksContainer from '../bookmarks/BookmarksContainer';
import Options from '../global/Options';
import StenkowaTitle from '../global/StenkowaTitle';
import StorageContainer from '../storage/StorageContainer';
import TodoContainer from '../todo/TodoContainer';
import styles from './main.module.scss';
import { MainProps } from './Main';

export default function Main({ page }: MainProps) {
	return (
		<main className={styles.main}>
			<Options />
			<div className={styles.container}>
				<StenkowaTitle />
				{page == 'todo' && <TodoContainer />}
				{page == 'storage' && <StorageContainer />}
				{page == 'bookmarks' && <BookmarksContainer />}
				{page == 'home' && <homeContainer />}
			</div>
		</main>
	);
}
