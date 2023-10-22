import {TranslationRepository} from "../ports/secondary_ports.ts";
import {Effect, pipe} from "effect";
import {TranslationUseCases} from "../ports/primary_ports.ts";
import {MissingTranslation} from "./errors/MissingTranslation.ts";

export const translationUseCasesLive:  TranslationUseCases = {
    translate: (key) =>  TranslationRepository.pipe(
        Effect.flatMap((translationRepository) =>
            pipe(translationRepository.fetch,
                Effect.flatMap((translations ) => {
                    if(translations[key] !== undefined) {
                        return Effect.succeed(translations[key])
                    }
                    return Effect.fail({_tag: 'MissingTranslation', key} as MissingTranslation)
                } )
            )
        )
    )
}