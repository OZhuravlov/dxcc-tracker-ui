import { BandType } from "./band-type";

export class Band {
    static readonly _160M = {band: "160m", bandType: BandType.HF};
    static readonly _80M  = {band: "80m", bandType: BandType.HF};
    //static readonly _60M  = {band: "60m", bandType: BandType.HF};
    static readonly _40M  = {band: "40m", bandType: BandType.HF};
    static readonly _30M  = {band: "30m", bandType: BandType.HF};
    static readonly _20M  = {band: "20m", bandType: BandType.HF};
    static readonly _17M  = {band: "17m", bandType: BandType.HF};
    static readonly _15M  = {band: "15m", bandType: BandType.HF};
    static readonly _12M  = {band: "12m", bandType: BandType.HF};
    static readonly _10M  = {band: "10m", bandType: BandType.HF};
    static readonly _6M   = {band: "6m", bandType: BandType.VHF};
    static readonly _2M   = {band: "2m", bandType: BandType.UHF};
    static readonly _70CM = {band: "70cm", bandType: BandType.UHF};
}