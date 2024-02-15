'use client';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';

const quizData = [
  {
    "question": "Skin Type",
    "answers": ["Oily", "Dry", "Combination", "Sensitive", "Normal"],
    "type": "single"
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
    "question": "Budget",
    "answers": ["Low as Possible", "Range:", "Does Not Matter"],
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
    "answers": ["Simple (3 Steps)", "Custom", "No Preference"],
    "type": "single"
  }
];

const SkincareQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  const handleSubmission = () => {
    // Create a JSON object to represent the quiz results
    const quizResults = {
      answers: selectedAnswers,
    };

    // Convert the quiz results object to a JSON string
    const jsonResults = JSON.stringify(quizResults);

    // Output the JSON string to the console
    console.log(jsonResults);
  };

  if (!quizStarted) {
    return (
      <div>
        {/* JSX for quiz introduction */}
      </div>
    );
  }

  return (
    <div>
      {/* JSX for quiz questions */}
      <div className="flex justify-center w-full mb-10">
        {currentQuestionIndex > 0 && (
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className="btn btn-accent mr-2 mt-5 w-1/4"
          >
            Previous
          </button>
        )}
        {currentQuestionIndex < quizData.length - 1 ? (
          <button onClick={handleNext} className="btn btn-accent mr-2 mt-5 w-1/4">
            Next
          </button>
        ) : (
          <button onClick={handleSubmission} className="btn btn-accent mr-2 mt-5 w-1/4">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default SkincareQuiz;