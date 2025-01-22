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

		colors: {
			black: string
		}
	}
}
