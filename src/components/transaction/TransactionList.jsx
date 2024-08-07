import { UseGlogbalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";
function TransactionList() {
  const { transactions } = UseGlogbalState();
  return (
    <div className="w-full p-4 max-h-[60vh] overflow-y-auto">
      <h3 className="text-slate-300 text-xl font-bold w-full mb-4">History</h3>
      <ul className="space-y-2">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </div>
  );
}
export default TransactionList;
