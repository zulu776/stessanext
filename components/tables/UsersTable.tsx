import Loading from '@components/Loading';
import {
  Button,
  CheckboxInputUncontrolled,
  Input,
  SelectInput,
} from '@components/StyledComponents';
import { Tooltip } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';

function TableColumnHeader({ name }) {
  return (
    <th className='px-5 py-5 border-b border-gray-200 text-left subtitle-table'>
      {name}
    </th>
  );
}

const headers = ['Nombre', 'Correo', 'Rol', 'Estado', 'Acciones'];

function UsersTable({
  usersShow,
  editMode,
  setEditMode,
  handleEditUser,
  handleSaveUser,
  selectedUser,
  setSelectedUser,
  enabledState,
  setEnabledState,
  loadingSave,
  loading,
  loadingItem,
  rolesOption,
  handleDeleteUser,
}) {
  return (
    <div className='flex  h-[70vh] w-full overflow-auto'>
      <table className='hidden sm:table w-full table-fixed  '>
        <thead className='sticky top-0    dark:text-bgTd text-bgTdLigth z-20'>
          <tr className=' uppercase leading-normal'>
            {headers.map(header => (
              <TableColumnHeader name={header} />
            ))}
          </tr>
        </thead>
        {loadingItem ? (
          <tbody>
            <Loading open />
          </tbody>
        ) : (
          <tbody>
            {usersShow?.map(({ id, name, email, enabled, roles }) =>
              editMode && selectedUser?.id === id ? (
                <tr>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm threeDots'>
                    <Input
                      name='name'
                      placeholder='Nombre'
                      type='text'
                      value={selectedUser.name}
                      onChange={e =>
                        setSelectedUser({
                          ...selectedUser,
                          name: e.target.value,
                        })
                      }
                    />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm threeDots'>
                    {email}
                  </td>
                  <td className='px-5 py-5 border-b  border-gray-200 text-sm '>
                    <SelectInput
                      isMulti
                      opts={rolesOption.filter(item => item.name !== 'Cliente')}
                      setSelected={(selected): void =>
                        setSelectedUser({
                          ...selectedUser,
                          roles: [...selected],
                        })
                      }
                      selectedValue={[...selectedUser.roles]}
                      placeholder='Seleccionar el rol'
                      selectName='roles'
                      text=''
                    />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-xs'>
                    <CheckboxInputUncontrolled
                      label='Activo'
                      setChecked={setEnabledState}
                      name='enabled'
                      checked={enabledState}
                    />
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <div className='flex flex-row space-x-2 justify-start'>
                      <Tooltip
                        title='Guardar usuario'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div>
                          <Button
                            type='button'
                            priority='icon'
                            size='small'
                            negative
                            onClick={handleSaveUser}
                            extraClassName='bg-blue500 text-darkBlue500'
                            disabled={loading && loadingSave}
                          >
                            {loading && loadingSave ? (
                              <Loading open />
                            ) : (
                              <i className='fas fa-save' />
                            )}
                          </Button>
                        </div>
                      </Tooltip>
                      <Tooltip
                        title='Cancelar'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div>
                          <Button
                            type='button'
                            priority='icon'
                            size='small'
                            negative
                            onClick={() => setEditMode(false)}
                            extraClassName='bg-gray700'
                          >
                            <div className='flex justify-center'>
                              <Image
                                className='flex justify-center'
                                src='/img/icons/close.svg'
                                alt=''
                                height={18}
                                width={18}
                              />
                            </div>
                          </Button>
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={id}>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm threeDots'>
                    <p className=' dark:text-bgTd text-bgTdLigth'>{name}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm threeDots'>
                    <p className=' dark:text-bgTd text-bgTdLigth'>{email}</p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm threeDots'>
                    <p className=' dark:text-bgTd text-bgTdLigth'>
                      {roles &&
                        roles?.map(role => (
                          <span className='flex flex-col' key={role.id}></span>
                        ))}
                    </p>
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-xs'>
                    {enabled ? (
                      <Tooltip
                        title='Usuario Habilitado'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div className='btn-rounded bg-green'>
                          <div className='flex justify-center'>
                            <Image
                              src='/img/icons/check.svg'
                              alt=''
                              height={18}
                              width={18}
                            />
                          </div>
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip
                        title='Usuario Deshabilitado'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div className='btn-rounded bg-orange'>
                          <div className='flex justify-center'>
                            <Image
                              src='/img/icons/close.svg'
                              alt=''
                              height={18}
                              width={18}
                            />
                          </div>
                        </div>
                      </Tooltip>
                    )}
                  </td>
                  <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                    <div className='flex flex-row space-x-2 justify-start'>
                      <Tooltip
                        title='EditarUsuario'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div>
                          <Button
                            type='button'
                            priority='icon'
                            size='small'
                            negative
                            onClick={() =>
                              handleEditUser({
                                id,
                                name,
                                email,
                                enabled,
                                roles,
                              })
                            }
                            extraClassName='bg-blue500'
                          >
                            <div className='flex justify-center'>
                              <Image
                                src='/img/icons/pencil.svg'
                                alt=''
                                height={18}
                                width={18}
                              />
                            </div>
                          </Button>
                        </div>
                      </Tooltip>
                      <Tooltip
                        title='Eliminar Usuario'
                        enterTouchDelay={0}
                        placement='top'
                        arrow
                      >
                        <div>
                          <Button
                            type='button'
                            priority='icon'
                            size='small'
                            negative
                            extraClassName='bg-gray700'
                            disabled={loading}
                            onClick={() =>
                              handleDeleteUser({
                                id,
                              })
                            }
                          >
                            <div className='flex justify-center'>
                              <Image
                                src='/img/icons/trash.svg'
                                alt=''
                                height={18}
                                width={18}
                              />
                            </div>
                          </Button>
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        )}
      </table>
    </div>
  );
}
export default UsersTable;
