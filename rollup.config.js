export default {
  name: 'DoughnutLabel',
  input: 'src/plugin.js',
  format: 'umd',
  external: ['chart.js', 'chart.js/helpers'],
  globals: {
    'chart.js': 'Chart',
    'chart.js/helpers': 'Chart.helpers'
  },
};
