import Balance from "./components/Balance";
import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      
      <Header />
      
      <div className="container">
        <Balance />
      </div>

    </GlobalProvider>
  );
}

export default App;
