import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { DefaultTheme } from 'styled-components/native'
import * as Text from '../text'

export type ButtonColor = 'primary' | 'secondary'

export interface Button extends TouchableOpacityProps {
	children: React.ReactNode
	startIcon?: React.ReactNode
	endIcon?: React.ReactNode
	color?: ButtonColor
}

export const Button: React.FC<Button> = props => {
	const isChildrenString = typeof props.children === 'string'

	return (
		<ButtonWrapper {...props} $color={props.color} style={[{ borderRadius: 25 }, props.style]}>
			{props.startIcon ? <StartIconWrapper>{props.startIcon}</StartIconWrapper> : null}
			{isChildrenString ? <Text.ButtonLabel $color={props.color}>{props.children}</Text.ButtonLabel> : props.children}
			{props.endIcon ? <EndIconWrapper>{props.endIcon}</EndIconWrapper> : null}
		</ButtonWrapper>
	)
}

const StartIconWrapper = styled.View`
	margin-right: 8px;
`
const EndIconWrapper = styled.View`
	margin-left: 8px;
`

const ButtonWrapper = styled(TouchableOpacity)`
	height: 40px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding-horizontal: 16px;
	background-color: ${(props: DefaultTheme) => (props.$color ? props.theme.buttons[props.$color] : props.theme.buttons.primary)};
`
