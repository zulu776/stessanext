import Image from 'next/image';

function House() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Image
        src='/IMG/Buttons/house.png'
        alt='NOT FOUND'
        width={30}
        height={30}
      />
    </div>
  );
}

export default House;
