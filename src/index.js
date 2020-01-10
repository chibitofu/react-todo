import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

import './index.scss'

// class App extends React.Component {
//     render(){
//         return (
//             <div>
//               <Navbar/>
//               <TodoList/>
//             </div>
//           );
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);