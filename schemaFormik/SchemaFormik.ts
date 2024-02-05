const Yup = require('yup');

const validationsFormik = (
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
  const schemaArray = [
    {
      [param]: Yup.string().required(
        'Debes indicar si es Persona Natural o Jurídica'
      ),
    },
    {
      codeudor: Yup.string().required(
        'Debes seleccionar si existe o no un codeudor'
      ),
    },
    {
      [id]: Yup.string().required('Este campo es obligatorio'),
      [tipoIdentificacion]: Yup.string()
        .min(3, 'Debe contener mínimo tres caracteres')
        .required('Este campo es obligatorio'),
      [identificacion]: Yup.string().required('Este campo es obligatorio'),
    },
    {
      [representanteLegal]: Yup.string().required('Este campo es obligatorio'),
      [tipoIdentificacionRepresentante]: Yup.string().required(
        'Debes seleccionar un tipo de identificación'
      ),
      [identificacionRepresentante]: Yup.string().required(
        'Este campo es obligatorio'
      ),
      [denominacionSociedad]: Yup.string().required(
        'Este campo es obligatorio'
      ),
      [nitSociedad]: Yup.string().required('Este campo es obligatorio'),
    },
    {
      duracionContrato: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
      fechaContrato: Yup.date().required('Este campo es obligatorio'),
    },
    {
      informacionInmuebles: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionBienes: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionBienesVendidos: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionObjetoContrato: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionFechaEscritura: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionMatriculaInmobiliaria: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionOficinaRegistro: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionNumeroEscritura: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      valorInmueble: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionNotaria: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionTituloInmueble: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionAnterioresPropietarios: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      valorTotalVenta: Yup.string()
        .min(4, 'Debe tener mínimo 1 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      formaDePago: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionEntregaInmueble: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionFechaHoraOtorgamiento: Yup.string()
        .min(2, 'Debe tener mínimo 2 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionHoraOtorgamiento: Yup.string()
        .min(2, 'Debe tener mínimo 2 carácter')
        .required('Este campo es obligatorio'),
    },

    {
      informacionNotariaOtorgamiento: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCiudadNotariaOtorgamiento: Yup.string()
        .min(2, 'Debe tener mínimo 2 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCiudadNotaria: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      gastosEscrituracion: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      clausulaAfectacionViviendaFamiliar: Yup.string()
        .min(1, 'Debe elegir una opción')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCesionContrato: Yup.string()
        .min(1, 'Debe elegir una opción')
        .required('Este campo es obligatorio'),
    },
    {
      informacionDireccionPromitenteVendedor: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCorreoPromitenteVendedor: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionDomicilioContractual: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionDireccionPromitenteComprador: Yup.string()
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCorreoPromitenteComprador: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      ciudadEmpleador: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      nombreInformacionTrabajador: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      tipoIdentificacionTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      identificacionTrabajador: Yup.string()
        .min(3, 'Debe tener mínimo 3 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      fechaPresenteDocumento: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      tipoPersonaEmpleador: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombrePersonaEmpleador: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionCargoTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoSalarioTrabajador: Yup.string().required('Este campo es obligatorio'),
    },
    {
      valorSalarioTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      formaPagoSalarioTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionSalarioEspecie: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionExtCorreoEmpleador: Yup.string().optional(),
    },
    {
      informacionAdicionalDireccionTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionAdicionalTelefonoTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionAdicionalCorreoTrabajador: Yup.string().optional(),
    },
    {
      informacionEspecies: Yup.string().required('Este campo es obligatorio'),
    },
    {
      informacionFormaPagoEspecies: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      fechaTerminacion: Yup.string()
        .min(3, 'Debe tener mínimo 3 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionFechaInicioContrato: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionCiudadFunciones: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionDireccionFunciones: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionExtDireccionEmpleador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionExtTelefonoEmpleador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionTrabajadorInterno: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoSalarioEmpleadaMayordomo: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionEmpleadaMayordomo: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo1: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo2: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo3: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo4: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo5: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo6: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo7: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      funcionEmpleadaMayordomo8: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionTipoDuracionContratoEM: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      duracionContratoEM: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaInicioContratoEM: Yup.string().required('Este campo es obligatorio'),
    },
    {
      informacionDuracionContratoEM: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionJornadaTrabajador: Yup.string()
        .min(1, 'Debe tener mínimo 1 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionClausulaExclusividad: Yup.string()
        .min(1, 'Debe tener mínimo 1 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      informacionDiasLaboralesTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionTipoJornadaTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionConfianzaTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      informacionBienMueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaContratoSebas: Yup.string().required('Este campo es obligatorio'),
    },
    {
      dineroBienMueble: Yup.string().required('Este campo es obligatorio'),
      prestamoMutuario: Yup.number()
        .typeError('El valor tiene que ser numérico')
        .min(4)
        .positive()
        .required('Este campo es obligatorio'),
    },
    {
      formaPagoConIntereses: Yup.string().required('Este campo es obligatorio'),
      plazoDuracionPrestamo: Yup.string().required('Este campo es obligatorio'),
    },
    {
      cesionContrato: Yup.string().required('Este campo es obligatorio'),
    },
    {
      tipoInteres: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      informacionHoraFirma: Yup.string()
        .min(1, 'Debe tener mínimo 1 caracteres')
        .required('Este campo es obligatorio'),
    },
    tipoPago === 'Efectivo'
      ? {
          valorCanon: Yup.number()
            .typeError('El valor tiene que ser numérico')
            .min(4)
            .positive()
            .required('Este campo es obligatorio'),
          formaPago: Yup.string().required(
            'Debes indicar una modalidad de pago'
          ),
          direccionPago: Yup.string()
            .min(5, 'Debe tener mínimo cinco caracteres')
            .required('Este campo es obligatorio'),
          canon: Yup.number()
            .typeError('El valor tiene que ser numérico')
            .min(1, 'El dia no debe ser menor a 1')
            .max(31, 'El dia no debe ser mayor a 31')
            .required('Este campo es obligatorio'),
        }
      : {
          valorCanon: Yup.number()
            .typeError('El valor tiene que ser numérico')
            .min(4)
            .positive()
            .required('Este campo es obligatorio'),
          formaPago: Yup.string().required(
            'Debes indicar una modalidad de pago'
          ),
          tipoCuenta: Yup.string().required('Debes indicar un tipo de cuenta'),
          numeroCuenta: Yup.number()
            .typeError('El valor tiene que ser numérico')
            .positive('Numero de cuenta no válido')
            .min(5, 'Debe tener minimo cinco números'),
          nombreBanco: Yup.string().required('Este campo es obligatorio'),
          canon: Yup.number()
            .typeError('El valor tiene que ser numérico')
            .min(1, 'El dia no debe ser menor a 1')
            .max(31, 'El dia no debe ser mayor a 31')
            .required('Este campo es obligatorio'),
        },
    {
      gastosAdmin: Yup.string().required(
        'Debes seleccionar un tipo de identificación'
      ),
    },
    {
      direccionNotificacion: Yup.string()
        .min(4, 'Debe tener mínimo 4 caracteres')
        .required('Este campo es obligatorio'),
      correoArrendador: Yup.string()
        .email('Correo no válido')
        .min(3, 'Debe tener minimo tres caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      correoArrendatario: Yup.string()
        .email('Correo no válido')
        .min(3, 'Debe tener minimo tres caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      clausula: Yup.string().required('Debes seleccionar SI o NO'),
    },
    {
      clausulaCompromisoria: Yup.string().required('Este campo es obligatorio'),
      lugarArbitramento: Yup.string()
        .min(1, 'Debe tener mínimo 1 carácter')
        .required('Este campo es obligatorio'),
    },

    {
      ciudadDomicilio: Yup.string()
        .min(5, 'Debe contener mínimo cinco caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      ciudadContrato: Yup.string()
        .min(4, 'Debe tener mínimo cuatro caracteres')
        .required('Este campo es obligatorio'),
      fechaFirma: Yup.string()
        .min(5, 'Debe tener mínimo cinco caracteres')
        .required('Este campo es obligatorio'),
    },
    {
      revisionCampos: Yup.bool().required('Este campo es obligatorio'),
      terminosCondiciones: Yup.bool().required('Este campo es obligatorio'),
      datosPersonales: Yup.bool().required('Este campo es obligatorio'),
    },
    {
      fechaContratoTerminacionMutuoAcuerdo: Yup.date().required(
        'Este campo es obligatorio'
      ),
    },
    {
      serviciosProfesionalesPrestacion: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      direccionPrestacionServiciosContratista: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      honorariosContratista: Yup.number()
        .typeError('El valor tiene que ser numérico')
        .positive()
        .required('Este campo es obligatorio'),
      formaHonorariosContratista: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      duracionContratoPrestacionTipo: Yup.string().required(
        'Este campo es obligatorio'
      ),
      duracionContratoPrestacion: Yup.number()
        .typeError('El valor tiene que ser numérico')
        .positive()
        .required('Este campo es obligatorio'),
    },
    {
      fechaInicioContratoPrestacion: Yup.date().required(
        'Este campo es obligatorio'
      ),
    },
    {
      direccionContratantePrestacion: Yup.string().required(
        'Este campo es obligatorio'
      ),
      telefonoContratantePrestacion: Yup.number()
        .typeError('El valor tiene que ser numérico')
        .positive()
        .integer()
        .min(1000000, 'Debe tener mínimo 7 dígitos')
        .required('Este campo es obligatorio'),
    },
    {
      direccionContratistaPrestacion: Yup.string().required(
        'Este campo es obligatorio'
      ),
      telefonoContratistaPrestacion: Yup.number()
        .typeError('El valor tiene que ser numérico')
        .positive()
        .integer()
        .min(1000000, 'Debe tener mínimo 7 dígitos')
        .required('Este campo es obligatorio'),
    },
    {
      tipoCorreoContratante: Yup.string().required('Este campo es obligatorio'),
      correoElectronicoContrantePrestacion: Yup.string()
        .email('Correo no válido')
        .required('Este campo es obligatorio'),
    },
    {
      tipoCorreoContratista: Yup.string().required('Este campo es obligatorio'),
      correoElectronicoContratistaPrestacion: Yup.string()
        .email('Correo no válido')
        .required('Este campo es obligatorio'),
    },
    {
      tipoContrato: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FechaIngreso: Yup.date().required('Este campo es obligatorio'),
    },
    {
      FechaRetiro: Yup.date().required('Este campo es obligatorio'),
    },
    {
      MotivoRetiro: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FechaPactadaFijo: Yup.date().required('Este campo es obligatorio'),
    },
    {
      FechaEfectivaFijo: Yup.date().required('Este campo es obligatorio'),
    },
    {
      Salario: Yup.string().required('Este campo es obligatorio'),
    },
    {
      porDias: Yup.string().required('Este campo es obligatorio'),
    },
    {
      CantidadDias: Yup.string().required('Este campo es obligatorio'),
    },
    {
      AuxilioTransporte: Yup.string().required('Este campo es obligatorio'),
    },
    {
      CesantiasAnteriores: Yup.string().required('Este campo es obligatorio'),
    },
    {
      PrimasAnteriores: Yup.string().required('Este campo es obligatorio'),
    },
    {
      PrimasActual: Yup.string().required('Este campo es obligatorio'),
    },
    {
      CuatosSemestres: Yup.string().required('Este campo es obligatorio'),
    },
    {
      ConfirmacionVacaciones: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      UltimasVacacionesPagadas: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      OtrosIngresos: Yup.string().required('Este campo es obligatorio'),
    },
    {
      OtrosSalarios: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FechaContrato: Yup.string().required('Este campo es obligatorio'),
    },
    {
      numeroAcciones: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      NITSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      valorAcciones: Yup.string().required('Este campo es obligatorio'),
    },
    {
      clausulaIncumplimiento: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      Bienes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      LugarBienes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      UsoBienes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      DuracionPrestamo: Yup.string().required('Este campo es obligatorio'),
    },
    {
      EstadoBienes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      ValorBienes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      PlazoInmueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      MatriculaInmueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      DireccionInmueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      ActividadComercial: Yup.string().required('Este campo es obligatorio'),
    },
    {
      DuracionContrato: Yup.string().required('Este campo es obligatorio'),
    },
    {
      DuracionInmueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      ValorCanon: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FormaPagoContrato: Yup.string().required('Este campo es obligatorio'),
    },
    {
      LugarPagoCanon: Yup.string().required('Este campo es obligatorio'),
    },
    {
      NumeroCuenta: Yup.string().required('Este campo es obligatorio'),
    },
    {
      EntidadBancaria: Yup.string().required('Este campo es obligatorio'),
    },
    {
      DireccionArrendador: Yup.string().required('Este campo es obligatorio'),
    },
    {
      CorreoArrendador: Yup.string()
        .required('Este campo es obligatorio')
        .email('Correo no válido'),
    },
    {
      CorreoArrendatario: Yup.string()
        .required('Este campo es obligatorio')
        .email('Correo no válido'),
    },
    {
      DiaMesPagoCanon: Yup.string().required('Este campo es obligatorio'),
    },
    {
      IncrementoCanon: Yup.string().required('Este campo es obligatorio'),
    },
    {
      GastosInmueble: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FrecuenciaPago: Yup.string().required('Este campo es obligatorio'),
    },
    {
      domicilioSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      direccionSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      SociedadNombre: Yup.string().required('Este campo es obligatorio'),
    },
    {
      SociedadNit: Yup.string().required('Este campo es obligatorio'),
    },

    {
      datosRecolectados: Yup.string().required('Este campo es obligatorio'),
    },
    {
      CorreoUsuarios: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      CanalesAtencion: Yup.string().required('Este campo es obligatorio'),
    },
    {
      FechaTratamiento: Yup.string().required('Este campo es obligatorio'),
    },
    {
      clausulaAcuerdo: Yup.string().required('Debes seleccionar SI o NO'),
    },
    {
      valorClausula: Yup.string().required('Este campo es obligatorio'),
    },
    {
      direccionTitular: Yup.string().required('Este campo es obligatorio'),
    },
    {
      correoTitular: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      direccionReceptor: Yup.string().required('Este campo es obligatorio'),
    },
    {
      correoReceptor: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter')
        .required('Este campo es obligatorio'),
    },
    {
      ciudadPeticion: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaPeticion: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreDirigido: Yup.string().required('Este campo es obligatorio'),
    },
    {
      areaDirigido: Yup.string(),
    },
    {
      ciudadDirigido: Yup.string().required('Este campo es obligatorio'),
    },
    {
      direccionRespuesta: Yup.string().required('Este campo es obligatorio'),
    },
    {
      correoRespuesta: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter'),
    },
    {
      nombrePersonaPeticion: Yup.string().required('Este campo es obligatorio'),
    },
    {
      tipoIdentificacionPeticion: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      numeroPersonaPeticion: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreRepresentantePeticion: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoRepresentantePeticion: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      numeroRepresentantePeticion: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      nombrePersonaTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoIdentificacionPersonaTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      numeroPersonaTrabajador: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      fechaTerminacionConCausa: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      causaLegal: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaPensionVejez: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreFondoPension: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaTerminacionPensionVejez: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      nombreEmpleadorRenuncia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      prorroga: Yup.string().required('Este campo es obligatorio'),
    },
    {
      ciudadPFondoCesantia: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreEmpleadorCesantia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoIdentificacionEmpleadorCesantia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      numeroEmpleadorCesantia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      nombreRLCesantia: Yup.string().required('Este campo es obligatorio'),
    },
    {
      tipoIdentificacionRLCesantia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      numeroRLCesantia: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaInicioLicencia: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaTerminacionLicencia: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      ciudadSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      departamentoSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      paisSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      fechaSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      tiempoSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      duracionSociedadSAS: Yup.string().required('Este campo es obligatorio'),
    },
    {
      objetoSociedadSAS: Yup.string().required('Este campo es obligatorio'),
    },
    {
      capitalAutorizado: Yup.string().required('Este campo es obligatorio'),
    },
    {
      numAccionesSociedadSAS: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      capitalSuscrito: Yup.string().required('Este campo es obligatorio'),
    },
    {
      numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    },
    {
      pagoCapitalSuscrito: Yup.string().required('Este campo es obligatorio'),
    },
    {
      cantidadSuplentes: Yup.string().required('Este campo es obligatorio'),
    },
    {
      revisorFiscal: Yup.string().required('Este campo es obligatorio'),
    },
    {
      revisorSuplente: Yup.string().required('Este campo es obligatorio'),
    },
    {
      cantidadRevisorSuplente: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      duracionRevisor: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreRLSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      numeroRLSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      nombreRFSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      numeroRFSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      direccionSociedad: Yup.string().required('Este campo es obligatorio'),
    },
    {
      telefonoSociedadSAS: Yup.string().required('Este campo es obligatorio'),
    },
    {
      emailSociedadSAS: Yup.string()
        .email('Correo no válido')
        .min(4, 'Debe tener mínimo 4 carácter'),
    },
    {
      tipoIdentificacionRLSociedad: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      tipoIdentificacionRFSociedad: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      nombreCodeudor: Yup.string().required('Este campo es obligatorio'),
    },
    {
      hayCodeudor: Yup.string().required('Este campo es obligatorio'),
    },
    {
      TipoCodeudor: Yup.string().required('Este campo es obligatorio'),
    },
    {
      tipoIdentificacionCodeudor: Yup.string().required(
        'Este campo es obligatorio'
      ),
    },
    {
      plazobien: Yup.string().required('Este campo es obligatorio'),
    },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
    // {
    //   numAccionesRepartir: Yup.string().required('Este campo es obligatorio'),
    // },
  ];
  return schemaArray;
};

export default validationsFormik;
