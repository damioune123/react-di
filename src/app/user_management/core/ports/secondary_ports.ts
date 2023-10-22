import {User} from "../domain/entities/user.ts";
import {Context, Effect} from "effect"

export type UserRepository= {
    listUsers: Effect.Effect<never, never, User[]>
}

export type TranslationRepository = {
    fetch: Effect.Effect<never, never, Record<string, string>>
}
export const UserRepository = Context.Tag<UserRepository>('user_management/user_repository');

export const TranslationRepository = Context.Tag<TranslationRepository>('user_management/translation_repository');