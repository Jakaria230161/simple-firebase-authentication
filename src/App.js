
import './App.css';
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import app from './Firebase/firebase.init';

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log("google")
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      
    </div>
  );
}

export default App;

