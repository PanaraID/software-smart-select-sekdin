import React, { useState } from 'react';
import Footer from '../partials/Footer';
import { useNavigate } from 'react-router-dom';

function ColorVisionTest() {
    const [questions, setQuestions] = useState([
        { image: "1", answer: "X" },
        { image: "2", answer: "Q" },
        { image: "3", answer: "99" },
        { image: "4", answer: "9" },
        { image: "5", answer: "62" },
        { image: "6", answer: "98" },
    ]);
    const [results, setResults] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const navigatge = useNavigate()

    const handleSubmit = () => {
        const question = questions[currentQuestion];
        const result = {
            questionIndex: question.image,
            correctAnswer: question.answer,
            userAnswer: userAnswer.toUpperCase(),
            result: userAnswer.toUpperCase() === question.answer ? 'Correct' : 'Incorrect'
        };
        setResults([...results, result]);
        setUserAnswer('');

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Show results
        }
    };

    return (
        <>
            <div className="container p-5">
                <h1 className="mb-4 text-center">Color Blindness Test</h1>
                {currentQuestion < questions.length ? (
                    <div className="mb-3">
                        <img src={`images/image${questions[currentQuestion].image}.jpg`} className="img-fluid" alt={`Question ${questions[currentQuestion].image}`} />
                        <label htmlFor="answer" className="form-label">Enter the alphabet or number you see:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="answer"
                            name="answer"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                ) : (
                    <div id="resultTable">
                        <h2 className="text-center">Results</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Image</th>
                                    <th>Correct Answer</th>
                                    <th>Your Answer</th>
                                    <th>Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><img src={`images/image${result.questionIndex}.jpg`} className="img-fluid" alt={`Question ${result.questionIndex}`} /></td>
                                        <td>{result.correctAnswer}</td>
                                        <td>{result.userAnswer}</td>
                                        <td>{result.result}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <button onClick={() => navigatge('/') } className="btn btn-primary">Home</button>
            </div>

            <Footer />
        </>
    );
}

export default ColorVisionTest;
