import { createFileRoute } from "@tanstack/react-router";
import Feed from "../Feed";

export const Route = createFileRoute("/feed")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Feed />;
}
