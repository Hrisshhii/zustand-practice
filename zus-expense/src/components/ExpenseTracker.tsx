import { useState } from "react";
import { useStore } from "../store";

const ExpenseTracker=()=>{
  const {expenses,addExpense,removeExpense}=useStore();
  const [description,setDescription]=useState<string>('');
  const [amount,setAmount]=useState<number | ''>('');
  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-purple-500">Expense Tracker</h1>

        <div className="space-y-4 mb-6">
          <input type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="Expense Description"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input type="number" value={amount} onChange={e=>setAmount(e.target.value===""?'':Number(e.target.value))} placeholder="Expense Amount"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseTracker