import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 px-8 py-5'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        <Logo />

        <nav className='lg:flex lg:flex-row lg:items-center lg:space-x-6'>
          <Navigation />
        </nav>

        <nav className='fixed inset-0 bg-primary-800 text-white lg:hidden hidden'>
          <button className='p-4'>
          </button>
          <div className='flex flex-col items-center'>
            <Navigation />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
