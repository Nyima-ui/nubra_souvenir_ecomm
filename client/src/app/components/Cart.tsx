type InputProps = {
  isCartOpened: boolean;
  setisCartOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ isCartOpened, setisCartOpened }: InputProps) => {
  return (
    <section className="absolute top-full left-0 border-t bg-neutral-bg w-full h-[95vh] px-5
    pt-7.5">
      <nav className="flex justify-between items-center">
        <h2 className="font-century text-[19.05px] tracking-[0.01em]">
          Your Cart
        </h2>
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setisCartOpened((prev) => !prev)}
        >
          <path
            d="M29.2914 7.70833L7.70801 29.2917M7.70805 7.70833L29.2914 29.2917"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </nav>
    </section>
  );
};

export default Cart;
