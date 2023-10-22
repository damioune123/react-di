import {User} from "../domain/entities/user.ts";
import {Context, Effect} from "effect"

export type UserRepository= {
    listUsers: Effect.Effect<never, never, User[]>
}

export const UserRepository = Context.Tag<UserRepository>('user_management/user_repository');