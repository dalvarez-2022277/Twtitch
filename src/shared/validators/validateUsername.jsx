export const validateUsername = (username) => {
    const regex = /^\S{3,8}$/
    return regex.test(username)
};

export const usernameValidationMessage = 'El nombre de usuario debe tener al menos 5 caracteres';