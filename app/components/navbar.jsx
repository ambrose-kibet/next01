import Link from 'next/link';

const Navbar = () => {
  const links = [
    { href: '/about', label: 'About' },
    { href: '/drinks', label: 'Drinks' },
    { href: '/clients', label: 'Clients' },
    { href: '/query', label: 'Query' },
    { href: '/tasks', label: 'Tasks' },
  ];
  return (
    <nav className="navbar bg-base-200">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-xl">
          Home
        </Link>
      </div>

      <ul className="menu menu-horizontal px-1">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="capitalize text-xl">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
