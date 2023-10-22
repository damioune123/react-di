import {User} from "../../core/domain/entities/user.ts";
import {UserRepository} from "../../core/ports/secondary_ports.ts";
import {Effect} from "effect";

const users: User[] =[
    {
        name: 'John'
    },
    {
        name: 'Jane'
    }
]

export const inMemoryUserRepositoryLive = UserRepository.of({
    listUsers: Effect.succeed(users)
})