import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-full flex flex-col justify-center mt-8">
      <h1 className="text-7xl text-center capitalize mb-4">Nextjs tutorial</h1>
      <Link href="/clients" className="btn btn-accent w-fit mx-auto">
        Get started
      </Link>
    </div>
  );
};
export default HomePage;
