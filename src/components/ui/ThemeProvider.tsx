import React from 'react'
import { DefaultTheme, ThemeProvider as RNThemeProvider } from 'styled-components'

type Props = {
	theme: DefaultTheme
	children?: React.ReactNode
}

const ThemeProvider = ({ children, theme }: Props) => {
	return <RNThemeProvider theme={theme}>{children}</RNThemeProvider>
}

export { DefaultTheme, ThemeProvider }
