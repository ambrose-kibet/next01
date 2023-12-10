import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-center capitalize">About Page</h1>
      <Link href="/" className="text-center text-2xl mr-2">
        Home
      </Link>
      <Link href="/about/info" className="text-center text-2xl">
        Info
      </Link>
    </div>
  );
};
export default AboutPage;
