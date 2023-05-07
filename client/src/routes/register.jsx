import { Form, redirect } from 'react-router-dom';
import { register } from '../auth';

export async function action({ request }) {
    const formData = await request.formData();
    const { email, username, password } = Object.fromEntries(formData);
    const { jwt, user } = await register(email, username, password);
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));
    throw redirect("/");
}

export default function Register() {
    return (
        <>
            <h2>Sign up</h2>
            <Form method="post">
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" defaultValue="maite.lejeune@outlook.com" />
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <input type="text" name="username" defaultValue="maite" />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" defaultValue="123456" />
                    </label>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </Form>
        </>
    );
}
