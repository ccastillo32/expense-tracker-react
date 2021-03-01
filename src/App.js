import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpensesSummary from "./components/IncomeExpensesSummary";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      
      <Header />
      
      <div className="container">
        <Balance />
        <IncomeExpensesSummary />
      </div>

    </GlobalProvider>
  );
}

export default App;
