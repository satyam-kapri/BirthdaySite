// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 3,
    perQuestionScore: 1,
    questions: [
      { img:14,
        question: 'What is this korean dish called?',
        choices: ['Kimchi', 'Bulgogi', 'kimbap', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Kimchi',
      },
      {
        img:15
        ,question: 'Identify the dish?',
        choices: ['Soondae', 'Kimbap', 'Kimchi', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Kimbap',
      },
      {
        img:16,
        question:'What are the ingredients in mandu – the dumplings?',
        choices:['Vegetables','Meat','Tofu','All of the above'],
        type:'MCQs',
        correctAnswer:'All of the above'
      }
     
    ],
  }