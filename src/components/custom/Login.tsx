"use client";

import Image from "next/image";
import pegadaianLogo from '@/public/pegadaian.png';
import biometricIcon from '@/public/icons/biometrics.png';
import {Button} from "@/src/components/ui/button";
import {Input} from "@/src/components/ui/input";
import {Checkbox} from "@/src/components/ui/checkbox";
import {Label} from "@/src/components/ui/label";

const Login = () => {
    return (
        <>
            <h5 className="text-lg font-extrabold pb-6">Login</h5>
            <div className="grid gap-2 mb-4">
                <Input id="username"
                       type="username"
                       placeholder="Nomor handphone / email" />
            </div>
            <div className="grid gap-2 mb-4">
                <Input id="password"
                       type="password"
                       placeholder="Password" />
            </div>
            <div className="gap-2 mb-10 flex justify-between">
                <div className="flex gap-2 items-center">
                    <Checkbox id="saveUserIdCbx" />
                    <div className="grid gap-1.5 leading-none">
                        <Label
                            htmlFor="saveUserIdCbx"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Simpan User ID
                        </Label>
                    </div>
                </div>
                <div className="text-sm font-extrabold text-[#00AB4E] cursor-pointer">
                    Lupa password?
                </div>
            </div>
            <div className="flex gap-2 mb-12">
                <Button className="w-full"
                        variant="default">
                    Masuk
                </Button>
                <Image src={biometricIcon}
                       alt="" />
            </div>
            <div className="flex flex-col items-center text-gray-500">
                <Image src={pegadaianLogo}
                       width={104}
                       height={22}
                       alt="" />
                <p className="text-xs mt-2 text-center">Terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK)</p>
            </div>
        </>
    );
};


export default Login;