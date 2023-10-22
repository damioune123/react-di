import { Data } from "effect"
export interface MissingTranslation extends Data.Case {
    readonly _tag: "MissingTranslation";
    readonly key: string;
}