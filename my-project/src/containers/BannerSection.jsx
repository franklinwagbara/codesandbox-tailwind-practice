import model from "../assets/model1.png";

const BannerSection = () => {
  return (
    <div>
      <h1>
        Let your skin Going <InlineAvatar /> Out
      </h1>
    </div>
  );
};

const InlineAvatar = () => {
  return (
    <div className="inline-block w-14 h-8 bg-secondary overflow-hidden object-cover rounded-full">
      <div className="w-100 h-100 border-1 border-white m-1 rounded-full bg-primary">
        <img src={model} alt="avatar" />
      </div>
    </div>
  );
};
export default BannerSection;
