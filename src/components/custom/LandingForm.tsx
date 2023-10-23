"use client";

import {FunctionComponent} from "react";
import styles from "@/src/components/custom/LandingForm.module.scss"
import Login from "@/src/components/custom/Login";
import QuickPick from "@/src/components/custom/QuickPick";

interface LandingFormProps {
    illustrationHeightInPercent: number | undefined,
    quickPick: boolean
}

const LandingForm: FunctionComponent<LandingFormProps> = ({
                                                              illustrationHeightInPercent, quickPick
                                                          }) => {
    return (
        <div className="bg-white -my-4 rounded-t-xl relative overflow-hidden"
             style={{height: `calc(${100 - (illustrationHeightInPercent ?? 0)}% + 1rem)`}}>
            <div className={`${styles.loginScroll} overflow-y-auto p-4 pb-6 h-full`}>
                {quickPick
                    ? <QuickPick />
                    : <Login />
                }
            </div>
        </div>
    );
}

LandingForm.defaultProps = {
    illustrationHeightInPercent: 50,
    quickPick: true

};

export default LandingForm;