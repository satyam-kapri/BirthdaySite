// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 3,
    perQuestionScore: 1,
    questions: [
      { img:'https://sugaryums.com/wp-content/uploads/2023/03/Baechu-Kimchi-Cabbage-Kimchi-Recipe-SugarYums-17.jpg',
        question: 'What is this korean dish called?',
        choices: ['Kimchi', 'Bulgogi', 'kimbap', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Kimchi',
      },
      {
        img:'https://www.seriouseats.com/thmb/WtcBGMWbdUcAIVe8zg4VCm2aqc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__01__20200122-gimbap-vicky-wasik-24-f5ed1075f35846a29e0812ee053a1bf8.jpg'
        ,question: 'Identify the dish?',
        choices: ['Soondae', 'Kimbap', 'Kimchi', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Kimbap',
      },
      {
        img:'https://img.veenaworld.com/wp-content/uploads/2021/12/Mandu.jpg',
        question:'What are the ingredients in mandu – the dumplings?',
        choices:['Vegetables','Meat','Tofu','All of the above'],
        type:'MCQs',
        correctAnswer:'All of the above'
      }
     
    ],
  }