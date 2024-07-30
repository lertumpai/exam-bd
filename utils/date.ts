export const calculateTime = (startDateTime: Date | string, finishDateTime: Date | string) => {
  return (new Date(finishDateTime).getTime() - new Date(startDateTime).getTime()) / 1000
}