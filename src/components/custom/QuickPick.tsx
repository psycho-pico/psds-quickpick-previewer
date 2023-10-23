"use client";

import Image from "next/image";
import biometricIcon from '@/public/icons/biometrics.png';
import infoIcon from '@/public/icons/info.png';
import rightIcon from '@/public/icons/right.png';
import menu1 from '@/public/icons/product/sub-menu-1.png';
import menu2 from '@/public/icons/product/sub-menu-2.png';
import menu3 from '@/public/icons/product/sub-menu-3.png';
import menu4 from '@/public/icons/product/sub-menu-4.png';
import {Button} from "@/src/components/ui/button";

const QuickPick = () => {
    return (
        <>
            <div className="flex items-center pb-6 gap-1">
                <h5 className="text-lg font-extrabold">Menu Cepat</h5>
                <Image src={infoIcon}
                       alt=""
                       width={54}
                       height={54}
                       className="w-5 h-5" />
            </div>
            <div className="flex flex-row justify-between mb-4 gap-2 p-4 rounded-lg border">
                <div className="">
                    <div className="mb-4 text-sm font-extrabold">Harga Emas Hari Ini</div>
                    <div className="mb-1 text-sm font-semibold">Harga Beli</div>
                    <div className="flex items-center gap-1">
                        <div className="text-sm font-extrabold">Rp 9.150</div>
                        <div className="text-xs font-semibold">/ 0,01 gr</div>
                    </div>
                </div>
                <div className="">
                    <div className="mb-4">
                        <div className="flex mb-4 text-sm font-extrabold text-[#00AB4E] cursor-pointer">Lihat Grafik Emas
                            <Image src={rightIcon}
                                   alt=""
                                   width={54}
                                   height={54}
                                   className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="mb-1 text-sm font-semibold">Harga Jual</div>
                    <div className="flex items-center gap-1">
                        <div className="text-sm font-extrabold">Rp 8.648</div>
                        <div className="text-xs font-semibold">/ 0,01 gr</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center mb-6 gap-2">
                <div className="flex flex-col items-center cursor-pointer">
                    <Image src={menu1}
                           alt=""
                           width={54}
                           height={54}
                           className="w-8 h-8" />
                    <div className="text-xs text-center">Bayar Gadai & Cicilan</div>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Image src={menu2}
                           alt=""
                           width={54}
                           height={54}
                           className="w-8 h-8" />
                    <div className="text-xs text-center">Beli Emas</div>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Image src={menu3}
                           alt=""
                           width={54}
                           height={54}
                           className="w-8 h-8" />
                    <div className="text-xs text-center">Listrik (PLN)</div>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Image src={menu4}
                           alt=""
                           width={54}
                           height={54}
                           className="w-8 h-8" />
                    <div className="text-xs text-center">Pulsa & Paket Data</div>
                </div>
            </div>
            <div className="flex gap-2 mb-6">
                <Button className="w-full"
                        variant="default">
                    Masuk
                </Button>
                <Image src={biometricIcon}
                       alt=""
                       className="cursor-pointer" />
            </div>
            <div className="flex gap-1 mb-6 justify-center">
                <div className="text-xs font-semibold">Belum Punya Akun?</div>
                <div className="text-xs font-extrabold text-[#00AB4E] cursor-pointer">Daftar</div>
            </div>
        </>
    );
};


export default QuickPick;