"use client";

import {useEffect, useState} from "react";
import LandingForm from "@/src/components/custom/LandingForm";
import LandingIllustration from "@/src/components/custom/LandingIllustration";
import PhoneScreen from "@/src/components/custom/PhoneScreen";
import ScreenController from "@/src/components/custom/ScreenController";



export default function Component() {
    const defaultScreenRatio = [9, 16];
    const maxSizeForFullScreen = "md";
    const [ready, setReady] = useState(false<boolean>);
    const [illustrationHeightInPercent, setIllustrationHeightInPercent] = useState(38<number>);
    const [phoneScreenRatioWidth, setPhoneScreenRatioWidth] = useState(defaultScreenRatio[0]<number>);
    const [phoneScreenRatioHeight, setPhoneScreenRatioHeight] = useState(defaultScreenRatio[1]<number>);
    const [phoneScreenRatio, setPhoneScreenRatio] = useState(defaultScreenRatio[0] / defaultScreenRatio[1] <number>);
    const [quickPickToggle, setQuickPickToggle] = useState(true <boolean>);

    useEffect(() => {
        setReady(true);
    }, []);

    useEffect(() => {
        if (phoneScreenRatioWidth / phoneScreenRatioHeight === phoneScreenRatio) {
            return;
        }
        setPhoneScreenRatio(phoneScreenRatioWidth / phoneScreenRatioHeight);
    }, [phoneScreenRatioWidth, phoneScreenRatioHeight]);

    const handleOnChangeRatioWidth = (event) => {
        const value = event.target.value;
        setPhoneScreenRatioWidth(value);
    };

    const handleOnChangeRatioHeight = (event) => {
        const value = event.target.value;
        setPhoneScreenRatioHeight(value);
    };

    const handleOnChangeIllustrationHeight = (event) => {
        const value = event.target.value;
        if (value < 1 || value > 100) {
            setIllustrationHeightInPercent(100);
            return;
        }
        setIllustrationHeightInPercent(value);
    };

    const handleOnChangeQuickPickToggle = (value) => {
        setQuickPickToggle(value);
    };

    return (
        <>
            <section className="dark:bg-black-80 light:bg-broccoli-20 h-screen flex-col items-center justify-center mx-auto"
                     style={{display: ready ? 'flex' : 'none'}}>
                <PhoneScreen maxSizeForFullScreen={maxSizeForFullScreen}
                             phoneScreenRatio={phoneScreenRatio}>
                    <LandingIllustration height={illustrationHeightInPercent} />
                    <LandingForm illustrationHeightInPercent={illustrationHeightInPercent} quickPick={quickPickToggle} />
                </PhoneScreen>
                <ScreenController maxSizeForFullScreen={maxSizeForFullScreen}
                                  onChangeRatioWidth={handleOnChangeRatioWidth}
                                  ratioWidth={phoneScreenRatioWidth}
                                  onChangeRatioHeight={handleOnChangeRatioHeight}
                                  ratioHeight={phoneScreenRatioHeight}
                                  onChangeIllustrationHeight={handleOnChangeIllustrationHeight}
                                  illustrationHeight={illustrationHeightInPercent}
                                  onChangeQuickPickToggle={handleOnChangeQuickPickToggle}
                                  quickPickToggle={quickPickToggle} />
            </section>
        </>
    )
}
