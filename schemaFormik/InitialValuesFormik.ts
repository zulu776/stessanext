import validationsFormik from 'schemaFormik/SchemaFormik';

// importando la funcion
const values = (
  param,
  id,
  tipoIdentificacion,
  identificacion,
  representanteLegal,
  tipoIdentificacionRepresentante,
  identificacionRepresentante,
  denominacionSociedad,
  nitSociedad,
  tipoPago
) => {
  const initialValues = {
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[0]
    )[0]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[2]
    )[0]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[2]
    )[1]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[2]
    )[2]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[3]
    )[0]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[3]
    )[1]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[3]
    )[2]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[3]
    )[3]]: '',
    [Object.keys(
      validationsFormik(
        param,
        id,
        tipoIdentificacion,
        identificacion,
        representanteLegal,
        tipoIdentificacionRepresentante,
        identificacionRepresentante,
        denominacionSociedad,
        nitSociedad,
        tipoPago
      )[3]
    )[4]]: '',
    codeudor: '',
    formaPago: '',
    tipoCuenta: '',
    direccionPago: '',
    numeroCuenta: '',
    nombreBanco: '',
    informacionInmuebles: '',
    informacionBienes: '',
    informacionBienesVendidos: '',
    valorTotalVenta: '',
    informacionBienMueble: '',
    formaPagoConIntereses: '',
    plazoDuracionPrestamo: '',
    tipoInteres: '',
    cesionContrato: '',
    valorCanon: '',
    canon: '',
    duracionContrato: '',
    fechaContrato: '',
    gastosAdmin: ' ',
    direccionNotificacion: '',
    correoArrendador: '',
    correoArrendatario: '',
    clausulaCompromisoria: '',
    dineroBienMueble: '',
    prestamoMutuario: '',
    lugarArbitramento: '',
    ciudadDomicilio: '',
    ciudadContrato: '',
    fechaFirma: '',
    revisionCampos: false,
    terminosCondiciones: false,
    datosPersonales: false,
    informacionObjetoContrato: '',
    informacionTituloInmueble: '',
    informacionAnterioresPropietarios: '',
    informacionFechaEscritura: '',
    informacionNotaria: '',
    informacionMatriculaInmobiliaria: '',
    informacionOficinaRegistro: '',
    informacionNumeroEscritura: '',
    valorInmueble: '',
    formaDePago: '',
    informacionEntregaInmueble: '',
    informacionFechaFirma: '',
    informacionFechaFirmaNotaria: '',
    informacionFechaFirmaCiudadNotaria: '',
    informacionCiudadNotaria: '',
    informacionFechaHoraOtorgamiento: '',
    informacionHoraOtorgamiento: '',
    informacionNotariaOtorgamiento: '',
    informacionCiudadNotariaOtorgamiento: '',
    gastosEscrituracion: '',
    clausulaAfectacionViviendaFamiliar: '',
    informacionCesionContrato: '',
    informacionDireccionPromitenteVendedor: '',
    informacionCorreoPromitenteVendedor: '',
    informacionDireccionPromitenteComprador: '',
    informacionCorreoPromitenteComprador: '',
    informacionDomicilioContractual: '',
    informacionHoraFirma: '',
    ciudadEmpleador: '',
    fechaPresenteDocumento: '',
    nombreInformacionTrabajador: '',
    tipoIdentificacionTrabajador: '',
    identificacionTrabajador: '',
    fechaTerminacion: '',
    tipoPersonaEmpleador: '',
    nombrePersonaEmpleador: '',
    informacionCargoTrabajador: '',
    tipoSalarioTrabajador: '',
    valorSalarioTrabajador: '',
    formaPagoSalarioTrabajador: '',
    informacionSalarioEspecie: '',
    informacionEspecies: '',
    informacionFormaPagoEspecies: '',
    informacionFechaInicioContrato: '',
    informacionCiudadFunciones: '',
    informacionDireccionFunciones: '',
    informacionJornadaTrabajador: '',
    informacionTipoJornadaTrabajador: '',
    informacionDiasLaboralesTrabajador: '',
    informacionClausulaExclusividad: '',
    informacionExtDireccionEmpleador: '',
    informacionExtTelefonoEmpleador: '',
    informacionExtCorreoEmpleador: '',
    informacionAdicionalDireccionTrabajador: '',
    informacionAdicionalTelefonoTrabajador: '',
    informacionAdicionalCorreoTrabajador: '',
    informacionTrabajadorInterno: '',
    tipoSalarioEmpleadaMayordomo: '',
    informacionEmpleadaMayordomo: '',
    funcionEmpleadaMayordomo1: '',
    funcionEmpleadaMayordomo2: '',
    funcionEmpleadaMayordomo3: '',
    funcionEmpleadaMayordomo4: '',
    funcionEmpleadaMayordomo5: '',
    funcionEmpleadaMayordomo6: '',
    funcionEmpleadaMayordomo7: '',
    funcionEmpleadaMayordomo8: '',
    serviciosProfesionalesPrestacion: '',
    direccionPrestacionServiciosContratista: '',
    honorariosContratista: '',
    formaHonorariosContratista: '',
    duracionContratoPrestacionTipo: '',
    duracionContratoPrestacion: '',
    fechaInicioContratoPrestacion: '',
    direccionContratantePrestacion: '',
    telefonoContratantePrestacion: '',
    tipoCorreoContratante: '',
    correoElectronicoContrantePrestacion: '',
    direccionContratistaPrestacion: '',
    telefonoContratistaPrestacion: '',
    tipoCorreoContratista: '',
    correoElectronicoContratistaPrestacion: '',
    informacionTipoDuracionContratoEM: '',
    duracionContratoEM: '',
    fechaInicioContratoEM: '',
    informacionDuracionContratoEM: '',
    fechaContratoTerminacionMutuoAcuerdo: '',
    tipoContrato: '',
    FechaIngreso: '',
    FechaRetiro: '',
    MotivoRetiro: '',
    FechaPactadaFijo: '',
    FechaEfectivaFijo: '',
    Salario: '',
    porDias: '',
    CantidadDias: '',
    AuxilioTransporte: '',
    ValorAuxTransporte: '',
    CesantiasAnteriores: '',
    UltimasVacacionesPagadas: '',
    OtrosIngresos: '',
    OtrosSalarios: '',
    PrimasAnteriores: '',
    PrimasActual: '',
    CuatosSemestres: '',
    ConfirmacionVacaciones: '',
    FechaContrato: '',
    numeroAcciones: '',
    nombreSociedad: '',
    NITSociedad: '',
    valorAcciones: '',
    clausulaIncumplimiento: '',
    Bienes: '',
    LugarBienes: '',
    UsoBienes: '',
    DuracionPrestamo: '',
    EstadoBienes: '',
    ValorBienes: '',
    PlazoInmueble: '',
    MatriculaInmueble: '',
    DireccionInmueble: '',
    ActividadComercial: '',
    DuracionContrato: '',
    DuracionInmueble: '',
    ValorCanon: '',
    FormaPagoContrato: '',
    LugarPagoCanon: '',
    NumeroCuenta: '',
    EntidadBancaria: '',
    DireccionArrendador: '',
    CorreoArrendador: '',
    CorreoArrendatario: '',
    DiaMesPagoCanon: '',
    IncrementoCanon: '',
    GastosInmueble: '',
    FrecuenciaPago: '',
    domicilioSociedad: '',
    direccionSociedad: '',
    SociedadNombre: '',
    SociedadNit: '',
    datosRecolectados: '',
    CorreoUsuarios: '',
    CanalesAtencion: '',
    FechaTratamiento: '',
    clausulaAcuerdo: '',
    valorClausula: '',
    direccionTitular: '',
    correoTitular: '',
    direccionReceptor: '',
    correoReceptor: '',
    ciudadPeticion: '',
    fechaPeticion: '',
    nombreDirigido: '',
    areaDirigido: '',
    ciudadDirigido: '',
    direccionRespuesta: '',
    correoRespuesta: '',
    nombrePersonaPeticion: '',
    tipoIdentificacionPeticion: '',
    numeroPersonaPeticion: '',
    nombreRepresentantePeticion: '',
    tipoRepresentantePeticion: '',
    numeroRepresentantePeticion: '',
    nombrePersonaTrabajador: '',
    tipoIdentificacionPersonaTrabajador: '',
    numeroPersonaTrabajador: '',
    fechaTerminacionConCausa: '',
    causaLegal: '',
    fechaPensionVejez: '',
    nombreFondoPension: '',
    fechaTerminacionPensionVejez: '',
    nombreEmpleadorRenuncia: '',
    prorroga: '',
    ciudadPFondoCesantia: '',
    nombreEmpleadorCesantia: '',
    tipoIdentificacionEmpleadorCesantia: '',
    numeroEmpleadorCesantia: '',
    nombreRLCesantia: '',
    tipoIdentificacionRLCesantia: '',
    numeroRLCesantia: '',
    fechaInicioLicencia: '',
    fechaTerminacionLicencia: '',
    ciudadSociedad: '',
    departamentoSociedad: '',
    paisSociedad: '',
    fechaSociedad: '',
    tiempoSociedad: '',
    duracionSociedadSAS: '',
    objetoSociedadSAS: '',
    capitalAutorizado: '',
    numAccionesSociedadSAS: '',
    capitalSuscrito: '',
    numAccionesRepartir: '',
    pagoCapitalSuscrito: '',
    revisorFiscal: '',
    cantidadSuplentes: '',
    revisorSuplente: '',
    cantidadRevisorSuplente: '',
    duracionRevisor: '',
    nombreRLSociedad: '',
    numeroRLSociedad: '',
    nombreRFSociedad: '',
    numeroRFSociedad: '',
    direccionSociedadSAS: '',
    telefonoSociedadSAS: '',
    emailSociedadSAS: '',
    tipoIdentificacionRLSociedad: '',
    tipoIdentificacionRFSociedad: '',
    nombreCodeudor: '',
    hayCodeudor: '',
    TipoCodeudor: '',
    tipoIdentificacionCodeudor: '',
    plazobien: '',
  };
  return initialValues;
};

export default values;
