import { UseGlogbalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = UseGlogbalState();
  return (
    <li className=" bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
      <div>
        <span className="px-4">{transaction.date} </span>
        <span className="px-4">Bs. {transaction.amount} </span>

        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="px-3 bg-red-800 rounded-3xl hover:bg-red-600 "
        >
          X
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
