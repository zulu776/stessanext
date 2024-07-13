import Image from 'next/image';
import SidebarM from './../components/Buttons/SidebarM/SidebarM';
import Search from './../components/Buttons/Search/Search';
import StessaLogo from './../components/Buttons/StessaLogo/StessaLogo';
import Profile from './../components/Buttons/Profile/Profile';
import Cart from './../components/Buttons/Cart/Cart';
import RotatingText from './../components/RotatingText/RotatingText';
import House from './../components/Buttons/House/House';
import Category from './../components/Buttons/Category/Category';
import SearchBar from '@components/search/SearchBar';
import { useState } from 'react';
import SidebarPrimary from '@components/Buttons/SidebarPrimary/SidebarPrimary';
import UnderSidebar from '@components/Buttons/UnderSidebar/UnderSidebar';
import BottomBar from '@components/BottomBar/BottomBar';

export default function Home({ children }) {
  const [searchState, setSearchState] = useState();
  const handleSearch = searchState => {
    console.log(searchState);
  };
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='h-100vh'>
      {/* Barra de información superior */}
      <div className='flex justify-center fade-animation w-100vh h-full'>
        <RotatingText />
      </div>
      {/* Barra utilities search & etc */}
      <div className='m-10'>
        <div className='grid grid-cols-6'>
          <div className='mobile-button md:hidden'>
            <SidebarM />
          </div>
          <div className='mobile-button md:hidden'>
            <Search />
          </div>
          <div className='mobile-button col-span-2'>
            <StessaLogo />
          </div>
          <div className='hidden md:block col-span-2'>
            <SearchBar
              searchState={searchState}
              setSearchState={setSearchState}
              onSearch={handleSearch}
            />
          </div>
          <div className='mobile-button'>
            <Profile toggleSidebar={toggleSidebar} />
          </div>
          <div className='mobile-button'>
            <Cart />
          </div>
        </div>
        <div className='md:flex justify-center hidden'>
          <UnderSidebar />
        </div>
      </div>
      {/* Barra Banner principal */}
      <div>{children}</div>
      {/* Sidebar  */}
      <div>
        <SidebarPrimary
          isOpen={isSidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
      </div>

      <div className='w-full h-full md:mb-0 mb-20'>
        <BottomBar />
      </div>

      {/* Barra inferior fija */}
      <div className='fixed w-full h-[10%] bg-white bottom-0 grid grid-cols-5 md:hidden'>
        <div className='bottom-bar '>
          <House />
          Stessa
        </div>
        <div className='bottom-bar'>
          <Search />
          Buscar
        </div>
        <div className='bottom-bar'>
          <Category />
          Catálogo
        </div>
        <div className='bottom-bar'>
          <Profile toggleSidebar={toggleSidebar} />
          Cuenta
        </div>
        <div className='bottom-bar'>
          <Cart />
          Carrito
        </div>
      </div>
    </div>
  );
}
