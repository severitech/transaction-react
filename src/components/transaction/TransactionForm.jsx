import { useState } from "react"
import {UseGlogbalState} from '../../context/GlobalState'



function TransactionForm() {
  const {addTransactions} = UseGlogbalState()
  const [description, setDescription] = useState()
  const [amount, setAmount] = useState(0)


  const onsubmit = (e)=>{
    e.preventDefault();
    const now = new Date();
    const currentDateTime = `${now.toLocaleDateString()}`;
   
    addTransactions({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
      date: currentDateTime
    })
  }
  return (
    <form onSubmit={onsubmit}>
      <h2>Description</h2>
      <input type="text" placeholder="Enter a Description" onChange={(e) => setDescription( e.target.value)} className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 h-full w-full"value={description}/ >
      <input type="number" step="0.01" placeholder ="0.00" onChange={(e) => setAmount(e.target.value)}className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 h-full w-full"/>
      <button className="bg-indigo-700 text-white rounded-lg px-3 py-2 block mb-2 w-full hover:bg-indigo-500 ">Add Transaction</button>
    </form>
  )
}

export default TransactionForm