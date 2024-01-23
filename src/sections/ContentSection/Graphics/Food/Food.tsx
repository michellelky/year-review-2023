import "./Food.css";

const IconList = ({ className = "" }: { className?: string }) => (
  <div className={`slideRow ${className}`}>
    <img src="/src/assets/croissant-1F950.svg" />
    <img src="/src/assets/beer-mug-IF37A.svg" />
    <img src="/src/assets/hot-beverage-2615.svg" />
    <img src="/src/assets/strawberry-1F353.svg" />
    <img src="/src/assets/pizza-1F355.svg" />
    <img src="/src/assets/pretzel-1F968.svg" />
    <img src="/src/assets/sushi-1F363.svg" />
    <img src="/src/assets/tangerine-1F34A.svg" />
    <img src="/src/assets/strawberry-1F353.svg" />
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
