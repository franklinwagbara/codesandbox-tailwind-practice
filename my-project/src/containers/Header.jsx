import "./styles/Header.css";

const Header = () => {
  return (
    <div className="flex justify-between px-12 py-6 md:px-96">
      <div className="logo">
        <h1 className="text-2xl">Glow</h1>
        <div className="w-3 h-3 rounded-full bg-primary "></div>
      </div>

      <ul className="font-sans flex items-center gap-6 font-semibold">
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blo</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <button className="bg-primary relative text-white rounded-full p-2 ml-3">
            <div className="absolute bg-gray-800 w-4 h-4 top-0 left-7 rounded-full text-xs">
              1
            </div>
            <svg
              className="w-4"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
