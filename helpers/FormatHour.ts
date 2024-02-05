/* --- Funcion para formatear la hora a 12h **/

export const formatHour = hour => {
  const hours = parseInt(hour.substring(0, 2) ?? 0);
  if (hours === 0) {
    return `12${hour.substring(2)} a. m`;
  } else if (hours <= 11) {
    return `${hour} a. m`;
  } else if (hours === 12){
    return `${hour} p. m`
  } else if (hours - 12 <= 9) {
    return `0${hours - 12}${hour.substring(2)} p. m`;
  } else {
    return `${hours - 12}${hour.substring(2)} p. m`;
  }
};
