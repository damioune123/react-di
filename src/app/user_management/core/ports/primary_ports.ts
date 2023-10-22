import {User} from "../domain/entities/user.ts";
import { Effect } from "effect";
import {MissingTranslation} from "../domain/errors/MissingTranslation.ts";
export type UserUseCases = {
    listUsers: Effect.Effect<unknown, never, User[]>
}

export type TranslationUseCases = {
    translate: (key: string) => Effect.Effect<unknown, MissingTranslation, string>
}
