import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/Login/login';
import { api } from '../../../services/api';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useSnackbar } from 'notistack';


import {
    WindowConfigUser, WindowConfigUserTitle, WindowConfigUserContent
} from './css/styled';


interface StatePassword {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const ValuesTypeUser = [
    {
        value: 0,
        label: 'Administrador',
    },
    {
        value: 1,
        label: 'Vendedor',
    },
    {
        value: 2,
        label: 'Fornecedor',
    },
];

interface IConfigUserModel {
    name: string;
    email: string;
    type_user: number;
    nickname: string;
    id_user: string;
    created_at?: Date;
    updated_at?: Date;
}

interface IConfigWindowWditUser {
    userModelObject?: any;
    closeModel(): void;
}

export default function WindowEditUser({ closeModel, userModelObject }: IConfigWindowWditUser) {

    /**
     * Alert Global.
     */
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    /**
     * Password Value Config
     */
    const [values, setValues] = useState<StatePassword>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = (prop: keyof StatePassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    // End Password Config


    /**
     * Config Type User Values...
     */
    const [typeUserSelect, setTypeSelectUser] = useState(userModelObject?.type_user);
    const handleChangeTypeUser = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTypeSelectUser(parseInt(event.target.value));
    };
    // Config Type User Values


    /**
     * Loading Button Save
     */
    const [loading, setLoading] = useState(false);
    function handleClick() {
        setLoading(true);
        handleSendDataForUpdated();
    }
    // End Loading Button Save


    /**
     * Config Other Data User
     */
    const [nameUser, setNameUser] = useState<String>(String(userModelObject?.name));
    const [emailUser, setEmailUser] = useState<String>(String(userModelObject?.email));
    const [nicknameUser, setNicknameUser] = useState<String>(String(userModelObject?.nickname));
    // End Config Other Data User


    /**
     * Envio de dados para atualização.
     */
    const { token } = useAuth();
    const handleSendDataForUpdated = () => {
        api.post("/edit-user", {
            id_user_edit: userModelObject?.id_user,
            name: nameUser,
            nickname: nicknameUser,
            email: emailUser,
            password: values.password,
            type_user: typeUserSelect
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setLoading(false);
            if (response.data.status && response.data.status === "error") {
                enqueueSnackbar(response.data.message, { variant: "error" });
                return false;
            }
            closeModel();
            enqueueSnackbar(response.data.message, { variant: "success" });
        }).catch(response => {
            console.log(response);
            setLoading(false);
            enqueueSnackbar(response.data.message, { variant: "error" });

        });
    }
    // End Envio de dados para atualização.

    return (
        <>
            <WindowConfigUser>

                {/* Titulo */}
                <WindowConfigUserTitle>
                    <h2>Editar Usuário</h2>
                    <div>
                        <IconButton onClick={closeModel}>
                            <CancelIcon />
                        </IconButton>
                    </div>
                </WindowConfigUserTitle>
                {/* End Title */}

                {/* Content */}
                <WindowConfigUserContent>

                    {/* Campo de Nome Completo */}
                    <TextField
                        label="Nome Completo"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '50%' }}
                        value={nameUser}
                        onChange={e => setNameUser(e.target.value)}
                    />
                    {/* End Campo de Nome Completo */}

                    {/* Campo de Apelido/Nickname/Usuário */}
                    <TextField
                        label="Apelido/Nickname"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '46%' }}
                        value={nicknameUser}
                        onChange={e => setNicknameUser(e.target.value)}
                    />
                    {/* End Campo de Apelido/Nickname/Usuário */}

                    {/* Campo de Endereço de E-mail */}
                    <TextField
                        label="Endereço de E-mail"
                        id="outlined-start-adornment"
                        type={'email'}
                        sx={{ m: 1, width: '70%' }}
                        value={emailUser}
                        onChange={e => setEmailUser(e.target.value)}
                    />
                    {/* End Campo de Endereço de E-mail */}

                    {/* Campo Tipo de Usuário */}
                    <TextField
                        label="Tipo de Usuário"
                        id="outlined-select-currency"
                        sx={{ m: 1, width: '26%' }}
                        select
                        value={userModelObject?.type_user || typeUserSelect}
                        onChange={handleChangeTypeUser}
                    >
                        {ValuesTypeUser.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    {/* End Campo Tipo de Usuário */}

                    {/* Campo da Senha */}
                    <FormControl sx={{ m: 1, width: '98%' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha de Acesso</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Senha de Acesso"
                        />
                    </FormControl>
                    {/* End Campo da Senha */}

                    {/* Botões de Ação */}
                    <div className='buttonsActions'>
                        <LoadingButton
                            color="info"
                            onClick={handleClick}
                            loading={loading}
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            variant="contained"
                        >
                            Atualizar
                        </LoadingButton>
                    </div>
                    {/* End Botões de Ação */}

                </WindowConfigUserContent>
                {/* End Content */}

            </WindowConfigUser>
        </>
    )
}