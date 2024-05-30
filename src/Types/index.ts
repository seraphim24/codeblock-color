export type textColorTypes = 'GRAY' | 'RED' | 'GREEN' | 'YELLOW' | 'BLUE' | 'PINK' | 'CYAN' | 'WHITE';

export type bgColorTypes =
	| 'DARK_BLUE'
	| 'ORANGE'
	| 'MARBLE_BLUE'
	| 'GREYISH_TURQUOISE'
	| 'GRAY'
	| 'INDINGO'
	| 'LIGHT_GRAY'
	| 'WHITE';

export type textStyleTypes = 'NORMAL' | 'BOLD';

export type textDecorationTypes = 'UNDERLINE';

export type textStyleOptionsTypes = {
	textColor?: textColorTypes;
	bgColor?: bgColorTypes;
	style?: textStyleTypes;
	decoration?: textDecorationTypes;
};
