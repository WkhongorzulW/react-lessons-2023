import PlaceImage from "./PlaceImage";

export default function Place({ place }) {
  return (
    <div>
      <PlaceImage place={place} />
      <p>
        <b>
          {place.name}
          {":" + place.description}
        </b>
      </p>
    </div>
  );
}
