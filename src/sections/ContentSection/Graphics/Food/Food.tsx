import "./Food.css";

const IconList = ({ className = "" }: { className?: string }) => (
  <div className={`slideRow ${className}`}>
    <img src="images/croissant-1F950.svg" />
    <img src="images/beer-mug-IF37A.svg" />
    <img src="images/hot-beverage-2615.svg" />
    <img src="images/strawberry-1F353.svg" />
    <img src="images/pizza-1F355.svg" />
    <img src="images/pretzel-1F968.svg" />
    <img src="images/sushi-1F363.svg" />
    <img src="images/tangerine-1F34A.svg" />
    <img src="images/strawberry-1F353.svg" />
  </div>
);

export default function Food() {
  return (
    <div id="foodWrapper">
      <IconList />
      <IconList className="secondSlide" />
    </div>
  );
}
