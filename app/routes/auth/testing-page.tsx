import { Form, NavLink, useNavigation } from "react-router";
import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-page";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);

  const data = await request.formData();

  const name = data.get("name");
  const allData = Object.fromEntries(data);

  console.log("Server Side - Action");
  console.log({ name, allData });

  return { ok: true, message: "todo bien desde el server action" };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1000);

  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);

  // can still call the server action if needed
  const data = await serverAction();
  // return data;
  return {
    message: "Hola mundo desde el client action!!! - Client",
    data,
    allData,
  };
}

export async function loader() {
  return { message: "Hola mundo desde el loader!!! - Server" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  // call the server loader
  const serverData = await serverLoader();
  // And/or fetch data on the client
  // const data = getDataFromClient();
  // Return the data to expose through useLoaderData()
  return {
    message: "Hola mundo desde el client loader!!!- Client",
    serverData: serverData,
  };
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

  return (
    <div>
      <h1 className="font-bold text-2xl">Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/auth/testing-args/ABC-123/Juan/30"
        className={({ isPending }) =>
          isPending
            ? "underline text-red-500 text-2xl"
            : "underline text-blue-500 text-2xl"
        }
      >
        Testing Args
      </NavLink>

      {/* action="/auth/testing" */}
      <Form method="post" className="mt-2 flex gap-2">
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="name"
          placeholder="Enter name"
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="age"
          placeholder="Enter age"
        />
        <button
          disabled={isPosting}
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
