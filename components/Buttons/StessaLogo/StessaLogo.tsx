import Image from 'next/image';
import Link from 'next/link';

function StessaLogo() {
  return (
    <div className='flex justify-center w-full'>
      <Link href={'/'}>
        <Image src='/IMG/Buttons/StessaLogo.PNG' alt='NOT FOUND' width={180} height={30} />
      </Link>
    </div>
  );
}

export default StessaLogo;
