/// <reference types="cypress" />


const cucumber = require('cypress-cucumber-preprocessor').default
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  // caminho da pasta onde estão presentes os arquivos JSON dos ambientes
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

const pdf = require('pdf-parse');

const repoRoot = path.join(__dirname, '..', '..', 'mydownloads') // assumes pdf at project root

const parsePdf = async (pdfName) => {
  const pdfPathname = path.join(repoRoot, pdfName)
  let dataBuffer = fs.readFileSync(pdfPathname);
  return await pdf(dataBuffer) //use async/await since pdf returns a promise
}

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  on('task', {
    downloadFile,
    getPdfContent (pdfName) {
      return parsePdf(pdfName)
    }
  })
  // aceita um valor de "configFile" ou usa "hml" por padrão
  const file = config.env.configFile || 'hml'
  return getConfigurationByFile(file)
}