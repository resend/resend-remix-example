import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Resend + Remix" },
    { name: "description", content: "An example of Remix with Resend" },
  ];
};

export default function Index() {
  return (
    <h1>Welcome to Resend + Remix example</h1>
  );
}
