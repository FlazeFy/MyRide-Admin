"use client"
import AtomText from '@/component/atoms/a_text';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as React from 'react';

interface ILoginFormProps {
}

const OrganismsLoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    return (
        <div className='container p-4 border-black border-2 rounded-2xl mx-auto space-y-4' style={{maxWidth:"480px"}}>
            <AtomText type='title' text='You are at MyRide Apps'/>
            <AtomText type='sub-title-small' text='Management Apps for your vehicle'/>
            <Label htmlFor="Email address / Username">Email address / Username</Label>
            <Input type='email'/>
            <Label htmlFor="Password">Password</Label>
            <Input type='password'/>
            <Button className="btn-success">Enter the Garage</Button>
        </div>
    )
};

export default OrganismsLoginForm;
