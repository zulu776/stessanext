import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userPhoteDefault from 'public/img/user/userPhoteDefault.png';

export default function PictureUpload({
  Imagen,
  setFile = null,
  setDeletePicture = () => {},
  Texto,
  name = '',
  initUrl = '',
  alt,
  lastImagen,
}) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(
    Imagen || '/img/default.jpg'
  );
  const [newImage, setNewImage] = useState(false);
  const [clicked, setClicked] = useState(false);
  const fileUpload = useRef(null);
  // const [initUrlCopy, setInitUrlCopy] = useState(initUrl);
  // const [selectedFile, setSelectedFile] = useState('');

  const handleImageChange = e => {
    e.preventDefault();
    if (e.target?.files[0]?.size < 2000000) {
      if (setDeletePicture) {
        setDeletePicture();
      }
      const reader = new FileReader();
      const newFile = e.target.files[0];
      reader.onloadend = () => {
        if (setFile) {
          setFile(newFile);
        }
        setImagePreviewUrl(reader.result as string);
        // setImagePreviewUrl(newFile.name);
        // setSelectedFile(e.target.files);
      };
      if (newFile) {
        reader.readAsDataURL(newFile);
      }
    } else {
      toast.warning('la imagen exceden 2000 pixeles', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  };

  const handleNewImage = e => {
    if (e.target?.files[0]?.size < 2000000) {
      setImagePreviewUrl(e.target.value);
      // setInitUrlCopy(e.target.value);
    }
  };

  useEffect(() => {
    if (clicked && newImage) {
      fileUpload.current.click();
      setClicked(false);
    }
    if (clicked && !newImage) {
      setNewImage(true);
    }
  }, [clicked, newImage]);

  useEffect(() => {
    if (Imagen) {
      setImagePreviewUrl(Imagen);
    }
  }, [Imagen]);

  return (
    <section className='rounded-xl '>
      <div className='container px-1 py-2 mx-auto  rounded-md'>
        <div className='items-center lg:flex  rounded-md'>
          {!newImage ? (
            <input
              hidden
              type='text'
              name={`FotoFile-${name}`}
              defaultValue={initUrl ?? imagePreviewUrl}
              onChange={e => {
                handleNewImage(e);
              }}
            />
          ) : (
            <input
              ref={fileUpload}
              type='file'
              name={`FotoFile-${name}`}
              // value={selectedFile}
              onChange={e => {
                handleImageChange(e);
              }}
              className='hidden'
              accept='image/x-png,image/gif,image/jpeg'
            />
          )}

          {imagePreviewUrl === '/img/default.jpg' ? (
            <div className='flex flex-col md:flex-row w-full rounded-md'>
              <div className=' lg:mt-0 lg:w-1/3 p-3 bg-gray-300 w-full rounded-md'>
                <div className='flex items-center justify-center md:justify-center rounded-md'>
                  <button
                    onClick={() => setClicked(true)}
                    onKeyDown={() => setClicked(true)}
                    type='button'
                    className='max-w-xs '
                  >
                    <div className=' max-w-xs w-full relative rounded-md'>
                      <Image
                        src={lastImagen || userPhoteDefault}
                        width={200}
                        height={220}
                        alt={Texto}
                        className='avatar'
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className=' lg:w-1/2 flex flex-col justify-center items-center md:items-start py-4 px-3 '>
                <div className='flex flex-col w-full justify-center items-center '>
                  <button
                    onClick={() => setClicked(true)}
                    onKeyDown={() => setClicked(true)}
                    type='button'
                    className='button-blue w-full  max-w-xs hover:text-base-sky cursor-pointer'
                  >
                    <i className='fas fa-cloud-upload-alt pr-3 ' /> Cargar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex flex-col md:flex-row w-full rounded-md'>
              <div className=' lg:mt-0 lg:w-1/3 p-3 bg-gray-300 w-full rounded-md'>
                <div className='flex flex-col w-full items-center justify-center md:justify-center rounded-md'>
                  <div className=' max-w-xs w-full h-48 relative rounded-md'>
                    <Image
                      className='cursor-pointer object-cover object-center  rounded-md'
                      src={imagePreviewUrl}
                      alt={alt}
                      layout='fill'
                      objectFit='inherit'
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              <div className=' lg:w-1/2 flex flex-col justify-center items-center md:items-start py-4 px-3 '>
                <div className='flex flex-col w-full justify-center items-center '>
                  <button
                    type='button'
                    onClick={() => setClicked(true)}
                    className='button-yellow w-full  max-w-xs hover:text-base-sky cursor-pointer'
                  >
                    <i className='fas fa-exchange-alt pr-3' />
                    Cambiar
                  </button>
                  <button
                    type='button'
                    onClick={() => {
                      setImagePreviewUrl('/img/default.jpg');
                      setDeletePicture();
                    }}
                    className='button-gray w-full max-w-xs hover:text-base-sky cursor-pointer'
                  >
                    <i className='fas fa-trash-alt pr-3' />
                    Eliminar
                  </button>
                </div>
                <ToastContainer />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
