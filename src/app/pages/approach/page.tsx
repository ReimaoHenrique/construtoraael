
'use client';

import React from 'react';



interface PageProps {
    params?: {
        id?: string;
    };
    searchParams?: Record<string, string | string[]>;
}

export default function ApproachPage({ params, searchParams }: PageProps) {
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold mb-4">Abordagem</h1>
                <p className="text-gray-600 text-lg">
                    Conteúdo da página vai aqui
                </p>
            </div>
        </main>
    );
}