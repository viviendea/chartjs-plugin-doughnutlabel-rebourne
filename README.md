# Chart.js Doughnut plugin to allow for lines of text in the middle

Chart.js plugin module that allows to display multiple lines of text centered in the middle area of the doughnut charts 

## Demo
https://ciprianciurea.github.io/chartjs-plugin-doughnutlabel/samples/index.html

## Table of contents

- [Installation](#installation)
- [Usage example](#usage)
- [Development](#development)
- [License](#license)

## Installation

Install through npm:
```
npm install --save chartjs-plugin-doughnutlabel
```

## Usage 

```
var myDoughnutChart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: {
    plugins: {
      doughnutlabel: {
        labels: ['The title', 'The subtitle', '$100.000', '95%'],
        font: {
					size: '60',
					family: 'Arial, Helvetica, sans-serif',
					style: 'italic',
					weight: 'bold'
        },
        color: 'grey'						
      }
    }		
  }
});
```

### Usage without a module bundler
The plugin can be manually downloaded from the 
[Releases page on GitHub!](https://github.com/ciprianciurea/chartjs-plugin-doughnutlabel/releases)
```
<script src="chartjs-plugin-doughnutlabel.js"></script>
```
or use the minified version
```
<script src="chartjs-plugin-doughnutlabel.min.js"></script>
```

## Development

You first need to install node dependencies (requires [Node.js](https://nodejs.org/)):

    > npm install

The following commands will then be available from the repository root:

    > gulp lint             // perform code linting
    > gulp build            // build dist files
    > gulp build --watch    // build and watch for changes
		> gulp package          // create an archive with dist files and samples

## License

`chartjs-plugin-doughnutlabel` is available under the [MIT license](LICENSE.md).
