import shell from 'shelljs'
import fs from 'fs'

import {
    copyFileNotFoundErrorString
    , moveFileNotFoundErrorString
} from '../constant'

export const makeDir = (path) => {
    let paths = path.split('/')
    paths.forEach((path) => {
        fs.exists(path, (isExist) => {
            if (!isExist) {
                shell.mkdir(path)
            }
        })
    })
}

export const cdToFolder = async (path = '') => {
    await makeDir(path)
    await shell.cd(path)
}

export const copyFile = (sourceFilePath, desPath) => {
    fs.exists(sourceFilePath, (isExist) => {
        if (!isExist) {
            return shell.error(copyFileNotFoundErrorString)
        }
        //maybe check exist destination folder
        return shell.cp(-f, sourceFilePath, desPath)
    })
}

export const moveFile = (sourceFilePath, desPath) => {
    fs.exists(sourceFilePath, (isExist) => {
        if (!isExist) {
            return shell.error(moveFileNotFoundErrorString)
        }
        //maybe check exist destination folder
        return shell.mv(-f, sourceFilePath, desPath)
    })
}

export const removeFile = (filePath) => {
    return shell.rm(filePath)
}

export const logText = (message = '') => {
    shell.echo(message)
}

export const rename = (oldName, newName) => {
    fs.exists(oldName, (isExistOldFile) => {
        fs.exists(newName, (isExistNewFile) => {
            if (isExistOldFile && !isExistNewFile) {
                shell.mv(oldName, newName)
            } else if (!isExistNewFile) {
                shell.touch(newName)
            } else {
                shell.error(newNameIsExist)
            }
        })
    })
}