import model from "../assets/model1.png";

const BannerSection = () => {
  return (
    <div className="relative flex w-full h-banner justify-between items-center">
      <div className="absolute w-2/4">
        <h1 className="font-bold text-6xl leading-relaxed">
          Let your skin Going <InlineAvatar /> Out
        </h1>

        <p className="w-96 mt-4 text-sm text-gray-500">
          We want to bring to the world through our products that very special
          feeling joy healthy and positive energy
        </p>

        <div className="mt-7">
          <button className="btn btn-primary">
            Shop Now{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          <button className="btn">How to use</button>
        </div>
      </div>

      <div className="absolute -right-32">
        <img className="w-model" src={model} alt="A model" />
      </div>
    </div>
  );
};

const InlineAvatar = () => {
  return (
    <div className="relative inline-block box-content w-32 h-16 p-1 -mb-4 overflow-hidden object-cover bg-secondary rounded-full">
      <img src={model} alt="avatar" />
      <div className="absolute w-32 h-16 top-1 border border-white rounded-full"></div>
    </div>
  );
};
export default BannerSection;
