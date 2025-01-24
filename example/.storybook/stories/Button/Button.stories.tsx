import React from 'react'
import { View } from 'react-native'
import { Button } from '@berty/ui-components'
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
		children: 'Primary Button',
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
		<Button {...args} />
		<View style={{ height: 16 }} />
		<Button {...args} color='secondary' />
		<View style={{ height: 16 }} />
		<Button {...args} endIcon={<FontAwesome6 name='copy' size={20} color='white' />} />
		<View style={{ height: 16 }} />
		<Button {...args} startIcon={<FontAwesome6 name='copy' size={20} color='white' />} />
		<View style={{ height: 16 }} />
		<Button style={{ height: 80, width: 80, borderRadius: 40 }}>
			<FontAwesome6 name='copy' size={30} color='white' />
		</Button>
		<View style={{ height: 16 }} />
		<Button style={{ height: 80, width: 80, borderRadius: 40 }} color='secondary'>
			<FontAwesome6 name='copy' size={30} />
		</Button>
	</>
)
