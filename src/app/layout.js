import Head from 'next/head';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// to pójdzie do heada
export const metadata = {
	title: 'Hello next',
	description: 'First next.js app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='pl'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
