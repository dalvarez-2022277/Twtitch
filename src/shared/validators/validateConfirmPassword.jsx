export const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
};

export const confirmPasswordValidationMessage = 'Las contraseñas no coinciden';