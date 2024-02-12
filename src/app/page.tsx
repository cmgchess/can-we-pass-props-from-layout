import Link from "next/link";

export async function generateMetadata(props: any) {
  return {
    title: "My App | Home",
    description: "This is the Home page of my app.",
  };
}

export default function Home(props: any) {
  console.log("props.params from Home Page", props.params);
  return (
    <div>
      <h1>This is the Home Page</h1>
      <p>props.params from Home Page: {JSON.stringify(props.params)}</p>
      <Link
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        href="/dashboard"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
