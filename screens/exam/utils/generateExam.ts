type ExamType = {
  id: number
  question: string
  choices: string[]
  answerIndex: number
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


function generateChoices(correctAnswer: number, answerIndex: number): string[] {
  const choices = new Set<number>()

  while (choices.size < 4) {
    if (choices.size === answerIndex) {
      choices.add(correctAnswer)
      continue
    }

    const choice = correctAnswer + getRandomInt(-50, 50)
    if (!choices.has(choice)) {
      choices.add(choice)
    }
  }

  return Array.from(choices).map(choice => choice.toString())
}

function generateQuestion(id: number): ExamType {
  const num1 = getRandomInt(1, 20)
  const num2 = getRandomInt(1, 20)

  const question = `${num1} + ${num2}`
  const answerIndex = getRandomInt(0, 3)
  const choices = generateChoices(num1 + num2, answerIndex)

  return {
    id,
    question,
    choices,
    answerIndex,
  }
}

export function generateMathExam(n: number): ExamType[] {
  const exams: ExamType[] = []

  for (let i = 1 i <= n
  i++
)
  {
    exams.push(generateQuestion(i))
  }

  return exams
}