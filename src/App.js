import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpensesSummary from "./components/IncomeExpensesSummary";
import TransactionList from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      
      <Header />
      
      <div className="container">
        <Balance />
        <IncomeExpensesSummary />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
