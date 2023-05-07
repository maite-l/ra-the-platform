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
        <div className='auth-form__wrapper register'>
            <a href="/" className="title">
                <h1>Mix&Match</h1>
                <p>Pattern Generator</p>
            </a>
            <h2>Sign up</h2>
            <Form method="post" className='auth-form'>
                <div>
                    <label>
                        email
                        <input type="text" name="email" placeholder='john.doe@gmail.com' />
                    </label>
                </div>
                <div>
                    <label>
                        username
                        <input type="text" name="username" placeholder='john.doe' />
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <input type="password" name="password" />
                    </label>
                </div>
                <div>
                    <button type='submit'>sign up</button>
                </div>
            </Form>

            <div className='other-options'>
                <p>or <a href="/login">log in</a></p>
                <p>or go <a href="/">explore without an account</a></p>
            </div>
        </div>
    );
}
