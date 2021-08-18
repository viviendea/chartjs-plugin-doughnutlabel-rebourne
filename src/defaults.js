/**
 * @module Options
 */

'use strict';

export default {
  /**
   * The font options used to draw the label text.
   * @member {Object|Array|Function}
   * @prop {String} font.family - defaults to Chart.defaults.global.defaultFontFamily
   * @prop {Number} font.lineHeight - defaults to 1.2
   * @prop {Number} font.size - defaults to Chart.defaults.global.defaultFontSize
   * @prop {String} font.style - defaults to Chart.defaults.global.defaultFontStyle
   * @prop {Number} font.weight - defaults to 'normal'
   * @default Chart.defaults.font.*
   * @prop {Number} paddingPercentage - how much padding to add when scaling very large text (value in percentage of 100)
   * @prop {Bool} display - show label or not
   * @prop {String} api - specify which plugin core api to use to draw labels
   */
  font: {
    family: undefined,
    lineHeight: 1.2,
    size: undefined,
    style: undefined,
    weight: null,
  },
  paddingPercentage: 10,
  display: true,
  api: 'beforeDatasetDraw',
  color: '#000000',
};
