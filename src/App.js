import "./App.css";
import Articles from "./component/Articles";

function App() {
  return (
    <>
      <h1 className="App">NY Times Articles</h1>
      <section className="container">
        <Articles />
      </section>
    </>
  );
}

export default App;
