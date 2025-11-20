import ExpenseForm from "./combonents/ExpenseForm";
import ExpenseTable from "./combonents/ExpenseTable";
import { useState, useEffect } from "react";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("http://localhost:3000/finances");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-yellow-400 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-yellow-400 flex items-center gap-2 mb-8">
        <span>💳</span> Finance Dashboard
      </h1>

      <ExpenseForm refresh={fetchExpenses} />
      <ExpenseTable expenses={expenses} refresh={fetchExpenses} />
    </div>
  );
}
