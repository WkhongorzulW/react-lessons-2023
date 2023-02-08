import { places } from "../data/Data";
import Place from "./Place";

export default function List() {
  return (
    <div>
      {places.map((p, index) => {
        return <Place place={p} key={index} />;
      })}
    </div>
  );
}
