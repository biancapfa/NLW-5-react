export function convertDurationToTimeString(duration: number){
  const hours = Math.floor(duration/3600) //arredonda pra baixo as horas
  const minutes = Math.floor((duration % 3600)/60);
  const seconds = duration % 60;

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) //hora, minuto e segundo com dois digitos
    .join(':')

    return timeString;
}