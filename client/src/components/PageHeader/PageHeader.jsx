export default function Button({ children }) {
  return (

    <button
      className="
      w-full
      bg-blue-600
      hover:bg-blue-700
      transition
      text-white
      rounded-lg
      py-3
      px-5
      font-medium
      "
    >

      {children}

    </button>

  );
}