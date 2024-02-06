import type { Metadata } from 'next';
import Main from '../lib/components/main/Main.1';
import Background from '../lib/components/background/Background';

const page = 'Storage';

export const metadata: Metadata = {
	title: `${page} | Stenkowa`,
};

export default function Storage() {
	return (
		<>
			<Background />
			<Main page={`${page.toLowerCase()}`} />
		</>
	);
}
