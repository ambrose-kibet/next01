import Image from 'next/image';
import Link from 'next/link';

const DrinksComponent = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3">
      {drinks.map((drink) => (
        <li key={drink.idDrink} className="w-fit ">
          <Link href={`/drinks/${drink.idDrink}`}>
            <div className="relative h-56  w-56">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="p-4 text-lg">{drink.strDrink}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksComponent;
