import CardContainer from "./components/CardContainer.js";
import Navbar from "./components/Navbar.js";
import { NotesContextProvider } from "./context/NotesContext.js";

const App = () => {
  return (
    <NotesContextProvider>
      <div className="App flex">
        <Navbar />
        <div className="flex-grow">
          <h1 className="text-5xl sticky px-16 py-10">Notes</h1>
          <CardContainer />
        </div>
      </div>
    </NotesContextProvider>
  );
};

export default App;
