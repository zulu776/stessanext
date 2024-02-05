/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';

const StatesContext = createContext(null);

function States({ children }) {
  const [parametro, setParametro] = useState('');
  const [id, setId] = useState('');
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [representanteLegal, setRepresentanteLegal] = useState('');
  const [
    tipoIdentificacionRepresentante,
    setTipoIdentificacionRepresentante,
  ] = useState('');
  const [
    identificacionRepresentante,
    setIdentificacionRepresentante,
  ] = useState('');
  const [denominacionSociedad, setDenominacionSociedad] = useState('');
  const [nitSociedad, setNitSociedad] = useState('');
  const [tipoPago, setTipoPago] = useState('');
  return (
    <StatesContext.Provider
      value={{
        parametro,
        setParametro,
        id,
        setId,
        tipoIdentificacion,
        setTipoIdentificacion,
        identificacion,
        setIdentificacion,
        representanteLegal,
        setRepresentanteLegal,
        tipoIdentificacionRepresentante,
        setTipoIdentificacionRepresentante,
        identificacionRepresentante,
        setIdentificacionRepresentante,
        denominacionSociedad,
        setDenominacionSociedad,
        nitSociedad,
        setNitSociedad,
        tipoPago,
        setTipoPago,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
}
export const useStatesContext = () => useContext(StatesContext);
export { StatesContext, States };
