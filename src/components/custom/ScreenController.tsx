"use client";

import {Input} from "@/src/components/ui/input";
import {Label} from "@/src/components/ui/label";
import {Switch} from "@/src/components/ui/switch";
import React from "react";

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
}

const ScreenController = (props: ScreenControllerProps) => {
    return (
        <div className={`fixed absolute left-0 top-0 max-${props.maxSizeForFullScreen}:!hidden m-3`}>
            <div className="grid mb-5">
                <Label className="text-white mb-1"
                       htmlFor="ratioWidth">Screen Ratio</Label>
                <div className="flex items-center max-w-[200px] gap-2">
                    <Input id="ratioWidth"
                           type="number"
                           placeholder="Ratio Width"
                           onChange={props.onChangeRatioWidth}
                           value={props.ratioWidth} />
                    <div className="text-white">:</div>
                    <Input id="ratioHeight"
                           type="number"
                           placeholder="Ratio Height"
                           onChange={props.onChangeRatioHeight}
                           value={props.ratioHeight} />
                </div>
            </div>
            <div className="grid mb-5">
                <Label className="text-white mb-1"
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
                <Label className="text-white"
                       htmlFor="quickPickToggle">Quickpick</Label>
            </div>
        </div>
    );
}

export default ScreenController;