import React from 'react';
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from 'formik';

import './authForm.scss';
import { login } from '../../api/api';

const AuthForm = () => {
    const dispatch = useDispatch();

    return (
        <article className="authForm">
            <div className="wrapper">
                <h1>Sign Up</h1>
                <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={async (values) => {
                    await new Promise(dispatch(login(values)));
                }}
                >
                <Form>            
                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="username"
                        placeholder="jane@acme.com"
                        type="email"
                    />

                    <label htmlFor="password">Password</label>
                    <Field 
                        id="password" 
                        name="password"
                        placeholder="******"
                        type="password"
                    />

                    <button type="submit">Submit</button>
                </Form>
                </Formik>
            </div>
        </article>
    );
};

export default AuthForm;