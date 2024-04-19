import { Form, Link } from "@remix-run/react"; 
import type { ActionFunctionArgs } from "@remix-run/node";
import { createClass } from "~/server/models/class";



export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();

    const name = formData.get("name") as string;

    const new_class = await createClass({id:"00001", name}) 

    
}
export default function ClassAppPage() {
    return (
        <div className="flex h-full min-h-screen flex-col">
            <header className="flex bg-slate-800">
                <h1 className="text-3xl font-bold text-white">
                    <Link to="/class_app">Class Application</Link>
                </h1>
            </header>

            <AppForm />

        </div>

        

    )
}

function AppForm() {

    return (
        <Form
            method="post"
        >
            <div>
                <NameField />
                <SubmitButton />

            </div>
        </Form>
    )


}

const NameField = () => (
    <label className="flex w-80 flex-col gap-1">
        <span>Name: </span>
        <input
            name="name"
            type="text"
            className="flex-1 border-2 border-blue-500"
        />


    </label>
)

const SubmitButton = () => (
    <button 
    className="bg-blue-500">
        Submit
    </button>
)