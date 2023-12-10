import Link from 'next/link';

const Info = () => {
  return (
    <div>
      <h1 className="text-center capitalize">Info Page</h1>
      <p className="text-center text-2xl">This is the Info page</p>
      <Link href="/" className="text-center text-2xl mr-2">
        Home
      </Link>
      <Link href="/about" className="text-center text-2xl">
        About
      </Link>
    </div>
  );
};
export default Info;
