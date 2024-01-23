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
      <Cover />
      {CONTENT.map((c) => (
        <ContentSection
          key={c.title}
          title={c.title}
          body={c.body}
          bgColor={c.bgColor}
          accent={c.accent}
          renderGraphic={() => renderGraphic(c.graphic)}
        />
      ))}
      <EndSection />
    </>
  );
}

export default App;
