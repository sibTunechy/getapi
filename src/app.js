import React, { useEffect, useState } from 'react';
import 'App.css';
import List from './components/List';
import WithListLoading from './component/withListLoading';
// above we imported external files, components the Hooks needed


function App() {
  const Listloading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  }) // here we created a new component called ListLoading and we assign it to withListLoading thats wrapped around the List component.
    // we then create our state values loading and repos using the useState() hook.
  useEffect(() => {          // here we initialize a useEffect, whereby we are setting our initial loading state to true... then we create a constant variable called user and assigning the my Url we will be getting the repo data from.
    setAppState({ loading: true }); 
    const myUrl = 'https://api.github.com/users/sibTunechy/repos';
    fetch(myurl)      // here we are making a basic fetch request and then after the request is done we are setting the app loading state to false and populating the repos state with data we got from the request.  
      .then((res) => res.json())
      .then((repos) => {
        setAppState({ loading: false, repos: repos })
      })
  }, [setAppState]);


  return (
    <div classname='App'>
      <div className='container'>
        <h1>My Repos</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos}/>
      </div>      
      <footer>
        <div classname='footer'>
          Built{''}
          <span role='img' aria-label='love'>

          </span>{''}
          with by Ahmed Abdullahi
        </div>
      </footer>
    </div>
    // here we are rendering the component and also filling the isLoading property and repos property with their state value.
  );
}

export default App;

// 'use strict'

// class Friends extends React.Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Since</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.props.friends && this.props.friends.map(friend => {
//                         return <tr>
//                             <td>{friend._id}</td>
//                             <td>{friend.name}</td>
//                             <td>{friend.since}</td>
//                         </tr>
//                     })}
//                 </tbody>
//             </table>
//         );
//     }
// }

// App component


// 'use strict';

// class Friends extends React.Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Since</th>
//           </tr>
//         </thead>
//         <tbody>
//           {this.props.friends && this.props.friends.map(friend => {
//             return 
//             <tr>
//               <td>{friend._id}</td>
//               <td>{friend.name}</td>
//               <td>{friend.since}</td>
//             </tr>
//           })}
//         </tbody>
//       </table>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       friends: [],
//       name: '',
//       id: '',
//       notes: ''
//     };

//     this.create = this.create.bind(this);
//     this.update = this.update.bind(this);
//     this.delete = this.delete.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     // get all entities - GET
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         friends: response
//       })
//     })
//     .catch(err => { console.log(err); 
//     });
//   }

//   create(e) {
//     // add entity - POST
//     e.preventDefault();

//     // creates entity
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//       "method": "POST",
//       "headers": {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY,
//         "content-type": "application/json",
//         "accept": "application/json"
//       },
//       "body": JSON.stringify({
//         name: this.state.name,
//         notes: this.state.notes
//       })
//     })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//   update(e) {
//     // update entity - PUT
//     e.preventDefault();

//     // this will update entries with PUT
//     fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
//         "method": "PUT",
//         "headers": {
//             "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//             "x-rapidapi-key": API_KEY,
//             "content-type": "application/json",
//             "accept": "application/json"
//         },
//         "body": JSON.stringify({
//             _id: this.state.id,
//             name: this.state.name,
//             notes: this.state.notes
//         })
//         })
//         .then(response => response.json())
//         .then(response => { console.log(response);
//         })
//         .catch(err => { console.log(err); });
//   }

//   delete(e) {
//     // delete entity - DELETE
//     e.preventDefault();
//     // deletes entities
//     fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}`, {
//       "method": "DELETE",
//       "headers": {
//         "x-rapidapi-host": "fairestdb.p.rapidapi.com",
//         "x-rapidapi-key": API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }

//   handleChange(changeObject) {
//     this.setState(changeObject)
//   }

