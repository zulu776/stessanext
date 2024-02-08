import Image from 'next/image';

function SidebarM() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center md:hidden'>
      <Image src='/IMG/Buttons/menu.png' alt='NOT FOUND' width={30} height={30} />
    </div>
  );
}

export default SidebarM;
