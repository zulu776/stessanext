// import { useDataStepContext } from 'context/DataStep';

function FormSelect({
  hidden = false,
  label,
  option,
  handleChange,
  handleBlur,
  id,
  value,
  inputRef,
}) {
  return (
    <div className={hidden && 'hidden'}>
      <h5 className='mb-2 text-sm'>{label}</h5>
      <select
        id={id}
        onChange={handleChange}
        ref={inputRef}
        value={value}
        onBlur={handleBlur}
        className=' mb-2 rounded-md p-2 bg-gray-100  w-full'
      >
        <option value=''>Seleccione una opción</option>
        {option.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
