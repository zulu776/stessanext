function TableTh({ children }) {
  return (
    <th className='font-baseRegular md:font-baseBold lg:font-baseBold text-sm md:text-lg lg:text-lg xl:text-lg text-base-gray text-left border-b-2 py-2 px-5 '>
      {children}
    </th>
  );
}

function TableTd({ children }) {
  return (
    <td className='font-baseRegular text-sm md:text-lg lg:text-lg xl:text-lg text-base-gray lg:truncate border-b p-5 threeDots '>
      {children}
    </td>
  );
}

export { TableTh, TableTd };
