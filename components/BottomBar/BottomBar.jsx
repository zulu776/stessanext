import React, { useState } from 'react';
import DropMenu from '../Dropdown/DropMenu';
function BottomBar(params) {
  const [list, setList] = useState('');

  const handleChange = event => {
    setList(event.target.value);
  };
  return (
    <div className='w-full h-full fade-animation flex justify-center '>
      <div className='w-full flex justify-between p-5 flex-col'>
        <div>
          <DropMenu />
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
