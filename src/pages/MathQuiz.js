import React, { useState } from 'react';
import AnswerQuiz from '../mathQuiz/AnswerQuiz';
import QuizSettings from '../mathQuiz/QuizSettings';

function MathQuiz() {
    const [quiz, setQuiz] = useState({
        questionNo: null,
        maxDigits: null,
        timeLimit: null, // in seconds
        operation: {
            add: null,
            subs: null,
            multi: null,
            div: null,
        }
    });

    const [inSettings, setInSettings] = useState(true);
    const [inAnswer, setInAnswer] = useState(false);

    const onSettingsSubmit = (value) => {
        setQuiz(value);
        setInSettings(false);
        setInAnswer(true);
    }

    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', height: '100vh', paddingTop: 50, overflow: 'hidden' }}
        >
            <div
                style={{ width: '90vw' }}
            >
                <QuizSettings
                    in={inSettings}
                    onSubmit={onSettingsSubmit}
                    display={inSettings ? 'block' : 'none'}
                />
                <AnswerQuiz
                    in={inAnswer}
                    quiz={quiz}
                />
            </div>
        </div>
    );
}

export default MathQuiz;