import "../styles/Cart.css";

const Cart = () => {
  let monsteraPrice = 8;
  let ivyPrice = 10;
  let flowerPrice = 15;

  return (
    <div className="lmj-cart">
      <h2> Panier </h2>
      <ul>
        <li>Monstera : {monsteraPrice} €</li>
        <li>Lierre : {ivyPrice} €</li>
        <li>Fleurs :{flowerPrice} €</li>
      </ul>
      Total : {monsteraPrice + ivyPrice + flowerPrice} €
    </div>
  );
};

export default Cart;
