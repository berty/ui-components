import React from 'react'
import { View } from 'react-native'
import { Button, Text, ButtonIcon } from '@berty/ui-components'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import type { Meta } from '@storybook/react'

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		onPress: { action: 'pressed the button' },
		color: {
			control: {
				type: 'text',
				options: ['primary', 'secondary'],
				defaultValue: 'primary',
			},
		},
	},
	args: {
		color: 'primary',
		children: 'Button Label',
	},
	decorators: [
		Story => (
			<View style={{ padding: 16, alignItems: 'flex-start' }}>
				<Story />
			</View>
		),
	],
} satisfies Meta<typeof Button>

export default meta

export const Basic = (args: any) => (
	<>
		<Text.Body style={{ padding: 16 }}>Primary Button:</Text.Body>
		<Button {...args} />
		<View style={{ height: 16 }} />
		<Button {...args} endIcon={<FontAwesome6 name='copy' size={20} color='white' />} />
		<View style={{ height: 16 }} />
		<Button {...args} startIcon={<FontAwesome6 name='copy' size={20} color='white' />} />
		<View style={{ height: 16 }} />

		<Text.Body style={{ padding: 16 }}>Secondary Button:</Text.Body>
		<Button {...args} color='secondary' />
		<View style={{ height: 16 }} />

		<Text.Body style={{ padding: 16 }}>Icon Button:</Text.Body>
		<ButtonIcon size={60} color='primary'>
			<FontAwesome6 name='copy' size={30} color='white' />
		</ButtonIcon>
		<View style={{ height: 16 }} />
		<ButtonIcon size={60} color='secondary'>
			<FontAwesome6 name='copy' size={30} color='black' />
		</ButtonIcon>
		<View style={{ height: 16 }} />
		<ButtonIcon size={40} color='tertirary'>
			<FontAwesome6 name='user' size={20} color='black' />
		</ButtonIcon>
	</>
)
