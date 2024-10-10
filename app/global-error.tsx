"use client";

interface ErrorProps {
    error: { message: string }; // Define the structure of the error object
    reset: () => void; // Define the type for the reset function
}

export default function Error({ error, reset }: ErrorProps) {
    return (
        <main className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-semibold">Something went wrong!</h1>
            <p className="text-lg">{error.message}</p>

            <button
                className="inline-block px-6 py-3 text-lg bg-accent-500 text-primary-800"
                onClick={reset}
            >
                Try again
            </button>
        </main>
    );
}
