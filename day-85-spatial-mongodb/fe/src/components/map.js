import { useContext } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  CircleMarker,
  Polyline,
  Polygon,
  Rectangle,
} from "react-leaflet";
import { RestaurantContext } from "../context/restaurants-context";
import { NeighborhoodContext } from "../context/neighborhood-context";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const center = [51.505, -0.09];

const polyline = [
  [51.505, -0.09],
  [51.51, -0.1],
  [51.51, -0.12],
];

const fillBlueOptions = { fillColor: "blue" };
const limeOptions = { color: "lime" };
const redOptions = { color: "red" };

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  //console.log(restaurants);

  const neighborhoods = useContext(NeighborhoodContext);
  console.log(neighborhoods);

  return (
    <div>
      <h1>My Map</h1>
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {restaurants &&
          restaurants.map((r, idx) => {
            return (
              <Marker
                position={[r.address.coord[1], r.address.coord[0]]}
                key={idx}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            );
          })}
      </MapContainer> */}

      <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {neighborhoods &&
          neighborhoods.map((n, idx) => {
            return (
              <div key={idx}>
                <CircleMarker
                  center={[
                    n.geometry.coordinates[0][0][1],
                    n.geometry.coordinates[0][0][0],
                  ]}
                  pathOptions={redOptions}
                  radius={20}
                >
                  <Popup>Popup in CircleMarker</Popup>
                </CircleMarker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
              </div>
            );
          })}
      </MapContainer>
    </div>
  );
}
