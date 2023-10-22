import {TranslationUseCases, UserUseCases} from "../../core/ports/primary_ports.ts";
import * as React from "react";
import {Effect} from "effect";
import {userUseCasesLive} from "../../core/domain/user.use_cases.ts";
import {TranslationRepository, UserRepository} from "../../core/ports/secondary_ports.ts";
import {inMemoryUserRepositoryLive} from "../../secondary_adapters/user_repository/in_memory_user_repository.ts";
import {translationUseCasesLive} from "../../core/domain/translation.use_cases.ts";
import {
    inMemoryTranslationRepositoryLive
} from "../../secondary_adapters/translation_repository/in_memory_translation_repository.ts";

export interface DIContainerContext {
    userUseCases: UserUseCases;
    translationUseCases: TranslationUseCases;
}

const DIContainerContext = React.createContext<DIContainerContext | null>(null);

export const DIContainerProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [diContainerValue, setDiContainerValue] = React.useState<DIContainerContext | null >(null);
    React.useEffect(() => {
        Promise.all([Effect.runPromise(Effect.provideService(
            userUseCasesLive,
            UserRepository,
            inMemoryUserRepositoryLive)
        ), Effect.runPromise(Effect.provideService(
            translationUseCasesLive,
            TranslationRepository,
            inMemoryTranslationRepositoryLive)
        )
        ]).then(([userUseCases, translationUseCases]) => setDiContainerValue({userUseCases, translationUseCases}))

    }, []);
    if (diContainerValue === null) {
        return <div>Loading dependencies</div>
    }
    return <DIContainerContext.Provider value={diContainerValue}>{children} </DIContainerContext.Provider>
}

export const useService = ()  => {
    const context = React.useContext(DIContainerContext);
    if (context === null) {
        throw new Error('useService must be used within a DIContainerProvider');
    }
    return context;
}
