"use client";

import React, {useEffect, useState} from "react";
import LandingForm from "@/src/components/custom/LandingForm";
import LandingIllustration from "@/src/components/custom/LandingIllustration";
import PhoneScreen from "@/src/components/custom/PhoneScreen";
import ScreenController from "@/src/components/custom/ScreenController";

export default function Component() {
    const defaultScreenRatio = [9, 16];
    const maxSizeForFullScreen = "md";
    const [ready, setReady] = useState(false);
    const [illustrationHeightInPercent, setIllustrationHeightInPercent] = useState(38);
    const [phoneScreenRatioWidth, setPhoneScreenRatioWidth] = useState(defaultScreenRatio[0]);
    const [phoneScreenRatioHeight, setPhoneScreenRatioHeight] = useState(defaultScreenRatio[1]);
    const [phoneScreenRatio, setPhoneScreenRatio] = useState(defaultScreenRatio[0] / defaultScreenRatio[1]);
    const [quickPickToggle, setQuickPickToggle] = useState(true);
    const [illustrationPlacement, setIllustrationPlacement] = useState("placementCenter");
    const [illustrationBgColor, setIllustrationBgColor] = useState("#004D43");
    const [gradientColor, setGradientColor] = useState("#004D43");

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {
        const newRatio = phoneScreenRatioWidth / phoneScreenRatioHeight;
        if (newRatio === phoneScreenRatio) {
            return;
        }
        setPhoneScreenRatio(newRatio);
    }, [phoneScreenRatioWidth, phoneScreenRatioHeight, phoneScreenRatio]);

    const handleOnChangeRatioWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setPhoneScreenRatioWidth(value);
    };

    const handleOnChangeRatioHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setPhoneScreenRatioHeight(value);
    };

    const handleOnChangeIllustrationHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        if (value < 1 || value > 100) {
            setIllustrationHeightInPercent(100);
            return;
        }
        setIllustrationHeightInPercent(value);
    };

    const handleOnChangeQuickPickToggle = (value: boolean) => {
        setQuickPickToggle(value);
    };

    const onChangeIllustrationPlacement = (value: string | ("placementTop" | "placementCenter" | "placementBottom")) => {
        setIllustrationPlacement(value);
    };

    const onChangeIllustrationBgColor = (value: string) => {
        setIllustrationBgColor(value);
    };

    const onChangeGradientColor = (value: string) => {
        setGradientColor(value);
    };

    return (
        <>
            <section className="bg-black-80 h-screen flex-col items-center justify-center mx-auto"
                     style={{display: ready ? 'flex' : 'none'}}>
                <PhoneScreen maxSizeForFullScreen={maxSizeForFullScreen}
                             phoneScreenRatio={phoneScreenRatio}>
                    <LandingIllustration height={illustrationHeightInPercent}
                                         illustrationPlacement={illustrationPlacement}
                                         illustrationBgColor={illustrationBgColor}
                                         gradientColor={gradientColor} />
                    <LandingForm illustrationHeightInPercent={illustrationHeightInPercent}
                                 quickPick={quickPickToggle} />
                </PhoneScreen>
                <ScreenController maxSizeForFullScreen={maxSizeForFullScreen}
                                  onChangeRatioWidth={handleOnChangeRatioWidth}
                                  ratioWidth={phoneScreenRatioWidth}
                                  onChangeRatioHeight={handleOnChangeRatioHeight}
                                  ratioHeight={phoneScreenRatioHeight}
                                  onChangeIllustrationHeight={handleOnChangeIllustrationHeight}
                                  illustrationHeight={illustrationHeightInPercent}
                                  onChangeQuickPickToggle={handleOnChangeQuickPickToggle}
                                  quickPickToggle={quickPickToggle}
                                  onChangeIllustrationPlacement={onChangeIllustrationPlacement}
                                  illustrationPlacement={illustrationPlacement}
                                  onChangeIllustrationBgColor={onChangeIllustrationBgColor}
                                  illustrationBgColor={illustrationBgColor}
                                  onChangeGradientColor={onChangeGradientColor}
                                  gradientColor={gradientColor} />
            </section>
        </>
    )
}
