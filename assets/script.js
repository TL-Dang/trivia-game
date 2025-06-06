const questions = [
  {
    question:
      'How much hotter is a lighting bolt compared to the surface of the sun?',
    choices: [
      'Twice as hot',
      'Thice as hot',
      'Four times as hot',
      'Five times as hot',
      'A lighting bolt is not hotter than the surface of the sun',
    ],
    correct: 3,
  },
  {
    question: ' "Pink Slime" is a by product of what type of meat?',
    choices: ['Chicken', 'Beef', 'Pork', 'Fish', 'Tofu'],
    correct: 1,
  },
  {
    question:
      'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
    choices: [
      'A woodchuck would chuck as much wood as a woodchuck could chuck if a woodchuck could chuck wood',
      'Infinity & Beyond',
      'Kaio-ken x100',
      '100 kilometres',
      'I dunno 🤷​​',
    ],
    corret: 0,
  },
  {
    question: 'In 1940, the first McDonalds opened in _________.',
    choices: [
      'Forest City, UT',
      'San Bernardino, CA',
      'Cincinnati, OH',
      'Eerie, IN',
      'Atlantic City, NJ',
    ],
    correct: 1,
  },
  {
    question: 'The driest place on Earth is ...?',
    choices: [
      'Death Valley, USA',
      'Aswan, Egypt',
      'Atacama Desert, Chile',
      'Ica, Peru',
      'McMurdo Dry Valleys, Antarctica',
    ],
    correct: 4,
  },
  {
    question: 'The only jockey to win a race while decrease is ...?',
    choices: [
      'Frank Hayes',
      'Isaac Burns Murphy',
      'Jimmy Savile',
      'Aldo Montoya',
      'Pat Day',
    ],
    correct: 0,
  },
  {
    question: 'The largest freshwater lake by surface area is ...?',
    choices: [
      'Great Bear Lake',
      'Lake Tahoe',
      'Lake Superior',
      'Lake Huron',
      'Lake Baikal',
    ],
    correct: 2,
  },
  {
    question: 'What domesticated cat breed runs the fastest?',
    choices: [
      'American Shorthair',
      'Siamese',
      'Ocicat',
      'Manx',
      'Egyptian Mau',
    ],
    correct: 4,
  },
  {
    question: 'Which animal has the strongest bite?',
    choices: [
      'Flying Squirrel',
      'Nile Crocodile',
      'Snapping Turtle',
      'Siberian Tiger',
      'Hippopotamus',
    ],
    correct: 1,
  },
  {
    question: 'The largest freshwater lake by volume is ...?',
    choices: [
      'Lake Victoria',
      'Lake Tanganyika',
      'Lake Superior',
      'Lake Baikal',
      'Lake Marion',
    ],
    correct: 3,
  },
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 120;

function displayQuestion() {
  const question = questions[currentQuestion];
  document.querySelector('.question').textContent = question.question;

  const choices = document.querySelector('.choices');
  options.innerHTML = '';
  question.choices.forEach((choice, index) => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', () => selectOption(index));
    options.appendChild(li);
  });

  startTimer();
}

function selectChoice(index) {
  const choices = document.querySelectorAll('.choices li');
  choices.forEach((choice) => choice.classList.remove('selected'));
  choices[index].classList.add('selected');
}

function checkAnswer() {
  const selectedChoice = document.querySelector('.choices li.selected');
  if (selectedChoice) {
    const selectedIndex = Array.from(
      selectedChoice.parentNode.children
    ).indexOf(selectedChoice);
    if (selectedIndex === questions[currentQuestion].answer) {
      score++;
    }
    document.querySelector('.result').textContent = `Score: ${score}/${
      currentQuestion + 1
    }`;
  }
}

function nextQuestion() {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  }
}
