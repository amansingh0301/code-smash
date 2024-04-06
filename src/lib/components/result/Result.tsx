import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InitialState } from '../../../store/initialStates';
import { Chat } from '../Chat';
export function Result() {
    const navigate = useNavigate();
    const questionsList = useSelector((state: InitialState) => state.contestGk.questionsList);
    const result = useSelector((state: InitialState) => state.contestGk.result);
    const mode = useSelector((state: InitialState) => state.form.mode);

    const onPopState = () => {
        navigate('/form');
    }

    useEffect(() => {
        window.addEventListener('popstate', onPopState);

        return () => window.removeEventListener('popstate', onPopState);
    },[])
    return (
        <>
            <div className='result slide-in-top'>
                <div className='analytics'>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Total Questions
                                </th>
                                <th className='noOfQuestionsCorrect'>
                                    Correct
                                </th>
                                <th>
                                    Unaatempted
                                </th>
                                <th className='noOfQuestionsWrong'>
                                    Wrong
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{result.result.correct + result.result.unAttempted + result.result.inCorrect}</td>
                                <td className='noOfQuestionsCorrect'>{result.result.correct}</td>
                                <td>{result.result.unAttempted}</td>
                                <td className='noOfQuestionsWrong'>{result.result.inCorrect}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='questionsResponse slide-in-top'>
                    {
                        questionsList.map((questionId, index) => {
                            return result.questions.filter(questionDetail => questionDetail._id === questionId).map(
                                question => {
                                    return (
                                        <div className={`questionAns ${!question.marked ? 'unattemptedQuestion' : question.marked === question.answer ? 'correctQuestion' : 'wrongQuestion'}`}>
                                            <div className='questionLine slide-in-top'>
                                                Q{index+1}. {question.question}
                                            </div>
                                            <div className='options slide-in-top'>
                                                {
                                                    question.options.map(option => {
                                                        return (
                                                            <div className={`questionOptions ${question.answer === option ? 'correctOption' : ''} ${ question.marked !== question.answer && question.marked === option ? 'choseWrong' : ''}`}>
                                                                {option}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='explanation'>
                                                {
                                                question.explanation && 
                                                <>
                                                        <div>Explanation: </div>
                                                        <div>{question.explanation}</div>
                                                </>
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        })
                    }
                </div>
            </div>
            <Chat/>
        </>
    )
}