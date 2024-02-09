import Image from 'next/image';
import Link from 'next/link';

function Profile({ toggleSidebar }) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <button onClick={toggleSidebar}>
        <Image src='/IMG/Buttons/user.png' alt='NOT FOUND' width={30} height={30} />
      </button>
    </div>
  );
}

export default Profile;
