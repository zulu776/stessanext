import Image from 'next/image';

function Cart() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center relative'>
      <Image src='/IMG/Buttons/market.png' alt='NOT FOUND' width={40} height={40} />
      <div className='bg-black text-white absolute w-6 h-6 rounded-full texte-center top-1 right-2 md:left-40'>
        <p className='text-center '>0</p>
      </div>
    </div>
  );
}

export default Cart;
