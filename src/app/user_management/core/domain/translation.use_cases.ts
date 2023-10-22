import {TranslationRepository} from "../ports/secondary_ports.ts";
import {Effect, pipe} from "effect";
import {TranslationUseCases} from "../ports/primary_ports.ts";

export const translationUseCasesLive =  TranslationRepository.pipe(
    Effect.flatMap((translationRepository) =>
        pipe(translationRepository.fetch,
            Effect.flatMap((translations): Effect.Effect<never, never, TranslationUseCases> =>
                Effect.succeed({
        translate: (key: string) => {
            if (translations[key] !== undefined) {
                return translations[key]
            }
            return '';

        }
    })
    )
)))