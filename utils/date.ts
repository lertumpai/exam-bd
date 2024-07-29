export const calculateTime = (startDateTime: Date, finishDateTime: Date) => {
  return (finishDateTime.getTime() - startDateTime.getTime()) / 1000
}