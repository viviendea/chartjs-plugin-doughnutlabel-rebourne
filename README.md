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

Install through yarn:

```bash
yarn install chartjs-plugin-doughnutlabel-rebourne
```

Don't forget to install v3 of Chart.js:

```bash
yarn install chart.js@next
```

After that, you need to activate the plugin, either globally :

```js
Chart.plugins.register(DoughnutLabel);
```

or for each chart separately:

```js
new Chart(ctx, {
  plugins: [DoughnutLabel]
})
```

## Usage

```js
options: {
  plugins: {
    doughnutlabel: {
      paddingPercentage: 5,
      labels: [
        {
          text: 'Text' or functionName,
          font: {
            size: '24',
            family: 'Arial, Helvetica, sans-serif',
            style: 'italic',
            weight: 'bold',
          },
          color: '#bc2c1a',
        },
      ],
    },
  },
},
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
yarn install
```

The following commands are available via `package.json`:

| Command | Purpose |
| :--- | :--- |
| `yarn lint` | perform code linting |
| `yarn build ` | build dist files |
| `yarn build --watch` | build and watch for changes (inc. browser-sync) |
| `yarn package` | create an archive with dist files and samples |

## License

`chartjs-plugin-doughnutlabel` is available under the [MIT license](LICENSE.md).
