import 'styled-components/native'

declare module 'styled-components/native' {
	export interface DefaultTheme {
		buttons: {
			primary: string
			secondary: string
			label: {
				primary: string
				secondary: string
			}
		}

		textinputs: {
			background: string
			placeholder: {
				color: string
			}
		}

		colors: {
			black: string
		}
	}
}
