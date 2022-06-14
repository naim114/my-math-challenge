import React, { useState } from 'react';
import { generateQuiz } from '../controller/MathQuizUtils';
import AnswerQuiz from '../mathQuiz/AnswerQuiz';
import QuizSettings from '../mathQuiz/QuizSettings';
import StartQuiz from '../mathQuiz/StartQuiz';

function MathQuiz() {
    const [section, setSection] = useState(
        <StartQuiz onSubmit={() => {
            setSection(
                <QuizSettings
                    onSubmit={onSettingsSubmit}
                />
            )
        }} />
    );

    const [quiz, setQuiz] = useState();

    const onSettingsSubmit = (value) => {
        setSection(
            <AnswerQuiz
                quiz={generateQuiz(value)}
            />
        );
    }

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', height: '100vh', paddingTop: 50, overflow: 'hidden' }}
        >
            <div
                style={{ width: '90vw' }}
            >
                {
                    section
                }
            </div>
        </div>
    );
}

export default MathQuiz;