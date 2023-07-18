import { useState } from "react";
export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);
    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😎😍 Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item..."
      ></input>
      <button>Add</button>
    </form>
  );
}
