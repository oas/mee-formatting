//% block="Text Formatting"
//% icon="\uf035"
//% color="#e89005"
namespace formatting {
	//% block="change text style of %text to %style"
	export function formatStyle(text: string, style: TextStyle): string {
		switch (style) {
			case TextStyle.NORMAL:
				return text;
			case TextStyle.ITALIC:
				return "§o" + text;
			case TextStyle.BOLD:
				return "§l" + text;
			case TextStyle.UNDERLINED:
				return "§n" + text;
		}
	}

	//% block="change text color of %text to %color"
	export function formatColor(text: string, color: TextColor): string {
		switch (color) {
			case TextColor.RED:
				return "§4" + text;
			case TextColor.ORANGE:
				return "§6" + text;
			case TextColor.YELLOW:
				return "§e" + text;
			case TextColor.GREEN:
				return "§2" + text;
			case TextColor.BLUE:
				return "§9" + text;
			case TextColor.PURPLE:
				return "§5" + text;
		}
	}

	//% block="change text style and color of %text to %style and %color"
	export function format(text: string, style: TextStyle, color: TextColor): string {
		return formatColor(formatStyle(text, style), color);
	}

	export enum TextStyle {
		//% block=normal
		NORMAL,
		//% block=italic
		ITALIC,
		//% block=bold
		BOLD,
		//% block=underlined
		UNDERLINED
	}

	export enum TextColor {
		//% block=red
		RED,
		//% block=orange
		ORANGE,
		//% block=yellow
		YELLOW,
		//% block=green
		GREEN,
		//% block=blue
		BLUE,
		//% block=purple
		PURPLE
	}
}