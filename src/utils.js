'use strict';

import Chart from 'chart.js';
import { valueOrDefault, toLineHeight, isNullOrUndef } from 'chart.js/helpers';

var utils = {
  parseFont: function (value) {
    var defaults = Chart.defaults;
    var size = valueOrDefault(value.size, defaults.font.size);
    var font = {
      family: valueOrDefault(value.family, defaults.font.family),
      lineHeight: toLineHeight(value.lineHeight, size),
      size: size,
      style: valueOrDefault(value.style, defaults.font.style),
      weight: valueOrDefault(value.weight, null),
      string: '',
    };

    font.string = utils.toFontString(font);
    return font;
  },

  toFontString: function (font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }

    const strOnly = new RegExp('^[0-9]+$');

    if (!strOnly.test(font.size) && typeof font.size !== 'number') {
      throw 'Invalid font size value! Only pixels allowed!';
    }

    return (
      (font.style ? font.style + ' ' : '') +
      (font.weight ? font.weight + ' ' : '') +
      font.size +
      'px ' +
      font.family
    );
  },

  textSize: function (ctx, labels) {
    var items = [].concat(labels);
    var ilen = items.length;
    var prev = ctx.font;
    var width = 0;
    var height = 0;
    var i;

    for (i = 0; i < ilen; ++i) {
      ctx.font = items[i].font.string;
      width = Math.max(ctx.measureText(items[i].text).width, width);
      height += items[i].font.lineHeight;
    }

    ctx.font = prev;

    var result = {
      height: height,
      width: width,
    };
    return result;
  },
};

export default utils;
