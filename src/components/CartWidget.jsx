function CartWidget() {
  const count = 2;
  return (
    <button className="cart" title="Ver carrito">
      🛍️
      <span className="cart__badge">{count}</span>
    </button>
  );
}
export default CartWidget;