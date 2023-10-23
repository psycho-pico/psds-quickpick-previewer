"use client";

import {FunctionComponent, useEffect, useState} from "react";
import Image from "next/image";
import landingIllustration from '@/public/login-illustration-gelora.png'

interface LandingIllustrationProps {
    height?: number | undefined
}

const LandingIllustration: FunctionComponent<LandingIllustrationProps> = ({
                                                                              height
                                                                          }) => {
    return (
        <div className="bg-broccoli-50 w-full relative overflow-hidden flex items-center"
             style={{height: `${height}%`}}>
            {/*<Image src={landingIllustration}*/}
            {/*       priority={true}*/}
            {/*       className="h-[110%] blur-sm absolute"*/}
            {/*       alt="" />*/}
            <Image src={landingIllustration}
                   priority={true}
                   className="w-full absolute"
                   alt="" />
        </div>
    );
}

LandingIllustration.defaultProps = {
    height: 50
};

export default LandingIllustration;