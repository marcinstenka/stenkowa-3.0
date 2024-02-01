import { BookmarkType } from '../../types/types';
import Bookmark from './Bookmark';
import styles from './bookmarks.module.scss';
import { SiNetflix } from 'react-icons/si';
export default function BookmarksContainer() {
	const bookmarks: BookmarkType[] = [
		{
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			text: 'Netflix',
			color: 'var(--primary)',
		},
		{
			link: 'https://www.facebook.com',
			icon: 'FaFacebookF',
			text: 'Facebook',
			color: 'var(--primary)',
		},
		{
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			text: 'Netflix',
			color: 'var(--primary)',
		},
		{
			link: 'https://www.netflix.com/browse',
			icon: 'SiNetflix',
			text: 'Netflix',
			color: 'var(--primary)',
		},
	];
	return (
		<div className={styles.container}>
			{bookmarks.map((bookmark, index) => {
				return <Bookmark bookmark={bookmark} />;
			})}
		</div>
	);
}
