import { Form, useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { Database } from "bun:sqlite";

const db = new Database(":memory:");

const sql = `
    CREATE TABLE persons (
        id  INTEGER PRIMARY KEY,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL
    )`;

db.exec(sql);

interface Data {
    id: number,
    firstName: string,
    lastName: string
}

// its send data to useLoaderData
export async function loader({ request }: LoaderFunctionArgs) {
    const data = db.query("select * from persons;");

    return data.all();
}

// if user made post or get in form its will work here
export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    db.exec(`INSERT INTO persons(firstName, lastName) VALUES ('${firstName}', '${lastName}');`);

    return null;
}

function fullstack() {
    const data: Data[] = useLoaderData();
    return (
        <>
        {data.map((item, index) => (
            <div key={index}>
                <p>ID: {item.id}</p>
                <p>First Name: {item.firstName}</p>
                <p>Last Name: {item.lastName}</p>
            </div>
        ))}

        <Form method="post">
            <div>
                <label htmlFor="firstName">First name</label>
                <input name="firstName"type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last name</label>
                <input name="lastName" type="text" />
            </div>

            <button type="submit">Sumbit</button>
        </Form>
        </>
    )
}

export default fullstack;
