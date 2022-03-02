import React from 'react';
import { DeleteOutline } from '@mui/icons-material';

// Button Compartilhado.
import { BtnActionsTables } from './../css/buttonsActionTables';

interface IConfigButtonDelete {
    children?: React.ReactNode;
    action(): any;
}


export default function ButtonDelete({ action }: IConfigButtonDelete) {
    return (
        <div>
            <BtnActionsTables onClick={action}>
                <DeleteOutline />
            </BtnActionsTables>
        </div>
    );
}