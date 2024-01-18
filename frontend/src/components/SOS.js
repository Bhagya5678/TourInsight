import React from "react";

export default function Sos() {
    return (
        <div className="flex flex-col w-screen h-[480px] justify-center items-center bg-gray-200">
            <button className="bg-medium-blue text-white px-6 py-4 mb-4 rounded-2xl text-2xl">
                Message Emergency Contact
            </button>
            <div className="text-center text-dark-blue font-semibold text-2xl">
                <h3 className="mb-4">Call Police: 99999</h3>
                <h3 className="mb-4">Call Ambulance: 99999</h3>
                <h3 className="mb-4">Call Fire Brigade: 99999</h3>
            </div>
        </div>
    );
}
