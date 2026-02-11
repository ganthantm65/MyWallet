import { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import toast from "react-hot-toast";

function Budgets() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const year = new Date().getFullYear();

  const [budgets, setBudgets] = useState([]);
  const [editId, setEditId] = useState(null);

  const user = JSON.parse(localStorage.getItem("user_data"));
  const token = localStorage.getItem("token");

  const fetchBudgets = async () => {
    if (!user || !token) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/budgets/${user.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setBudgets(data.budgets || []);
    } catch {
      toast.error("Failed to fetch budgets");
    }
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const addBudget = async () => { 
    if (!category || !amount || !month) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/budgets/${user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            category,
            amount: Number(amount),
            month,
            year,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Budget added successfully");
      setCategory("");
      setAmount("");
      setMonth("");
      fetchBudgets();
    } catch {
      toast.error("Failed to add budget");
    }
  };

  const updateBudget = async (b) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/budgets/update/${b.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            category,
            amount: Number(amount),
            month,
            year,
          }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Budget updated successfully");
      setCategory("");
      setAmount("");
      setMonth("");
      setEditId(null);
      fetchBudgets();
    } catch {
      toast.error("Failed to update budget");
    }
  };

  const startEdit = (b) => {
    setCategory(b.category);
    setAmount(b.amount);
    setMonth(b.month);
    setEditId(b.id);
  };

  return (
    <div className="w-screen h-screen flex flex-row bg-gray-50 text-gray-800">
      <SideBar />

      <div className="w-full h-full flex flex-col items-center overflow-auto">
        <div className="w-full flex justify-between items-center p-6 shadow-sm bg-white sticky top-0 z-10">
          <h1 className="text-4xl font-bold">Budgets</h1>
        </div>

        <div className="w-[70%] bg-white flex flex-col gap-4 rounded-lg shadow-md py-6 px-8 mt-8 mb-10">
          <h1 className="text-2xl font-bold text-violet-700">
            {editId ? "Update Budget" : "Add Budget"}
          </h1>

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Category"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Amount"
          />

          <input
            type="text"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Month"
          />

          {editId ? (
            <button
              className="w-full h-10 rounded-md bg-green-600 text-white"
              onClick={updateBudget}
            >
              Update Budget
            </button>
          ) : (
            <button
              className="w-full h-10 rounded-md bg-violet-700 text-white"
              onClick={addBudget}
            >
              Add Budget
            </button>
          )}
        </div>

        <div className="w-[90%] bg-white rounded-xl shadow-lg p-6 mb-10">
          <h1 className="text-2xl font-bold text-violet-700 mb-4">All Budgets</h1>

          <table className="w-full">
            <thead>
              <tr className="bg-violet-700 text-white">
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Amount</th>
                <th className="p-4 text-left">Month</th>
                <th className="p-4 text-left">Year</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {budgets.map((b, i) => (
                <tr key={b._id} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4">{b.category}</td>
                  <td className="p-4">{b.amount}</td>
                  <td className="p-4">{b.month}</td>
                  <td className="p-4">{b.year}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => startEdit(b)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}

              {budgets.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-6 text-gray-500">
                    No budgets added yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Budgets;
