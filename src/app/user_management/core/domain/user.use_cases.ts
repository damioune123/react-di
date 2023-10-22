import {Effect} from "effect";
import {UserRepository} from "../ports/secondary_ports.ts";

export const userUseCasesLive = {
    listUsers: UserRepository.pipe(Effect.flatMap((userRepository) => userRepository.listUsers ))
}