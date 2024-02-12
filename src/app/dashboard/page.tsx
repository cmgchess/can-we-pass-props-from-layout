import Link from "next/link";

const Dashboard = (props: any) => {
  console.log("props.params from Dashboard Page", props.params);
  return (
    <div>
      <h1>This is the Dashboard Page</h1>
      <p>props.params from Dashboard Page: {JSON.stringify(props.params)}</p>
      <Link
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
        href="/"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default Dashboard;
