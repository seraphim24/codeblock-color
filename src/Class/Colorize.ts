import { bgColorEnum, textColorEnum, textDecorationEnum, textStyleEnum } from '../Enum';
import { textStyleOptionsTypes } from '../Types';

const startStyle = '\u001b[';
const resteStyle = '\u001b[0m';
const startString = '```ansi\n';
const endString = ' ```';
const separator = '%_';

/**
 * @description Create a string with formated color that Discord can use to show color in message or in embed description and value of field. It work like styling the "console.log()" in web. `console.log('%_A red text', 'color : red')`.
 * @param {string} text - The string to format.
 * @param {textStyleOptionsTypes} textStyle - The params formating options.
 * @example const formated = new TextColorize('%_A bold blue text %_And a text with underline and dark blue background', { style: 'BOLD', textColor: 'BLUE' }, { decoration: 'UNDERLINE', bgColor: 'DARK_BLUE' }).getStyled()
 * @method setText - Edit the text.
 * @param {string} text - The new text to set for the instance.
 *
 * @method getStyled - Get the formated string.
 */
export class TextColorize {
	text: string;
	textStyle?: textStyleOptionsTypes[];
	constructor(text: string, ...textStyle: textStyleOptionsTypes[]) {
		this.text = text;
		this.textStyle = textStyle;
	}

	/**
	 * Edit the text.
	 * @param {string} text - The new text to set for the instance.
	 * @param {textStyleOptionsTypes} textStyle - The new params formating options.
	 * @returns the instance of the class
	 */
	setText(text: string, ...textStyle: textStyleOptionsTypes[]) {
		this.text = text;
		this.textStyle = textStyle;
		return this;
	}
	private splitText(str: string) {
		const args = str.split(separator);
		args.shift();
		return args;
	}

	/**
	 * Format the string in the instance of the class.
	 * @returns {string} - The formated text.
	 */
	getStyled(): string {
		let styled = '';
		const strArray = this.splitText(this.text);
		for (let i = 0; i < strArray.length; i++) {
			if (this.textStyle && this.textStyle[i]) {
				styled += startStyle;
				styled += textStyleEnum[this.textStyle[i].style || 'NORMAL'];
				if (this.textStyle[i].decoration) {
					styled += ';' + textDecorationEnum[this.textStyle[i].decoration!];
				}
				if (this.textStyle[i].bgColor) {
					styled += ';' + bgColorEnum[this.textStyle[i].bgColor!];
				}
				if (this.textStyle[i].textColor) {
					styled += ';' + textColorEnum[this.textStyle[i].textColor!];
				}
			}
			styled += 'm' + strArray[i].trim() + resteStyle + ' ';
		}
		return startString + styled + endString;
	}
}
