import * as React from 'react';
import {Effect} from "effect";
import {User} from "../../core/domain/entities/user.ts";
import {useService} from "../providers/di_container.tsx";

type UsersTableState = {
    _tag: 'LOADING'
}  | {_tag: 'SUCCESS', users: User[] }


const useUsersTableState = (): UsersTableState => {
    const { userUseCases} = useService();
    const [usersTableState, setUsersTableState] = React.useState<UsersTableState>({_tag: 'LOADING'});
    React.useEffect(() => {
        Effect.runPromise(userUseCases.listUsers).then((users) => setUsersTableState({_tag: 'SUCCESS', users}))
    }, [userUseCases]);
    return usersTableState

}
export const UsersTable = (): React.JSX.Element => {
    const { translationUseCases} = useService();

    const usersTableState = useUsersTableState();

    if (usersTableState._tag === 'LOADING') {
        return <div>Users are loading</div>
    }
    return (
        <div>
            {usersTableState.users.map((user) => <div>{translationUseCases.translate('name') }: {user.name} </div>)}
        </div>
    )
}


