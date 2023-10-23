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
    const [simulatorWidth, setSimulatorWidth] = useState(0<number>);
    const [simulatorHeight, setSimulatorHeight] = useState(0<number>);

    useEffect(() => {
    }, []);

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
    }, [phoneScreenRatio]);

    return (
        <div className={`bg-white transition rounded-lg overflow-hidden max-${maxSizeForFullScreen}:!rounded-none max-${maxSizeForFullScreen}:!h-full max-${maxSizeForFullScreen}:!w-full`}
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