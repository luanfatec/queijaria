import React from 'react';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';

// Button Compartilhado.
import { BtnActionsTables } from './../css/buttonsActionTables';

interface IConfigButtonDelete {
    action(): any;
}


export default function ButtonEdit({ action }: IConfigButtonDelete) {
    return (
        <div>
            <BtnActionsTables onClick={action}>
                <ManageAccountsSharpIcon />
            </BtnActionsTables>
        </div>
    );
}