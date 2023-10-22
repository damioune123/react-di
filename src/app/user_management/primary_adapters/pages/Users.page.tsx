import * as React from "react";
import {useService} from "../providers/di_container.tsx";

export const UsersTable = (): React.JSX.Element => {
    const { translationUseCases} = useService();


    return (
        <div>
            <header>{translationUseCases.translate('users_list')}</header>
            <UsersTable />
        </div>
    )
}