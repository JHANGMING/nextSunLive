import CartFormSection from './CartFormSection';
import CartListSection from './CartListSection';

const CartPage = () => {
  return (
    <main>
      <section className="container grid grid-cols-12 gap-x-24 py-60">
        <CartListSection />
        <CartFormSection />
      </section>
    </main>
  );
};

export default CartPage;
