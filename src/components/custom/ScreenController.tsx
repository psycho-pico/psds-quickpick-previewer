"use client";

import Image from "next/image";
import settingIcon from '@/public/icons/setting.png';
import {Input} from "@/src/components/ui/input";
import {Label} from "@/src/components/ui/label";
import {Switch} from "@/src/components/ui/switch";
import {RadioGroup, RadioGroupItem} from "@/src/components/ui/radio-group";
import {PhotoshopPicker} from "react-color";
import React, {useState} from "react";
import ColorPicker from "@/src/components/custom/ColorPicker";

interface ScreenControllerProps {
    maxSizeForFullScreen: string;
    onChangeRatioWidth: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ratioWidth: number;
    onChangeRatioHeight: (event: React.ChangeEvent<HTMLInputElement>) => void;
    ratioHeight: number;
    onChangeIllustrationHeight: (event: React.ChangeEvent<HTMLInputElement>) => void;
    illustrationHeight: number;
    onChangeQuickPickToggle: (value: boolean) => void;
    quickPickToggle: boolean;
    onChangeIllustrationPlacement: (value: string) => void;
    illustrationPlacement: string | ("placementTop" | "placementCenter" | "placementBottom");
    onChangeIllustrationBgColor: (value: string) => void;
    illustrationBgColor: string;
    onChangeGradientColor: (value: string) => void;
    gradientColor: string;
}

const ScreenController = (props: ScreenControllerProps) => {

    const [showScreenController, setShowScreenController] = useState(false);

    const handleClickSettingIcon = () => {
        setShowScreenController(!showScreenController);
    }

    return (
        <>
            <div className={`fixed absolute left-0 top-0 m-3`}>
                <div className="left-0 top-0 mb-1 bg-white inline-block p-3 rounded-lg cursor-pointer group max-md:bg-opacity-20 max-md:hover:bg-opacity-90"
                     onClick={handleClickSettingIcon}>
                    <Image src={settingIcon}
                           className="w-4 h-4 transition-all group-hover:rotate-90 max-md:invert max-md:group-hover:invert-0"
                           alt="" />
                </div>
                <div className="bg-white p-6 border rounded-lg transition-all"
                     style={{display: showScreenController ? "block" : "none"}}>
                    <div className="grid mb-5 max-md:!hidden">
                        <Label className="mb-1"
                               htmlFor="ratioWidth">Screen Ratio</Label>
                        <div className="flex items-center max-w-[200px] gap-2">
                            <Input id="ratioWidth"
                                   type="number"
                                   placeholder="Ratio Width"
                                   onChange={props.onChangeRatioWidth}
                                   value={props.ratioWidth} />
                            <div className="">:</div>
                            <Input id="ratioHeight"
                                   type="number"
                                   placeholder="Ratio Height"
                                   onChange={props.onChangeRatioHeight}
                                   value={props.ratioHeight} />
                        </div>
                    </div>
                    <div className="grid mb-5">
                        <Label className="mb-1"
                               htmlFor="illustrationHeight">Illustration Height (%)</Label>
                        <Input id="illustrationHeight"
                               type="number"
                               placeholder="Illustration Height"
                               onChange={props.onChangeIllustrationHeight}
                               value={props.illustrationHeight} />
                    </div>
                    <div className="flex gap-2 mb-5 items-center">
                        <Switch id="quickPickToggle"
                                onCheckedChange={props.onChangeQuickPickToggle}
                                checked={props.quickPickToggle} />
                        <Label className=""
                               htmlFor="quickPickToggle">Quickpick</Label>
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <Label className=""
                               htmlFor="illustrationPlacement">Illustration Placement</Label>
                        <RadioGroup id="illustrationPlacement"
                                    defaultValue={props.illustrationPlacement}
                                    onValueChange={props.onChangeIllustrationPlacement}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="placementTop"
                                                id="placementTop" />
                                <Label className="cursor-pointer"
                                       htmlFor="placementTop">Top</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="placementCenter"
                                                id="placementCenter" />
                                <Label className="cursor-pointer"
                                       htmlFor="placementCenter">Center</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="placementBottom"
                                                id="placementBottom" />
                                <Label className="cursor-pointer"
                                       htmlFor="placementBottom">Bottom</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <Label className="">Illustration Background</Label>
                        <ColorPicker
                            colorResult={props.illustrationBgColor}
                            onChangeColor={props.onChangeIllustrationBgColor}
                        />
                    </div>
                    <div className="flex flex-col gap-2 mb-5">
                        <Label className="">Gradient Color</Label>
                        <ColorPicker
                            colorResult={props.gradientColor}
                            onChangeColor={props.onChangeGradientColor}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreenController;