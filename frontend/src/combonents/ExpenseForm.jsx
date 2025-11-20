import { useState } from "react";
import { PlusCircle } from "lucide-react";


export default function ExpenseForm({ refresh }) {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");


const addExpense = async () => {
if (!title || !amount) return;


await fetch("http://localhost:3000/finances", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ title, amount }),
});


setTitle("");
setAmount("");
refresh();
};


return (
<div className="w-full max-w-md bg-[#1e293b] p-6 rounded-xl shadow-lg border border-yellow-500/20">
<input
type="text"
placeholder="Expense Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
className="w-full p-3 mb-4 rounded-lg bg-[#0f172a] border border-yellow-500 text-yellow-300 outline-none"
/>


<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e) => setAmount(e.target.value)}
className="w-full p-3 mb-4 rounded-lg bg-[#0f172a] border border-gray-600 outline-none"
/>


<button
onClick={addExpense}
className="w-full py-3 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center gap-2 text-gray-300"
>
<PlusCircle size={20} /> Add Expense
</button>
</div>
);
}