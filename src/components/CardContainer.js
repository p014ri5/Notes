import Card from "./Card.js";

const CardContainer = () => {
  return (
    <div className="h-screen px-16 overflow-scroll pt-16 flex flex-wrap">
      <Card color="bg-red-300" />
      <Card color="bg-purple-300" />
      <Card color="bg-green-300" />
      <Card color="bg-blue-300" />
    </div>
  );
};

export default CardContainer;
