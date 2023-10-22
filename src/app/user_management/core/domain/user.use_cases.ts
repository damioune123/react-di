import {Effect} from "effect";
import {UserRepository} from "../ports/secondary_ports.ts";
import {UserUseCases} from "../ports/primary_ports.ts";

export const userUseCasesLive = UserRepository.pipe(
    Effect.flatMap((userRepository): Effect.Effect<never, never, UserUseCases> =>
        Effect.succeed({
            listUsers: userRepository.listUsers
        })
    )
)