import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Footer from './Footer';

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greeting name="vasavi" message="Let's learn React together!" />
      <h2>This is our brand new React course</h2>
      <h3>Hope you enjoy our course:) </h3>
      <Footer />
    </div>
  );
}

export default App;
