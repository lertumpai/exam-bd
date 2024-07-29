export type RootStackParamList = {
  Home: undefined;
  RegisterExam: undefined;
  Exam: { name: string };
  LeaderBoard: undefined;
  Score: { score: number, totalQuestion: number };
};