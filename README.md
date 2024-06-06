# Codeblock Color

Codeblock color is a package for discord that allow you to add color to your blockquote. It also can add **Bold** and <u>underline</u> to your text or both.

It only support color that discord have set.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

To install this project, follow the steps below:

### npm

```
npm i codeblock-color
```

## Usage

```js
const { TextColorize } = require('codeblock-color');

const text = '%_this part will be blue %_and this par will have a orange background';

const colorizedText = new TextColorize(text, { textColor: 'BLUE' }, { bgColor: 'ORANGE' });

// Color text can be either put in discordEmbed description
// or value options of field and also directly in reply.
```

this a example used in a ping command to let add color to ping values. ![ping example](./images/example.png)

### Formating option

- textColor : GRAY, RED, GREEN, YELLOW, BLUE, PINK, CYAN, WHITE
- bgColor : DARK_BLUE, ORANGE, MARBLE_BLUE, GREYISH_TURQUOISE, GRAY, INDINGO, LIGHT_GRAY, WHITE
- style: NORMAL (default), BOLD
- decoration : UNDERLINE

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
