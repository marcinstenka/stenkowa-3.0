import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Background from './lib/components/background/Background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stenkowa Strona',
	description: 'Your starting, fully customizable page.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className={inter.className}>
				<Background />
				{children}
			</body>
		</html>
	);
}
