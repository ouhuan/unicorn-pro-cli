module.exports = [
  {
    type: 'list',
    message: '请选择模板类型:',
    name: 'templateType',
    choices: [
      { name: 'h5', value: 'unicorn-h5' },
      { name: 'pc-admin', value: 'unicorn-pc' },
      { name: '微信小程序', value: 'mini-program' },
    ]
  },
]