'use client';
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
    width: 360,
    height: 360,
    facingMode: 'environment',
};

interface WebcamCaptureProps {
    onCapture: (imageSrc: string) => void;
}

export default function WebcamComponent({ onCapture }: WebcamCaptureProps) {
    const webcamRef = useRef<Webcam>(null);

    const [deactivate, setDeactivate] = useState<boolean>(false);
    const toggle = () => setDeactivate((prevState) => !prevState);

    const capturePhoto = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc: string | null = webcamRef.current.getScreenshot();
            if (imageSrc) {
                onCapture(imageSrc);
            }
        }
    }, [onCapture]);

    return (
        <>
            <div className="relative flex h-[620] w-[620] items-center justify-center">
                <Webcam
                    className={`${deactivate ? 'hidden' : ''} rounded-l-xl`}
                    ref={webcamRef}
                    audio={false}
                    height={620}
                    width={620}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    screenshotQuality={1}
                />
                <span className="border-background absolute top-18 left-18 h-24 w-24 rounded-tl-[50] border-t-6 border-l-6"></span>
                <span className="border-background absolute top-14 right-14 h-28 w-28 rounded-tr-[60] border-t-6 border-r-6"></span>
                <span className="border-background absolute right-14 bottom-14 h-28 w-28 rounded-br-[60] border-r-6 border-b-6"></span>
                <span className="border-background absolute bottom-14 left-14 h-28 w-28 rounded-bl-[60] border-b-6 border-l-6"></span>
                <div className="text-background absolute inset-2 rounded-lg p-4 text-center">
                    <p className="inferior-campo-texto text-background">
                        Centralize o rosto na moldura para tirar a foto.
                    </p>
                </div>
            </div>
        </>
    );
}
