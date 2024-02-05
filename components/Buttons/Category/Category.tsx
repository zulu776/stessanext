import Image from 'next/image';

function Category() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Image
        src='/IMG/Buttons/category.png'
        alt='NOT FOUND'
        width={40}
        height={40}
      />
    </div>
  );
}

export default Category;
