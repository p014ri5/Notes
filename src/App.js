import CardContainer from "./components/CardContainer.js";
import Navbar from "./components/Navbar.js";
const App = () => {
  return (
    <div className="App flex">
      <Navbar />
      <div className="flex-grow">
        <h1 className="text-5xl sticky mx-16 pb-5 mt-10">Notes</h1>
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
