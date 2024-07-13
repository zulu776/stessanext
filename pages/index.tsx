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

export default function Home() {
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
      {/* Barra Banner principal */}
      <div className=' bg-SecondBlue flex flex-col items-center'>
        <div className='flex items-center md:flex-row flex-col'>
          <div className='md:p-0.5 p-5 '>
            <Image
              src='/IMG/Models/model1.jpg'
              alt='NOT FOUND'
              width={450}
              height={750}
            />
          </div>
          <div className='md:p-0.5 p-5'>
            <Image
              src='/IMG/Models/model2.jpg'
              alt='NOT FOUND'
              width={450}
              height={750}
            />
          </div>
          <div className='md:p-0.5 p-5'>
            <Image
              src='/IMG/Models/model3.jpg'
              alt='NOT FOUND'
              width={450}
              height={750}
            />
          </div>
        </div>
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
    </div>
  );
}
