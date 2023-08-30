import './App.css';
import Counter from './components/Counter.jsx';
import ShoutIt from './components/ShoutIt.jsx';

function App() {
  return (
    <>
      <section>
        <h1>Counter demo</h1>
        <Counter />
        <Counter />
      </section>

      <section>
        <h1>ShoutIt demo</h1>
        <ShoutIt />
      </section>
    </>
  );
}

export default App;
