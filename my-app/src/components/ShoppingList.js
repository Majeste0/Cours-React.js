const plantList = [
  "monstera",
  "ficus lyrata",
  "pothos argenté",
  "yucca",
  "palmier",
];

const ShoppingList = () => {
  return (
    <ul>
      {plantList.map((plant) => (
        <li>{plant}</li>
      ))}
    </ul>
  );
};

export default ShoppingList;
