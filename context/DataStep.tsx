/* eslint-disable no-sequences */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable consistent-return */

import { useState, useContext, createContext, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import validationsFormik from 'schemaFormik/SchemaFormik';
import values from 'schemaFormik/InitialValuesFormik';
import { useStatesContext } from 'context/globalStates/States';
// import * as Yup from 'Yup';
const Yup = require('yup');

const DataStepContext = createContext(null);

function DataStep({ children }) {
  let error = true;
  let validation = false;
  let isEmpty = true;
  const errores = [];
  const vacios = [];
  let isValidErrors = true;
  let isValidEmpty = true;

  const {
    parametro,
    id,
    tipoIdentificacion,
    identificacion,
    representanteLegal,
    tipoIdentificacionRepresentante,
    identificacionRepresentante,
    denominacionSociedad,
    nitSociedad,
    tipoPago,
  } = useStatesContext();

  const inputRef = useRef(null);
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);
  const [pagePrev, setPagePrev] = useState(0);
  const [location, setLocation] = useState(window?.location?.pathname);

  if (window?.location?.pathname !== location) {
    setLocation(window?.location?.pathname);
    setPage(1);
    return;
  }

  const handleChecked = () => {
    setIsActive(!isActive);
  };

  const busqueda = inputRef?.current?.id;
  const indice = validationsFormik(
    parametro,
    id,
    tipoIdentificacion,
    identificacion,
    representanteLegal,
    tipoIdentificacionRepresentante,
    identificacionRepresentante,
    denominacionSociedad,
    nitSociedad,
    tipoPago
  ).findIndex(item => item.hasOwnProperty(busqueda));

  /// formik
  const formik = useFormik({
    initialValues: values(
      parametro,
      id,
      tipoIdentificacion,
      identificacion,
      representanteLegal,
      tipoIdentificacionRepresentante,
      identificacionRepresentante,
      denominacionSociedad,
      nitSociedad,
      tipoPago
    ),
    validationSchema: Yup.object(
      validationsFormik(
        parametro,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[indice]
    ),
    onSubmit: () => {
      'enviando..';
    },
  });

  if (busqueda !== undefined) {
    // eslint-disable-next-line guard-for-in
    for (const property in validationsFormik(
      parametro,
      id,
      tipoIdentificacion,
      identificacion,
      representanteLegal,
      tipoIdentificacionRepresentante,
      identificacionRepresentante,
      denominacionSociedad,
      nitSociedad,
      tipoPago
    )[indice]) {
      validation = Boolean(formik.touched.hasOwnProperty(property));
      error = Boolean(formik.errors.hasOwnProperty(property));
      isEmpty = Boolean(formik.values[property] === '');
      errores.push(error);
      vacios.push(isEmpty);
    }
  }

  const resultadoErrores = {};
  const resultadoVacios = {};

  errores.forEach(
    item => (resultadoErrores[item] = resultadoErrores[item] + 1 || 1)
  ),
    (isValidErrors = Object?.values(resultadoErrores)[0] === errores.length);

  vacios.forEach(
    item => (resultadoVacios[item] = resultadoVacios[item] + 1 || 1)
  ),
    (isValidEmpty = Object.values(resultadoVacios)[0] === vacios.length);

  error === false &&
  validation === true &&
  isValidErrors === true &&
  isValidEmpty === true &&
  isEmpty === false
    ? (formik.isValid = true)
    : (formik.isValid = false);

  useEffect(() => {
    setPagePrev(page);
    if (page > pagePrev) {
      error = true;
      validation = false;
      formik.dirty = false;
      formik.isValid = false;
    }
  }, [page]);

  return (
    <DataStepContext.Provider
      value={{
        formik,
        page,
        setPage,
        handleChecked,
        isActive,
        inputRef,
        error,
        validation,
        isValidErrors,
        isValidEmpty,
        location,
      }}
    >
      {children}
    </DataStepContext.Provider>
  );
}

export const useDataStepContext = () => useContext(DataStepContext);
export { DataStepContext, DataStep };
