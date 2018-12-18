//% block="Text Formatting"
//% icon=""
//% color="#e89005"
namespace formatting {
	//% block="format style to %style and color to %color of %text"
	export function format(text: string, style: TextStyle, color: TextColor): string {
		switch (style) {
			case TextStyle.BOLD:
				text = "§l" + text;
				break;
		}

		switch (color) {
			case TextColor.BLUE:
				text = "§1" + text;
				break;
			case TextColor.GREEN:
				text = "§2" + text;
				break;
			case TextColor.RED:
				text = "§4" + text;
				break;
			case TextColor.ORANGE:
				text = "§6" + text;
				break;
		}

		return text;
	}

	export enum TextColor {
		//% block=blue
		BLUE,
		//% block=green
		GREEN,
		//% block=red
		RED,
		//% block=orange
		ORANGE,
	}

	export enum TextStyle {
		//% block=bold
		BOLD
	}
}