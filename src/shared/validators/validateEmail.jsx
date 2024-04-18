export const ValidateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
};

export const emailValidationMessage = 'El email no es valido, ingresa un correo valido';