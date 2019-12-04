module.exports = {
  'make_targets': {
    'linux': [
      'deb'
    ]
  },
  'electronPackagerConfig': {
    'asar': false,
    'app-copyright': 'Barco NV',
    'prune': true,
    'ignore': [
      '^/(debian|doc|prestart|Dockerfile|env.sh|Jenkinsfile|install.sh|coverage|test|Makefile|build-scripts|results|packer-cache|yarn.lock)',
      'node_modules\\/.*\\/bin\\/',
      '\\.gitmodules|\\.sln|\\.vcproj|\\.gitattributes|\\.dsp|\\.vscode|\\.nyc_output|\\.npmignore|\\.travis\\.yml|\\.eslintrc|\\.eslintignore|\\.eslintrc\\.yml|\\.gitignore|README\\.md~|\\.DS_Store'
      //'^(?!\\/app|\\/tmp|\\/src|\\/scripts|\\/resources|\\/package.json).*$',
    ]
  },
  'electronInstallerDebian': {}
}
