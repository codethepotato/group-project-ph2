//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

function App() {

  // const [allPokemons, setAllPokemons] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3001/pokemon')
  //     .then((r) => r.json())
  //     .then((allPokemons) => console.log(allPokemons))
  // }, [])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
