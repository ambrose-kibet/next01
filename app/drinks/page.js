import DrinksComponent from '../components/DrinksComponent';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
const getDrinks = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch drinks: status ${response.status}`);
  }
  const data = await response.json();
  return data.drinks;
};
const DrinksPage = async () => {
  const drinks = await getDrinks();
  return (
    <div className="w-full grid">
      <h1 className="text-center capitalize text-4xl ">Cocktails</h1>
      <div className="mx-auto bg-primary h-1 w-24 rounded-sm mb-8"></div>
      <DrinksComponent drinks={drinks} />
    </div>
  );
};
export default DrinksPage;
