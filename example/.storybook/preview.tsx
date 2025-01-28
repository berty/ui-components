import React from 'react'
import { DefaultTheme, ThemeProvider } from '@berty/ui-components'
import type { Preview } from '@storybook/react'

const theme: DefaultTheme = {
	colors: {
		black: '#000000',
	},
	textinputs: {
		background: '#5999fa',
		placeholder: {
			color: '#535AE4',
		},
	},
	buttons: {
		primary: '#000000',
		secondary: '#E5E5E5',
		label: {
			primary: '#ffffff',
			secondary: '#000000',
		},
	},
}

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		Story => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		),
	],
}

export default preview
