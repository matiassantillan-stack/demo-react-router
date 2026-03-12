import { useLocation } from "react-router";
import type { Route } from "./+types/not-found";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Not Found" },
    { name: "description", content: "Page not found" },
  ];
}

export default function NotFound() {
  const location = useLocation();

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>404</h1>
      <p>
        The requested page <code>{location.pathname}</code> could not be found.
      </p>
    </main>
  );
}
