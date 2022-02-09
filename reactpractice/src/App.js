/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './action/index'

function App() {
  const myState = useSelector((state) => state.changeState )
  const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
    <h1 >Welcome to increment decrement counter</h1>

    <div className='counter'>
      <a className='counter_minus' title = "Decrement"
      onClick={() => dispatch(decrement()) }
      ><span>-</span></a>
      <input name="counter" type="text" className='counter_text' value= {myState} />
      
      <a className='counter_plus' title = "Increment"
      onClick={() => dispatch(increment())}
      ><span>+</span></a>
    </div>
    </div>
    </>
  );
}

export default App;
