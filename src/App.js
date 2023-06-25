import logo from './logo.svg';
import './App.css';
import { Cats } from './components/Cats';
import { CreatePost } from './components/Posts/CreatePosts';
import { Posts } from './components/Posts/Post';

function App() {
  return (
    <div className="App">
      {/*<Cats/>*/}
      <Posts/>
      <CreatePost />
    </div>
  );
}

export default App;