//   render() {
//     return (
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <h1 className="display-4 text-center">Make An API Call in React</h1>
//               <form className="d-flex flex-column">
//                 <legend className="text-center">Add-Update-Delete Friend</legend>
//                 <label htmlFor="name">
//                   Friend Name:
//                   <input
//                     name="name"
//                     id="name"
//                     type="text"
//                     className="form-control"
//                     value={this.state.name}
//                     onChange={(e) => this.handleChange({ name: e.target.value })}
//                     required
//                     />
//                 </label>
//                 <label htmlFor="notes">
//                   Friend notes:
//                   <input
//                     name="notes"
//                     id="notes"
//                     type="test"
//                     className="form-control"
//                     value={this.state.notes}
//                     onChange={(e) => this.handleChange({ notes: e.target.value })}
//                     required
//                     />
//                 </label>
//                 <label htmlFor="id">
//                   Friend ID:
//                   <input
//                     name="id"
//                     id="id"
//                     type="text"
//                     className="form-control"
//                     value={this.state.id}
//                     onChange={(e) => this.handleChange({ id: e.target.value })}
//                     />
//                 </label>
//                 <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
//                   Add
//                 </button>
//                 <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
//                     Update
//                 </button>
//                 <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
//                     Delete
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//     );
//   }
// }

// let domContainer = document.querySelector('#App');
// ReactDOM.render(<App />, domContainer);


































































// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       friends: [],
//       name: '',
//       id: '',
//       notes: ''
//     };

//     this.create = this.create.bind(this);
//     this.update = this.update.bind(this);
//     this.delete = this.delete.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   componentDidMount() {
//     // get all entities - GET
//     fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
//       'method': 'GET',
//       'headers': {
//         'x-rapidapi-host':
//         'fairestdb.p.rapidapi.com',
//         'x-rapidapi-key': API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       this.setState({
//         friends: response
//       })
//     })
//     .catch(err => {console.log(err);
//     })
//   }

//   create(e) {
//     // add entity - POST
//     e.preventDefault();

//     // creates entity
//     fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
//       'method': 'POST',
//       'headers': {
//         'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
//         'x-rapidapi-key': API_KEY,
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       },
//       'body': JSON.stringify({
//         name: this.state.name,
//         notes: this.state.notes
//       })
//     })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response)
//     })
//     .catch(err => {
//       console.log(err)
//     });
//   }

//   update(e) {
//     // update entity - PUT
//     e.preventDefault();

//     // this will update entries with PUT
//     fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
//       'method': 'PUT',
//       'headers': {
//         'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
//         'x-rapidapi-key': API_KEY,
//         'content-type': 'application/json',
//         'accept': 'application/json'
//       },
//       'body': JSON.stringify({
//         _id: this.state.id,
//         name: this.state.name,
//         notes: this.state.notes
//       })
//     })
//     .then(response => response.json())
//     .then(response => {console.log(response);
//     })
//     .catch(err => {console.log(err); });

//   }

//   delete(e) {
//     // delete entity - DELETE
//     e.preventDefault();

//     // delete entities
//     fetch('https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${this.state.id}', {
//       'method': 'DELETE',
//       'headers': {
//         'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
//         'x-rapidapi-key': API_KEY
//       }
//     })
//     .then(response => response.json())
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }

//   handleChange(changeObject) {
//     this.setState(changeObject)
//   }

//   render() {
//     return (
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               <h1 className="display-4 text-center">Make An API Call in React</h1>
//               <form className="d-flex flex-column">
//                 <legend className="text-center">Add-Update-Delete Friend</legend>
//                 <label htmlFor="name">
//                   Friend Name:
//                   <input
//                     name="name"
//                     id="name"
//                     type="text"
//                     className="form-control"
//                     value={this.state.name}
//                     onChange={(e) => this.handleChange({ name: e.target.value })}
//                     required
//                     />
//                 </label>
//                 <label htmlFor="notes">
//                   Friend notes:
//                   <input
//                     name="notes"
//                     id="notes"
//                     type="test"
//                     className="form-control"
//                     value={this.state.notes}
//                     onChange={(e) => this.handleChange({ notes: e.target.value })}
//                     required
//                     />
//                 </label>
//                 <label htmlFor="id">
//                   Friend ID:
//                   <input
//                     name="id"
//                     id="id"
//                     type="text"
//                     className="form-control"
//                     value={this.state.id}
//                     onChange={(e) => this.handleChange({ id: e.target.value })}
//                     />
//                 </label>
//                 <button className="btn btn-success" type='button' onClick={(e) => this.create(e)}>
//                   Add
//                 </button>
//                 <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>
//                     Update
//                 </button>
//                 <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>
//                     Delete
//                 </button>
//               </form>
//               <Friends friends={this.state.friends}/>
//               {/* where friends is a property with the value this.state.friends    */}
//             </div>
//           </div>
//         </div>
//     );
//   }
// }

// let domContainer = document.querySelector('#App');
// ReactDOM.render(<App />, domContainer);