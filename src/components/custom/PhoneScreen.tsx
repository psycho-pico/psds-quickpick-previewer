"use client";

import React, {FunctionComponent, useEffect, useState} from "react";

interface PhoneScreenProps {
    children?: React.ReactNode | undefined,
    maxSizeForFullScreen?: string | undefined,
    phoneScreenRatio?: number | undefined,
    marginVertical?: number | undefined
}

const PhoneScreen: FunctionComponent<PhoneScreenProps> = ({
                                                              children,
                                                              maxSizeForFullScreen,
                                                              phoneScreenRatio,
                                                              marginVertical
                                                          }) => {
    const [simulatorWidth, setSimulatorWidth] = useState(0);
    const [simulatorHeight, setSimulatorHeight] = useState(0);

    useEffect(() => {
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight - (marginVertical ?? 0) * 2;
            const width = height * (phoneScreenRatio ?? 1);
            setSimulatorHeight(height);
            setSimulatorWidth(width);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [phoneScreenRatio]);

    return (
        <div className={`bg-white transition rounded-lg overflow-hidden max-md:!rounded-none max-md:!h-full max-md:!w-full`}
             style={{width: simulatorWidth, height: simulatorHeight}}>
            {children}
        </div>
    );
}

PhoneScreen.defaultProps = {
    maxSizeForFullScreen: "md",
    phoneScreenRatio: 9 / 16,
    marginVertical: 38
};

export default PhoneScreen;