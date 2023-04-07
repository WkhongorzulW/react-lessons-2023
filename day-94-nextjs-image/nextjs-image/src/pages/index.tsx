import FancyButton from "@/components/BancyButton";
import Button from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <FancyButton>Fancy click me</FancyButton>
      {/* <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        alt="dog"
        fill
        style={{ objectFit: "cover" }}
      /> */}
    </div>
  );
}
