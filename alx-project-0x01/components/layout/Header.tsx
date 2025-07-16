import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/users" className="hover:underline">
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
