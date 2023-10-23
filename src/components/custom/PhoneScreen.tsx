"use client";

import React, {FunctionComponent, useEffect, useState} from "react";

interface PhoneScreenProps {
    children?: React.ReactNode;
    maxSizeForFullScreen?: string;
    phoneScreenRatio?: number;
    marginVertical?: number;
}

const PhoneScreen: FunctionComponent<PhoneScreenProps> = ({
                                                              children,
                                                              maxSizeForFullScreen = "md",
                                                              phoneScreenRatio = 9 / 16,
                                                              marginVertical = 38
                                                          }) => {
    const [simulatorWidth, setSimulatorWidth] = useState(0);
    const [simulatorHeight, setSimulatorHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight - marginVertical * 2;
            const width = height * phoneScreenRatio;
            setSimulatorHeight(height);
            setSimulatorWidth(width);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [phoneScreenRatio, marginVertical]);

    return (
        <div className={`bg-white transition rounded-lg overflow-hidden max-md:!rounded-none max-md:!h-full max-md:!w-full`}
             style={{width: simulatorWidth, height: simulatorHeight}}>
            {children}
        </div>
    );
};

export default PhoneScreen;