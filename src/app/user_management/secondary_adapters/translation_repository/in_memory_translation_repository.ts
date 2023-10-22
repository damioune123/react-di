import {TranslationRepository} from "../../core/ports/secondary_ports.ts";
import {Effect} from "effect";

const translations: Record<string, string> = {
    users_list: 'List of users',
    name: 'Name'
}

export const inMemoryTranslationRepositoryLive = TranslationRepository.of({
    fetch: Effect.succeed(translations)
})