import React from 'react';

export default function ViewFinder() {
    return (
        <>
            <span className="border-background absolute top-18 left-18 h-24 w-24 rounded-tl-[50] border-t-6 border-l-6"></span>
            <span className="border-background absolute top-14 right-14 h-28 w-28 rounded-tr-[60] border-t-6 border-r-6"></span>
            <span className="border-background absolute right-14 bottom-14 h-28 w-28 rounded-br-[60] border-r-6 border-b-6"></span>
            <span className="border-background absolute bottom-14 left-14 h-28 w-28 rounded-bl-[60] border-b-6 border-l-6"></span>
            <div className="text-background absolute inset-2 rounded-lg p-4 text-center">
                <p className="inferior-campo-texto text-background">
                    Centralize o rosto na moldura para tirar a foto.
                </p>
            </div>
        </>
    );
}
