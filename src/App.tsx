import Cover from "./sections/Cover";
import ContentSection from "./sections/ContentSection";
import EndSection from "./sections/EndSection";
import {
  Flags,
  Food,
  Glasses,
  Medal,
  Swim,
  Transport,
} from "./sections/ContentSection/Graphics";
import { CONTENT } from "./content";

function App() {
  const renderGraphic = (type: string) => {
    if (type === "flags") {
      return <Flags />;
    }
    if (type === "travel") {
      return <Transport />;
    }
    if (type === "food") {
      return <Food />;
    }
    if (type === "sunglasses") {
      return <Glasses />;
    }
    if (type === "swim") {
      return <Swim />;
    }
    if (type === "medal") {
      return <Medal />;
    }
  };

  return (
    <>
      <Cover to={CONTENT[0].graphic} />
      {CONTENT.map((c, index) => (
        <ContentSection
          key={c.title}
          id={c.graphic}
          to={CONTENT[index + 1]?.graphic || "end"}
          title={c.title}
          body={c.body}
          bgColor={c.bgColor}
          accent={c.accent}
          renderGraphic={() => renderGraphic(c.graphic)}
        />
      ))}
      <EndSection id="end" />
    </>
  );
}

export default App;
