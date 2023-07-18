export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Add some items in your packing list!😍✈️</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = (numPacked / numItems) * 100;
  return (
    <div className="stats">
      {packedPercent === 100
        ? "You have packed everything! Ready to Go✈️😍🎒"
        : `Your have ${numItems} item in your list & you have already packed
          ${numPacked} item! (${Math.floor(packedPercent)}%)`}
    </div>
  );
}
