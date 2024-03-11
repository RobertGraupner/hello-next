// sciezki sparametryzowane w next.js tworzymy w katalogu z nawiasami kwadratowymi

const PARAM_TO_WORD = {
	mezczyzna: 'Mężczyzna',
	kobieta: 'Kobieta',
	dziecko: 'Dziecko',
};

export default function DynamicRoute({ params }) {
	return <h2> {PARAM_TO_WORD[params.gender]} </h2>;
}

// zwracamy tablicę obiektów, które będą parametrami ścieżek. Potrzebne do wygenerowania statycznych ścieżek w npm run build
export async function generateStaticParams() {
	return [
		{
			gender: 'mezczyzna',
		},
		{
			gender: 'kobieta',
		},
		{
			gender: 'dziecko',
		},
	];
}
