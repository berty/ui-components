import React from 'react'
import { View } from 'react-native'
import { Button, Container, Text, TextField } from '@berty/ui-components'
import type { Meta } from '@storybook/react'

const meta = {
	title: 'Layout/Page',
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
			<Container>
				<Story />
			</Container>
		),
	],
} satisfies Meta<typeof Button>

export default meta

export const Basic = (args: any) => (
	<>
		<Text.H1>Create The</Text.H1>
		<Text.H1>Master</Text.H1>
		<Text.H1>Keyword</Text.H1>
		<View style={{ height: 16 }} />
		<TextField placeholder='Master Keyword' type='password' />
		<View style={{ height: 2 }} />
		<TextField placeholder='Confirm Master Keyword' type='password' />
		<View style={{ height: 8 }} />
		<Button>Create</Button>
	</>
)
