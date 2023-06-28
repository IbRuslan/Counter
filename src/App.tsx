import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter/Counter";

const App = () => {

    return (
        <div className="App">
            <Counter/>
        </div>
    );
};

export default App;
















// function App() {
//
//     let [counter, setCounter]=useState(0)
//
//     const changeCounter = (num: number) => {
//         setCounter(num)
//     }
//
//     return (
//         <div className="App">
//             <Counter counter={counter} changeCounter={changeCounter}/>
//         </div>
//     );
// }
//
// export default App;





