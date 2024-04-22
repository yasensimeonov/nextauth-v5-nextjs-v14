'use client';

import { useSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

type Props = {}

const initialState: {
    message: string;
    data?: any;
} = {
    message: ''
};

export const UserForm = () => {
    const session = useSession();
    console.log(session);

    const onSubmit = () => {
        if (session.status !== 'authenticated') {
            signIn(); // redirect to sign in page
        } else {
            // do something else
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Your name'/>
            <button type='submit'/>
        </form>
    )
}

export function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type='submit' disabled={pending}>
            { pending ? 'Generating...' : 'Generate' }
        </button>
    );
}

// export const FormGenerator = (props: Props) => {
//     const [state, formAction] = useFormState(generateForm, initialState);
//     const [open, setOpen] = useState(false);
//
//     const session = useSession();
//     console.log(session);
//
//     useEffect(() => {
//         if (state.message === 'success') {
//             setOpen(false);
//         }
//         console.log(state.data);
//     }, [state.data, state.message]);
//
//     const onFormCreate = () => {
//         if (session.data?.user) {
//             setOpen(true);
//         } else {
//             signIn();
//         }
//     }
//
//     return (
//         <div>
//             Test Form Generator
//         </div>
//     )
//
// }