"use client";

import React, {FunctionComponent, useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import landingIllustration from '@/public/login-illustration.jpg';
import pencilIcon from '@/public/icons/pencil.png';
import styles from '@/src/components/custom/LandingIllustration.module.scss'
import {Label} from "@/src/components/ui/label";

interface LandingIllustrationProps {
    height?: number;
    illustrationPlacement: string | ("placementTop" | "placementCenter" | "placementBottom");
    illustrationBgColor: string;
    gradientColor: string;
}

const LandingIllustration: FunctionComponent<LandingIllustrationProps> = ({
                                                                              height = 50,
                                                                              illustrationPlacement,
                                                                              illustrationBgColor,
                                                                              gradientColor
                                                                          }) => {
    const [illustration, setIllustration] = useState<string | StaticImageData>(landingIllustration);
    const [illustrationPlacement_, setIllustrationPlacement_] = useState("center");
    const headline1 = "Selamat Datang di Aplikasi";
    const headline2 = "Pegadaian Syariah Digital";

    useEffect(() => {
        switch (illustrationPlacement) {
            case "placementTop":
                setIllustrationPlacement_("flex-start");
                break;
            case "placementBottom":
                setIllustrationPlacement_("flex-end");
                break;
            default:
                setIllustrationPlacement_("center");
        }
    }, [illustrationPlacement]);

    const handleChangeIllustration = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0]; // Use optional chaining to safely access files
        if (file) {
            setIllustration(URL.createObjectURL(file));
        }
    };

    const handleChangeHeadline1 = (event: any) => {
    };

    const handleChangeHeadline2 = (event: any) => {
    };

    return (
        <div className="w-full background-broccoli-50 relative overflow-hidden flex items-center"
             style={{
                 height: `${height}%`,
                 alignItems: illustrationPlacement_,
                 backgroundColor: illustrationBgColor ?? ""
             }}>
            <Image src={illustration}
                   priority={true}
                   width={1000}
                   height={1000}
                   className="w-full absolute"
                   alt="" />
            <div className={`${styles.illustrationHeadline} absolute bottom-0 w-full px-4 pb-9 pt-14`}
                 style={{background: `linear-gradient(0deg, ${gradientColor ?? "#004D43"} 3.02%, rgba(82, 108, 146, 0.00) 90.04%, rgba(0, 77, 67, 0.00) 90.05%)`}}>
                <div className="text-white font-normal text-md"
                     contentEditable={true}
                     dangerouslySetInnerHTML={{__html: headline1}}
                     onInput={handleChangeHeadline1} />
                <div className="text-white font-extrabold text-md"
                     contentEditable={true}
                     dangerouslySetInnerHTML={{__html: headline2}}
                     onInput={handleChangeHeadline2} />
            </div>
            <input id="illustrationInputFile"
                   type="file"
                   onChange={handleChangeIllustration}
                   className="invisible" />
            <Label className="group absolute right-0 top-0 bg-white bg-opacity-20 hover:bg-opacity-90 transition-all inline-block p-3 m-2 rounded-lg cursor-pointer"
                   htmlFor="illustrationInputFile">
                <Image src={pencilIcon}
                       className="w-4 h-4 invert group-hover:invert-0"
                       alt="" />
            </Label>
        </div>
    );
}

export default LandingIllustration;