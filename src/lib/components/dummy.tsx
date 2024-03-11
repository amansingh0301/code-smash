
import { useDispatch } from 'react-redux';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { updateScore } from '../../store/actions';
import { InitialState } from '../../store/initialState';

function Dummy() {
  const score = useSelector((state: InitialState) => state.contest.score)
  const dispatch = useDispatch();
  const handleIncreament = () => {
    dispatch(updateScore(2));
  }
  return (
    <div>
        <header>{score}</header>
        <button onClick={handleIncreament}>
            Increase
        </button>
    </div>
  );
}

export default React.memo(Dummy);
