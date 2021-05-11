const utils = require('./utils');
const config = require('./config');

module.exports = (api, options, rootOptions) => {
  const { templateType } = options
  const templateConf = config[templateType]
  api.extendPackage(templateConf.packageJson);

  api.render(templateConf.projectPath, {
    layoutAdaptation: options.layoutAdaptation,
  })
  api.onCreateComplete(() => {
    utils.removeVueCliDefaultFiles(templateConf, api)
  });
};