
import './App.css';

function App() {
  return (
    <div className="App">
<form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" className="btn btn-primary">log in</button>
  <div className="form-group">
    <label htmlFor="exampleInputMessage">FORGOT YOUR PASSWORD?</label>
  </div>
  <button Type="Create New Account" className='btn btn-primary'>Create New Account</button>
</form>
    </div>
  );
}

export default App;
