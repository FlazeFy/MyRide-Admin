"use client"
import AtomText from '@/component/atoms/a_text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { postLogin } from '@/service/sv_auth';
import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from '../schema/sc_auth';
import Swal from "sweetalert2";

interface ILoginFormProps {
}

const OrganismsLoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    return (
        <div className='container p-4 border-black border-2 rounded-2xl mx-auto space-y-4' style={{maxWidth:"480px"}}>
            <AtomText type='title' text='You are at MyRide Apps'/>
            <AtomText type='sub-title-small' text='Management Apps for your vehicle'/>
            <Formik initialValues={{ username: "", password: "" }} validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        const data = await postLogin(values.username, values.password)
                        Swal.fire({
                            icon: "success",
                            title: "Login Successful",
                            text: `Welcome back, ${values.username}!`,
                        })
                    } catch (err) {
                        Swal.fire({
                            icon: "error",
                            title: "Login Failed",
                            text: err.message || "Invalid username or password"
                        });
                    } finally {
                        setSubmitting(false)
                    }
                }}
            >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="space-y-4">
                    <Label htmlFor="username">Email address / Username</Label>
                    <Field as={Input} name="username" placeholder="Enter your email"/>
                    <ErrorMessage name="username" component="div" className="text-red-500 text-sm"/>
                    <Label htmlFor="password">Password</Label>
                    <Field as={Input} type="password" name="password" placeholder="Enter your password"/>
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>
                    <Button type="submit" className="btn-success w-full">Enter the Garage</Button>
                </Form>
            )}
            </Formik>
        </div>
    )
};

export default OrganismsLoginForm;
