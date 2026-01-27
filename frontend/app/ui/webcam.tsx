'use client';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import {
    WebcamContext,
    WebcamDispatchContext,
} from '@/app/context/WebcamContext';
import ViewFinder from '@/app/ui/viewFinder';

const videoConstraints = {
    width: 360,
    height: 360,
    // facingMode: 'user',
};

export default function WebcamComponent() {
    const webcamDispatch = useContext(WebcamDispatchContext);
    const webcamState = useContext(WebcamContext);
    const webcamRef = useRef<Webcam>(null);

    const capturePhoto = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc: string | null = webcamRef.current.getScreenshot();
            if (imageSrc) {
                webcamDispatch?.({ type: 'CAPTURE_SUCCES', payload: imageSrc });
            }
        }
    }, [webcamRef, webcamDispatch]);

    useEffect(() => {
        if (webcamState?.mustCapture === true && webcamState.isWebcamOpen) {
            capturePhoto();
        }
    }, [webcamState?.mustCapture, webcamState?.isWebcamOpen, capturePhoto]);

    if (!webcamState?.isWebcamOpen) {
        return (
            <div className="bg-background-2 text-corpo-de-texto text-interior-campo-texto flex h-full w-full items-center justify-center rounded-l-2xl font-semibold">
                {' '}
                Foto desabilitada
            </div>
        );
    }

    return (
        <>
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <Webcam
                    className={`${webcamState?.deactivatedWebcam ? 'hidden' : ''} rounded-l-2xl object-cover`}
                    ref={webcamRef}
                    audio={false}
                    height={620}
                    width={620}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    screenshotQuality={1}
                />

                <ViewFinder />
            </div>
        </>
    );
}
