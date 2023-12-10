import Link from 'next/link';

const layout = ({ children }) => {
  return (
    <div>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/drinks'}>Drinks</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
};
export default layout;
