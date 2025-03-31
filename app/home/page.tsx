"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Pagina de inicio ¡Bienvenido!
                </h2>
            </div>
        </div>
    );
}