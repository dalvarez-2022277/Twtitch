export const validationAvatarUrl = (url) => {
  const regex = /^(ftp|http|https):\/\/[^ "]+$/
    return regex.test(url)
}

export const avartarUlVlidationMessage = 'Esta no es una URL valida'