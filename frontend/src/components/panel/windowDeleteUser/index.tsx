import React from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import {
    Container, TitleWindow, WindowContent
} from './css/styled';
import { api } from '../../../services/api';
import { useAuth } from '../../../hooks/Login/login';
import { MessagesTableUsers } from '../../../hooks/messages';
import { useSnackbar } from 'notistack';

interface IConfigWindowPasswordReseted {
    handleClose(): void;
    userDeletected: string;
    userName: string | undefined;
}


export default function WindowDeleteUser({ handleClose, userName, userDeletected }: IConfigWindowPasswordReseted) {
    const { token } = useAuth(); /// Get Token.

    // Alert Notify.
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    /**
     * Start Delete User
     */
    const handleDeleteUSer = () => {
        //
        api.post("/delete-user", {
                id_user_delete: userDeletected
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                const { data, status } = response;               

                if (status === 200) {
                    if (data.status && data.status === "success") {
                        enqueueSnackbar(data.message, { variant: "success" });
                        handleClose();
                        return true;
                    }
                }

                enqueueSnackbar(data.message, { variant: "error" });
            }).catch(response => {
                alert(response.data.message);
            });   
    }
    // End Delete User

    return (
        <>
            <Container style={{
                // boxShadow: "inset 0 0 1em #33333329"
                boxShadow: 'inset 0em .2em gold, inset 0 1px 1em #33333322'
            }}>
                <TitleWindow>
                    <h2>Aviso</h2>
                </TitleWindow>
                <WindowContent>
                    <div className='info-important'>
                        <small>Tem certeza que deseja excluir o usuário {userName}?</small>
                    </div>
                </WindowContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus style={{
                        color: "#333333",
                        backgroundColor: "#ffffff54",
                        boxShadow: "0px 1px 2px #33333349"
                    }}>
                        Fechar
                    </Button>

                    <Button onClick={handleDeleteUSer} autoFocus style={{
                        color: "#333333",
                        backgroundColor: "#ffffff54",
                        boxShadow: "0px 1px 2px #33333349"
                    }}>
                        Excluir
                    </Button>
                </DialogActions>
            </Container>
        </>
    );
}