import React from 'react';

function ProgressBar({ pagesStep, page }) {
  const progress = Math.trunc((page / pagesStep.length) * 100);
  return (
    <div>
      <div className='w-fit flex gap-2 items-center'>
        <h4 className='text-base-gray'>{progress}%</h4>
        <p className='text-base-gray'>completado</p>
      </div>
      <div className='progress_bar'>
        <div
          className='bg-yellow-400 h-full '
          style={{ width: page === 1 ? '3%' : `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
