import React from 'react';
import ReactLoading from 'react-loading';

function MiniLoading() {
  return (
    <ReactLoading
      className='mx-auto'
      type='bars'
      color='#112430'
      height='20%'
      width='20%'
    />
  );
}

function MiniLoadingBubbles() {
  return <ReactLoading type='spin' color='#112430' height='10%' width='10%' />;
}

export { MiniLoadingBubbles };

export default MiniLoading;
