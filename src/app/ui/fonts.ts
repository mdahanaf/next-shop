import { Bitcount_Ink } from "next/font/google";
import localFont from "next/font/local"

export const bitcountFont = Bitcount_Ink();

export const myLocalFont = localFont({
    src: "../fonts/LoveDays-2v7Oe.ttf",
    weight: "400",
    style: "normal"
});