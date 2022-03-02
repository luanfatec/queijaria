/**
 * Mensagens destinadas ao Hook de Login
 */
export const MessagesLoginHook = {
    errors: {
        errorNicknameInvalid: "Por favor, informe o nome de usuário válido.",
        errorPasswordInvalid: "Por favor, informe uma senha válida.",
        errorPasswordAndUserIncorrects: "Senha e/ou usuário incorretos.",
        errorExecLogin: "Houve um erro ao tentar realizar login, por favor, tente novamente."
    },
    success: {
    }
}

/**
 * Mensagens destinadas a Página de Usuários e suas ações.
 */
export const MessagesTableUsers = {
    errors: {
        errorLoadingUsersData: "Erro ao tentar carregar os usuários.",
        errorSelectedUser: "Selecione um usuário antes.",
        errorSelectedOneUser: "Você só pode editar um usuário por vez.",
        errorSelectedUserForPassword: "Você não pode resetar a senha de mais de um usuário, por favor, selecione apenas um.",
    },
    success: {
        successResetedPassword: "Senha resetada com sucesso.",
    }
}


/**
 * Mensagens destinadas aos arquivos de formatação dos Hook Panel.
 */
export const MessagesFormats = {
    errors: {
        errorFormatDateDefault: "Data indefinida",
    },
    success: {}
}