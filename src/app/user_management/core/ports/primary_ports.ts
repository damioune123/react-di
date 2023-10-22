import {User} from "../domain/entities/user.ts";
import { Effect } from "effect";
export type UserUseCases = {
    listUsers: Effect.Effect<never, never, User[]>
}

export type TranslationUseCases = {
    translate: (key: string) => string
}
