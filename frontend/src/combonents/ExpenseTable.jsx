import ExpenseRow from "./ExpenseRow";


export default function ExpenseTable({ expenses, refresh }) {
return (
<div className="w-full max-w-3xl mt-10 bg-[#1e293b] rounded-xl shadow-lg overflow-hidden">
<table className="w-full text-left">
<thead className="bg-[#0f172a]">
<tr>
<th className="py-3 px-4 text-yellow-400">Title</th>
<th className="py-3 px-4 text-yellow-400">Amount</th>
<th className="py-3 px-4 text-yellow-400">Actions</th>
</tr>
</thead>
<tbody>
{expenses.map((item) => (
<ExpenseRow key={item._id} item={item} refresh={refresh} />
))}
</tbody>
</table>
</div>
);
}