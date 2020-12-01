import { ShellString } from 'shelljs'

export const copyFileNotFoundErrorString = new ShellString('file to copy was not found!')
export const moveFileNotFoundErrorString = new ShellString('file to move was not found!')
export const newNameIsExist = new ShellString('file with new name is exist!')