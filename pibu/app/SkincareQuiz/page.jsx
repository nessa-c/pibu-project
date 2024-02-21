'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

const quizData = [
    {
      "question": "Skin Type",
      "answers": ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
      "type": "multiple"
    },
    {
      "question": "Age Range",
      "answers": ["Prefer Not to Say", "10s", "20s", "30s", "40s", "50s", "60s", "70s+"],
      "type": "single"
    },
    {
      "question": "Concerns",
      "answers": ["Acne", "Sun Damage", "Hyperpigmentation", "Dullness", "Fine Lines", "Intense Dryness", "Redness", "Texture", "Blackheads"],
      "type": "multiple"
    },
    {
      "question": "Budget (Enter 0 for lowest possible recommendation)",
      "answers": ["Max Budget: "],
      "type": "single"
    },
    {
      "question": "Personal Values",
      "answers": ["100% natural", "Cruelty-Free", "Clean Manufacturing", "Ethical Leadership", "Locally Manufactured", "Organic", "Recyclable Packaging", "Inclusivity", "Plastic-Free"],
      "type": "multiple"
    },
    {
      "question": "Allergies",
      "answers": ["Fragrance", "Preservatives", "Nickel", "Sulfates", "Essential Oils", "Propylene Glycol", "Retinoids", "Lanolin (Wool)", "Latex", "Methylisothiazolinone (MI)", "Cocamidopropyl Betaine"],
      "type": "multiple"
    },
    {
      "question": "Lifestyle",
      "answers": ["Wear Makeup", "Often Outside", "Irregular/Lack of Sleep", "Stressed", "Dehydrated"],
      "type": "multiple"
    },
    {
      "question": "Skincare Routine Preference",
      "answers": ["Cleanser", "Toner", "Serum","Exfoliant", "Moisturizer", "Sunscreen"],
      "type": "multiple"
    }
];

const SkincareQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false); // State to control the visibility of results

  const preSelectedAnswers = ['Cleanser', 'Moisturizer', 'Sunscreen'];

  useEffect(() => {
      setSelectedAnswers(prevAnswers => ({
          ...prevAnswers,
          [quizData.length - 1]: preSelectedAnswers
      }));
  }, []);

  const handleStartQuiz = () => {
      setQuizStarted(true);
  };

  const handleNext = () => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswer = (questionIndex, answer) => {
      setSelectedAnswers(prevAnswers => {
          const currentAnswers = prevAnswers[questionIndex] || [];
          const updatedAnswers = quizData[questionIndex].type === 'multiple'
              ? currentAnswers.includes(answer)
                  ? currentAnswers.filter(selectedAnswer => selectedAnswer !== answer)
                  : [...currentAnswers, answer]
              : [answer];
          return {
              ...prevAnswers,
              [questionIndex]: updatedAnswers.length > 0 ? updatedAnswers : undefined
          };
      });
  };

  const handleSubmit = () => {
    const postData = {
        skin_type: selectedAnswers[0] ? selectedAnswers[0][0] : null, // Assuming 'skin_type' is the answer to the first question
        age_range: selectedAnswers[1] ? selectedAnswers[1][0] : null, // Assuming 'age_range' is the answer to the second question
        concerns: selectedAnswers[2] || [], // Assuming 'concerns' is the answer to the third question
        budget: selectedAnswers[3] ? parseFloat(selectedAnswers[3][0]) : null, // Assuming 'budget' is the answer to the fourth question
        personal_values: selectedAnswers[4] || [], // Assuming 'personal_values' is the answer to the fifth question
        allergies: selectedAnswers[5] || [], // Assuming 'allergies' is the answer to the sixth question
        lifestyle: selectedAnswers[6] || [], // Assuming 'lifestyle' is the answer to the seventh question
        skincare_routine: selectedAnswers[7] || [], // Assuming 'skincare_routine' is the answer to the eighth question
        // Add more fields as needed
    };

    axios.post('http://localhost:8000/skinquiz/', postData)
        .then(response => {
            // Handle successful submission
            setShowResults(true); // Optionally, show results after successful submission
        })
        .catch(error => {
            // Handle error
            console.error('Error submitting quiz results:', error);
        });
};


  const hasAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  if (!quizStarted) {
      return (
          <div>
              <NavBar />
              <h1 className="text-xl font-medium text-secondary text-center">Welcome to the Skincare Quiz!</h1>
              <div className="flex justify-center">
                  <p className="py-5 lg:w-2/3 text-center leading-loose px-5">
                      "Welcome to our personalized skincare quiz designed to help you discover the perfect skincare routine tailored to your unique needs and preferences. With a myriad of skincare products available, it can be overwhelming to find what works best for your skin type, concerns, lifestyle, and values. By answering a few simple questions about your skin type, age range, concerns, budget, personal values, allergies, lifestyle, and skincare routine preference, we'll provide you with personalized recommendations to achieve your skincare goals effectively and efficiently. Let's embark on this journey towards clear and healthy skin together!"
                  </p>
              </div>
              <div className="flex justify-center">
                  <button onClick={handleStartQuiz} className="btn btn-secondary mr-2 mt-5 px-10 w-1/2 ">Start Quiz</button>
              </div>
          </div>
      );
  }

  if (showResults) {
      return (
          <div>
              <NavBar />
              <h1 className="text-xl font-medium text-secondary text-center">Quiz Results</h1>
              <div className="flex flex-col items-center justify-center my-2">
                  {Object.keys(selectedAnswers).map((questionIndex, index) => (
                      <div key={index} className="mb-4">
                          <h2 className="font-semibold mb-2">{quizData[questionIndex].question}</h2>
                          <ul>
                              {selectedAnswers[questionIndex].map((answer, answerIndex) => (
                                  <li key={answerIndex}>{answer}</li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
      );
  }

  return (
      <div>
          <NavBar />
          <div>
              <h1 className="text-xl font-medium text-secondary text-center">{`Question ${currentQuestionIndex + 1}: ${quizData[currentQuestionIndex].question}`}</h1>
              <div className="flex flex-col items-center justify-center my-2">
                  {quizData[currentQuestionIndex].answers.map((answer, answerIndex) => (
                      <React.Fragment key={answerIndex}>
                          {answer === "Max Budget: " ? (
                              <input
                                  type="text"
                                  placeholder="Enter max budget"
                                  value={selectedAnswers[currentQuestionIndex] !== undefined ? `$${selectedAnswers[currentQuestionIndex]}` : ''}
                                  onChange={(e) => {
                                      let value = e.target.value.replace(/\$/g, '').trim();
                                      if (value === '') {
                                          value = '0';
                                      }
                                      if (/^-?[0-9]\d*\.?\d*$/.test(value)) {
                                          handleAnswer(currentQuestionIndex, parseFloat(value));
                                      }
                                  }}
                                  pattern="^-?[0-9]\d*\.?\d*$"
                                  className="input-field my-2 w-1/6 rounded-2xl text-center"
                              />
                          ) : (
                              <button
                                  onClick={() => handleAnswer(currentQuestionIndex, answer)}
                                  className={`btn btn-secondary my-2 w-1/2 ${selectedAnswers[currentQuestionIndex] && selectedAnswers[currentQuestionIndex].includes(answer) ? 'selected' : ''}`}
                              >
                                  {answer}
                              </button>
                          )}
                      </React.Fragment>
                  ))}
              </div>
          </div>
          <div className="flex justify-center w-full mb-10">
              {currentQuestionIndex > 0 && (
                  <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)} className="btn btn-accent mr-2 mt-5 w-1/4">Previous</button>
              )}
              {hasAnswerSelected && currentQuestionIndex < quizData.length - 1 ? (
                  <button onClick={handleNext} className="btn btn-accent mr-2 mt-5 w-1/4">Next</button>
              ) : (
                  currentQuestionIndex === quizData.length - 1 && (
                      <button onClick={handleSubmit} className="btn btn-accent mr-2 mt-5 w-1/4">Submit</button>
                  )
              )}
          </div>
      </div>
  );
};

export default SkincareQuiz;

