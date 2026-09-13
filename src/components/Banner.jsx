"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
    const router = useRouter();

    const handleBtn = () => {
        const password = prompt("Enter a password");
        if (password === "1234") {
            router.push("/dashboard");
        }
        
    };

    return (
        <div>
            <button onClick={handleBtn} className="mt-7 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition duration-75 hover:bg-slate-200">
            Share Your Story
          </button>
        </div>
    );
};

export default Banner;