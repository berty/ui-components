import React from 'react'
import { View } from 'react-native'
import { TextField } from '@berty/ui-components'
import type { Meta } from '@storybook/react'

const meta = {
	title: 'Components/TextField',
	component: TextField,
	argTypes: {
		onPress: { action: 'pressed the button' },
	},
	args: {
		children: 'Text Field Content',
		placeholder: 'Placeholder Text',
	},
	decorators: [
		Story => (
			<View
				style={{
					flex: 1,
					padding: 16,
					alignItems: 'flex-start',
					backgroundColor: '#4690FF',
				}}
			>
				<Story />
			</View>
		),
	],
} satisfies Meta<typeof TextField>

export default meta

export const Basic = (args: any) => (
	<>
		<TextField {...args} />
		<View style={{ height: 16 }} />
		<TextField {...args} type='password' text='' />
		<View style={{ height: 16 }} />
		<TextField {...args} type='password' />
	</>
)
