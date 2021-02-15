'use strict';

import Chart from 'chart.js';
import defaults from './defaults';
import utils from './utils';

var helpers = Chart.helpers;

Chart.defaults.plugins.doughnutlabel = defaults;

export default {
  id: 'doughnutlabel',
  beforeDatasetDraw: function(chart, args, options) {
    if (options && options.labels && options.labels.length > 0) {
      var ctx = chart.ctx;
      var resolve = helpers.resolve;

      var innerLabels = [];
      options.labels.forEach(function(label) {
        var text =
          typeof label.text === 'function' ? label.text(chart) : label.text;
        var innerLabel = {
          text: text,
          font: utils.parseFont(
            resolve([label.font, options.font, {}], ctx, 0)
          ),
          color: resolve(
            [label.color, options.color, Chart.defaults.color],
            ctx,
            0
          ),
        };
        innerLabels.push(innerLabel);
      });

      var textAreaSize = utils.textSize(ctx, innerLabels);

      var paddingPercentage = resolve(
        [
          options.paddingPercentage,
          Chart.defaults.plugins[this.id].paddingPercentage,
        ],
        ctx,
        0
      );

      // add "padding" between inner circle and text area
      var padding = 1 - paddingPercentage / 100;

      // Calculate the adjustment ratio to fit the text area into the doughnut inner circle
      var hypotenuse = Math.sqrt(
        Math.pow(textAreaSize.width, 2) + Math.pow(textAreaSize.height, 2)
      );
      var innerDiameter = args.meta.controller.innerRadius * 2;
      var fitRatio = (innerDiameter / hypotenuse) * padding;

      // Adjust the font if necessary and recalculate the text area after applying the fit ratio
      if (fitRatio < 1) {
        innerLabels.forEach(function(innerLabel) {
          innerLabel.font.size = Math.floor(innerLabel.font.size * fitRatio);
          innerLabel.font.lineHeight = undefined;
          innerLabel.font = utils.parseFont(
            resolve([innerLabel.font, {}], ctx, 0)
          );
        });

        textAreaSize = utils.textSize(ctx, innerLabels);
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // The center of the inner circle
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

      // The top Y coordinate of the text area
      var topY = centerY - textAreaSize.height / 2;

      var i;
      var ilen = innerLabels.length;
      var currentHeight = 0;
      for (i = 0; i < ilen; ++i) {
        ctx.fillStyle = innerLabels[i].color;
        ctx.font = innerLabels[i].font.string;

        // The Y center of each line
        var lineCenterY =
          topY + innerLabels[i].font.lineHeight / 2 + currentHeight;
        currentHeight += innerLabels[i].font.lineHeight;

        // Draw each line of text
        ctx.fillText(innerLabels[i].text, centerX, lineCenterY);
      }
    }
  },
};
