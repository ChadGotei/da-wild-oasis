"use client";

import { useFormStatus } from 'react-dom';

const styling = "bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"

export default function SubmitButton({ pendingLabel, children }) {
    const { pending } = useFormStatus();

    return (
        <button
            className={styling}
            disabled={pending}
        >
            {pending ? pendingLabel : children}
        </button>
    )
}