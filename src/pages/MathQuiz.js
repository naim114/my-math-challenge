import React, { useState } from 'react';
import { generateQuiz } from '../controller/MathQuizUtils';
import AnswerQuiz from '../mathQuiz/AnswerQuiz';
import FinishQuiz from '../mathQuiz/FinishQuiz';
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

    const onFinish = (finalScore, length) => {
        console.log("Your final score is " + finalScore);
        console.log("length: " + length);

        setSection(
            <FinishQuiz
                finalScore={finalScore}
                length={length}
                onSubmit={() => setSection(<QuizSettings
                    onSubmit={onSettingsSubmit}
                />)}
            />
        );
    }

    const onSettingsSubmit = (value) => {
        setSection(
            <AnswerQuiz
                quiz={generateQuiz(value)}
                onFinish={onFinish}
            />
        );
    }

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', height: '100%', paddingTop: 50, overflow: 'hidden' }}
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