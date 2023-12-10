import Image from 'next/image';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch drink: status ${response.status}`);
  }
  const data = await response.json();

  return data.drinks;
};
const SingleDrinkPage = async ({ params }) => {
  const drink = await getSingleDrink(params.id);
  const title = drink[0]?.strDrink;
  const image = drink[0]?.strDrinkThumb;

  return (
    <div className="">
      <Image
        src={image}
        width={300}
        height={300}
        className="w-48 h-56 mx-auto rounded-lg mb-8"
        priority
      />
      <h1 className="text-center text-xl">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;
