import Navbar from "./components/Navbar.js";
import CardContainer from "./components/CardContainer.js";
const App = () => {
  return (
    <div className="App flex">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-5xl mx-16 mt-10">Notes</h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
