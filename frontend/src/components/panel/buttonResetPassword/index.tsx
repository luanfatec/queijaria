import React from 'react';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';

// Button Compartilhado.
import { BtnActionsTables } from '../css/buttonsActionTables';

interface IConfigButtonDelete {
    action(): any;
}


export default function ButtonResetPassword({ action }: IConfigButtonDelete) {
    return (
        <div>
            <BtnActionsTables onClick={action}>
                <LockResetSharpIcon />
            </BtnActionsTables>
        </div>
    );
}