# Chart.js Doughnut plugin to allow for lines of text in the middle

Chart.js plugin module that allows to display multiple lines of text centered in the middle area of the doughnut charts. This plugin is forked from [https://github.com/ciprianciurea/chartjs-plugin-doughnutlabel](https://github.com/ciprianciurea/chartjs-plugin-doughnutlabel) to provide support for Chart.js v3 as well as some other improvements and bug fixes. This is a BREAKING change meaning this plugin will NOT work with Chart.js v3.

## Demo
Have a look at the [Demo page](https://alexkuc.github.io/chartjs-plugin-doughnutlabel-rebourne/samples/index.html).

## Table of contents

- [Installation](#installation)
- [Usage example](#usage)
- [Development](#development)
- [License](#license)

## Installation

Install through npm:

```bash
npm install --save chartjs-plugin-doughnutlabel-rebourne
```

Don't forget to install v3 of Chart.js:

```bash
npm install --save chart.js@next
```

## Usage

```js
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'The title',
            font: {
              size: '60'
            }
          },
          {
            text: getTotal,
            font: {
              size: '50'
            },
            color: 'grey'
          },
          {
            text: '$100.000',
            font: {
              size: '30'
            },
            color: 'red'
          },
          {
            text: '95%',
            font: {
              size: '45'
            },
          color: 'green'
          }
        ]
      }
    }
  }
});
```

## Usage without a module bundler

Using CDN is probably the best way - [jsDelivr](https://www.jsdelivr.com/package/npm/chartjs-plugin-doughnutlabel-rebourne). Select the `.min` file with SRI parameters for extra safety. If you need to debug any issues, select the full version instead.

Alternatively, the plugin can be manually downloaded from the
[Releases page on GitHub!](https://github.com/alexkuc/chartjs-plugin-doughnutlabel-rebourne/releases)

```html
<script src="chartjs-plugin-doughnutlabel.js"></script>
```

or use the minified version

```html
<script src="chartjs-plugin-doughnutlabel.min.js"></script>
```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

```bash
npm install
```

The following commands are available via `package.json`:

| Command | Purpose |
| :--- | :--- |
| `npm run lint` | perform code linting |
| `npm run build ` | build dist files |
| `npm run build --watch` | build and watch for changes (inc. browser-sync) |
| `npm run package` | create an archive with dist files and samples |

## License

`chartjs-plugin-doughnutlabel` is available under the [MIT license](LICENSE.md).
