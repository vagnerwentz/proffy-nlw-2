export default function convertHourToMinutes(time: string) {
  /*
    "8:00"
    map(Number): 8:00
    [0]: 8; [1]: 0
  */
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
} 