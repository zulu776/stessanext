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

export default function Home() {
  const [searchState, setSearchState] = useState();
  const handleSearch = (searchState) => {
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
      {/* Barra Banner principal */}
      <div className='bg-SecondBlue flex flex-col items-center fade-animation'>
        <Image src='/IMG/Banner/remove_1.png' alt='NOT FOUND' width={400} height={400} />
        <p className='banner font-bold'>UN NUEVO AÑO</p>
        <p className='banner'>UN NUEVO COMIENZO</p>
      </div>
      <div className='md:grid md:grid-cols-2 justify-center content-center'>
        <div className='w-full flex justify-center'>
          <Image
            src='/IMG/Banner/remove_2.png'
            alt='NOT FOUND'
            width={400}
            height={400}
            // className='w-3/6'
          />
        </div>
        <div className='w-full flex justify-center '>
          <Image
            src='/IMG/Banner/remove_3.png'
            alt='NOT FOUND'
            width={400}
            height={400}
            // className=' w-3/6 '
          />
        </div>
      </div>
      {/* Sidebar  */}
      <div>
        <SidebarPrimary isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      </div>
      {/* Barra inferior fija */}
      <div className='fixed  w-full h-[10%] bg-white bottom-0 grid grid-cols-5 md:hidden'>
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
