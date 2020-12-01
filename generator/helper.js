import shell from 'shelljs'
import fs from 'fs'

import {
    copyFileNotFoundErrorString
    , moveFileNotFoundErrorString
} from './constant'

export const makeDir = (path) => {
    let paths = path.split('/')
    paths.forEach((path) => {
        const isExist = fs.existsSync(path)
        if (!isExist) {
            shell.mkdir(path)
        }
    })
}

export const cdToFolder = (path = '') => {
    makeDir(path)
    shell.cd(path)
}

export const copyFile = (sourceFilePath, desPath) => {
    const isExist = fs.existsSync(sourceFilePath)
    if (!isExist) {
        return shell.error(copyFileNotFoundErrorString)
    }
    //maybe check exist destination folder
    return shell.cp(-f, sourceFilePath, desPath)
}

export const moveFile = (sourceFilePath, desPath) => {
    const isExist = fs.existsSync(sourceFilePath)
    if (!isExist) {
        return shell.error(moveFileNotFoundErrorString)
    }
    //maybe check exist destination folder
    return shell.mv(-f, sourceFilePath, desPath)
}

export const removeFile = (filePath) => {
    return shell.rm(filePath)
}

export const logText = (message = '') => {
    shell.echo(message)
}

export const rename = (oldName, newName) => {
    const isExistOldFile = fs.existsSync(oldName)
    const isExistNewFile = fs.existsSync(newName)
    if (isExistOldFile && !isExistNewFile) {
        shell.mv(oldName, newName)
    } else if (!isExistNewFile) {
        shell.touch(newName)
    } else {
        shell.error(newNameIsExist)
    }
}

export const makeStartRegionMessage = (regionName) => {
    return `==========START-${regionName}=========`
}

export const makeEndRegionMessage = (regionName) => {
    return `==========END-${regionName}=========`
}

export const makeSuccessMessage = (actionName) => {
    return `---${actionName} success!`
}

export const makeFailedMessage = (actionName, errorMessage) => {
    return `---${actionName} failed${errorMessage ? ` at ${errorMessage}` : ''}!`
}

export const writeToFile = (path, content) => {
    return fs.writeFileSync(path, content) 
}

export const readFromFile = (path) => {
    return fs.readFileSync(path)
}

const Helper = {
    makeFailedMessage,
    makeSuccessMessage,
    makeEndRegionMessage,
    makeStartRegionMessage,
    rename,
    logText,
    removeFile,
    moveFile,
    copyFile,
    cdToFolder,
    makeDir,
    writeToFile,
    readFromFile
}

export default Helper