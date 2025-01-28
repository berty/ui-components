import React from 'react'
import { TextInputProps } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

export type Props = {
	type: 'password' | 'text'
	theme: DefaultTheme
} & TextInputProps

export const TextField: React.FC<Props> = props => {
	const [isSecureText, setShowSecureText] = React.useState(props.type === 'password')

	return (
		<Container>
			<TextFieldStyled {...props} secureTextEntry={isSecureText} />
			{props.type === 'password' ? (
				<ToggleIcon>
					<FontAwesome size={28} name={isSecureText ? 'eye-slash' : 'eye'} onPress={() => setShowSecureText(prev => !prev)} />
				</ToggleIcon>
			) : null}
		</Container>
	)
}

const Container = styled.View<Props>`
	flex-direction: row;
	align-items: center;
	border-width: 1px;
	border-radius: 4px;
	padding: 2px;
	margin: 10px 0;
	border-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
	color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
	background-color: ${({ theme }: { theme: DefaultTheme }) => theme.textinputs?.background};
`

const TextFieldStyled = styled.TextInput.attrs((props: Props) => ({
	placeholderTextColor: props.theme.textinputs?.placeholder.color || props.theme.colors.black,
}))`
	flex: 1;
	height: 40px;
	width: 100%;
	padding-horizontal: 16px;
	placeholder: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
	border-style: solid;
`

const ToggleIcon = styled.TouchableOpacity`
	color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.black};
	padding: 2px;
`
