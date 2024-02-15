  'use client';
  import React from 'react';
  import { useState } from 'react';
  import NavBar from '../components/NavBar';

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
      const [selectedAnswers, setSelectedAnswers] = useState({}); // Initialize selectedAnswers as an empty object

      const handleStartQuiz = () => {
          setQuizStarted(true);
      };

      const handleNext = () => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      };

      const handleAnswer = (questionIndex, answer) => {
          setSelectedAnswers(prevAnswers => ({
              ...prevAnswers,
              [questionIndex]: quizData[questionIndex].type === 'multiple'
                  ? [...(prevAnswers[questionIndex] || []), answer]
                  : answer
          }));
      };

      const handleSubmit = () => {
          console.log(JSON.stringify(selectedAnswers)); // Convert selectedAnswers to JSON and log it
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
