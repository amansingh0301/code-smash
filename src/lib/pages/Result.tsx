import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { InitialState } from '../../store/initialState';
import { useNavigate } from 'react-router-dom';
export function Result() {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    const questionsList = useSelector((state: InitialState) => state.contest.questionsList);
    const result = useSelector((state: InitialState) => state.contest.result);

    const onPopState = () => {
        navigate('/form');
    }

    useEffect(() => {
        window.addEventListener('popstate', onPopState);

        return () => window.removeEventListener('popstate', onPopState);
    },[])
    return (
        <div className='result slide-in-right'>
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
            <div className='questionsResponse slide-in-right'>
                {
                    questionsList.map((questionId, index) => {
                        return result.questions.filter(questionDetail => questionDetail._id === questionId).map(
                            question => {
                                return (
                                    <>
                                        <div className='questionLine slide-in-right'>
                                            Q{index+1}. {question.question}
                                        </div>
                                        <div className='options slide-in-right'>
                                            {
                                                question.options.map(option => {
                                                    return (
                                                        <div className={`questionOptions ${question.answer === option ? 'correctOption' : ''} ${ question.marked !== question.answer && question.marked === option ? 'choseWrong' : ''} ${question.marked === '' && question.answer !== option ? 'unattempted' : ''}`}>
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
                                    </>
                                )
                            }
                        )
                    })
                }
            </div>
        </div>
    )
}