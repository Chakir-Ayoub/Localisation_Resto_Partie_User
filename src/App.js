import './App.css';
import GetStart from './GetStart';
import Home from './Home';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// function App() {
//   return (
//     <div class="row">
//   <div class="col-md-6" >
//       <div class="card border-primary mb-3">
//             <div class="card-header">
//               Type: {{addresss.type}}
//             </div>
//             <div class="card-body">
//               <ul class="list-group list-group-flush">
//                   <li class="list-group-item"><strong>City :</strong> {{addresss.city}} </li>
//                   <li class="list-group-item"><strong>Street :</strong> {{addresss.street}} </li>
//                   <li class="list-group-item"><strong>Postal :</strong> {{addresss.postal}} </li>
//                   <li class="list-group-item"><strong>Country :</strong> {{addresss.country}} </li>
//                   <li class="list-group-item text-center">
//                     <button class="btn btn-primary mr-2">Edit</button>
//                     <button class="btn btn-dark mr-2">Delete</button>
//                   </li>
//               </ul>
//             </div>
//       </div>
//   </div>
// </div>

//   );
// }
class App extends Component{
  render(){
    return (
      <Router>
        <switch>
        <Route path='/' exact={true} component={GetStart}/>
        </switch>
      </Router>
    )
  }
}

export default App;
