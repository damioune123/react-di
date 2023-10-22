import {Effect} from "effect";
import {UserRepository} from "../ports/secondary_ports.ts";
import {UserUseCases} from "../ports/primary_ports.ts";

export const userUseCasesLive: UserUseCases = {
    listUsers: UserRepository.pipe(Effect.flatMap((userRepository) => userRepository.listUsers ))
}