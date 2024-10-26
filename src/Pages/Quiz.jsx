import { useState, useEffect } from 'react';
import datas from '../Data.json';

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [scores, setScores] = useState({
        "Physical Touch": 0,
        "Words of Affirmation": 0,
        "Acts of Service": 0,
        "Quality Time": 0,
        "Receiving Gifts": 0
    });
    const [results, setResults] = useState(null);

    const handleAnswerClick = (loveLanguage) => {
        setScores((prevScores) => {
            const updatedScores = {
                ...prevScores,
                [loveLanguage]: prevScores[loveLanguage] + 1
            };

            if (currentQuestion < datas.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                calculateResults(updatedScores);
            }
            return updatedScores;
        });
    };

    const calculateResults = (finalScores) => {
        const totalAnswers = datas.length;
        const finalResults = Object.keys(finalScores).reduce((acc, language) => {
            acc[language] = ((finalScores[language] / totalAnswers) * 100).toFixed(0);
            return acc;
        }, {});
        setResults(finalResults);
    };

    return (
        <main className="flex flex-col items-center px-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 py-14">
                Love Language Test
            </h1>

            {!results ? (
                <>
                    <div className="flex justify-center items-center mb-8">
                        <p className="text-gray-700 font-medium">
                            Question <span className="font-bold">{currentQuestion}/{datas.length}</span>
                        </p>
                        <div className="w-32 h-1 ml-5 rounded-lg overflow-hidden bg-cyan-100">
                            <div
                                className="h-1 bg-cyan-500 transition-all duration-300 ease-out"
                                style={{ width: `${((currentQuestion) / datas.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h2 className="text-lg text-center sm:text-2xl mb-12 text-gray-800 font-semibold">
                        Select the option that resonates with you.
                    </h2>

                    {datas[currentQuestion].options.map((data, index) => (
                        <div
                            onClick={() => handleAnswerClick(data.loveLanguage)}
                            key={index}
                            className="py-8 px-6 rounded-2xl border border-gray-300 hover:border-gray-600 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out max-w-lg w-full mb-5 cursor-pointer bg-white"
                        >
                            <h1 className="text-lg sm:text-xl font-medium text-gray-700">
                                {data.answer}
                            </h1>
                        </div>
                    ))}
                </>
            ) : (
                <div className="w-full max-w-lg mt-8">
                    <h2 className="text-2xl font-bold mb-5 text-center text-cyan-500">Your Love Language Results:</h2>
                    {Object.entries(results)
                        .sort(([, a], [, b]) => b - a)
                        .map(([language, percentage], index) => (
                            <div key={index} className="mb-4">
                                <div className="flex justify-between mb-1">
                                    <span className="text-lg font-semibold text-gray-700">{language}</span>
                                    <span className="text-lg font-semibold text-gray-700">{percentage}%</span>
                                </div>
                                <div className="w-full h-5 bg-gray-200 rounded-full">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500 ease-out ${percentage > 0
                                                ? "bg-cyan-500"
                                                : "bg-gray-300"
                                            }`}
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                </div>
            )}
        </main>
    );
}
