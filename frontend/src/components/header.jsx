import Logo from './logo';
import SearchBar from './searchBar';
import AuthLinks from './authLinks';
import MainNav from './mainNave';
import CartIcon from './cartIcon'; 

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-black p-4 md:p-6 flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8">
        <div className="shrink-0"><Logo /></div>
        <div className="flex-1 w-full px-0 lg:px-8">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <AuthLinks />
          <CartIcon />
        </div>
      </div>
      <MainNav />
    </header>
  );
};

export default Header;