import React from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

// Button Compartilhado.
import { BtnActionsTables } from '../css/buttonsActionTables';

interface IConfigButtonDelete {
    children?: React.ReactNode;
    action(): any;
}


export default function ButtonAddUser({ action }: IConfigButtonDelete) {
    return (
        <div>
            <BtnActionsTables onClick={action}>
                <PersonAddAltIcon />
            </BtnActionsTables>
        </div>
    );
}