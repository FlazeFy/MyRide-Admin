"use client"
import OrganismsLoginForm from '@/component/organisms/o_login_form';
import * as React from 'react';

interface ILoginPageProps {
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-warning'>
            <OrganismsLoginForm/>
        </div>
    )
};

export default LoginPage;
