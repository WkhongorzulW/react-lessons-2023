import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function NavigationPage(): JSX.Element {
  const [navigate, setNavigate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (navigate) {
      router.push("/contacts");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Navigation Bar</h1>
      <button onClick={() => setNavigate(true)}>Contact</button>
    </div>
  );
}
