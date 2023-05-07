import { Form, redirect } from 'react-router-dom';
import { authenticate } from '../auth';

export async function action({ request }) {
    const formData = await request.formData();
    const { email, password } = Object.fromEntries(formData);
    const { jwt, user } = await authenticate(email, password);
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("user", JSON.stringify(user));
    throw redirect("/");
}

export default function Login() {
    return (
        <div className='auth-form__wrapper login'>
            <a href="/" className="title">
                <h1>Mix&Match</h1>
                <p>Pattern Generator</p>
            </a>
            <h2>Login</h2>
            <Form method="post" className='auth-form'>
                <div>
                    <label>
                        email
                        <div><input type="text" name="email" placeholder='john.doe@gmail.com' /></div>
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <div><input type="password" name="password" /></div>
                    </label>
                </div>
                <div>
                    <button type='submit'>login</button>
                </div>

            </Form>

            <div className='other-options'>
                <p>or <a href="/register">make an account</a></p>
                <p>or go <a href="/">explore without an account</a></p>
            </div>
        </div>
    );
}
