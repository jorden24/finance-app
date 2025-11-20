import { Trash2 } from "lucide-react";


export default function ExpenseRow({ item, refresh }) {
const deleteExpense = async (id) => {
await fetch(`http://localhost:3000/finances/${id}`, {
method: "DELETE",
});
refresh();
};


return (
<tr className="border-t border-gray-700">
<td className="py-3 px-4">{item.title}</td>
<td className="py-3 px-4 text-green-400 font-semibold">${item.amount}</td>
<td className="py-3 px-4">
<button
onClick={() => deleteExpense(item._id)}
className="text-red-400 hover:text-red-600"
>
<Trash2 size={20} />
</button>
</td>
</tr>
);
}