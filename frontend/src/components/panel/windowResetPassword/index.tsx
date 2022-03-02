import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';
import {
    Container, TitleWindow, WindowContent
} from './css/styled';

interface IConfigWindowPasswordReseted {
    passwordReseted: string;
    handleClose(): void;
}

export default function WindowResetPassword({ passwordReseted, handleClose }: IConfigWindowPasswordReseted) {

    return (
        <>
            <Container>
                <TitleWindow>
                    <h3>Nova senha:</h3>
                </TitleWindow>
                <WindowContent>
                    <div className='content-text-password'>
                        <span>{passwordReseted}</span>
                    </div>

                    <div className='info-important'>
                        <small>Essa senha só é vista uma única vez, por esse diálog, não feche sem anotar!</small>
                    </div>
                </WindowContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus style={{
                        color: "#333333"
                    }}>
                        Fechar
                    </Button>
                </DialogActions>
            </Container>
        </>
    );
}