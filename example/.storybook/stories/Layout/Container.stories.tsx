import React from 'react'
import { View } from 'react-native'
import { Button, Container, Text, TextField, BottonPanel, Spacer, ErrorBox } from '@berty/ui-components'
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
	decorators: [Story => <Story />],
} satisfies Meta<typeof Button>

export default meta

export const Basic = (args: any) => (
	<>
		<Container>
			<Text.H1>Create The</Text.H1>
			<Text.H1 style={{ color: 'white' }}>Master</Text.H1>
			<Text.H1 style={{ color: 'white' }}>Keyword</Text.H1>
			<View style={{ height: 16 }} />
			<TextField placeholder='Master Keyword' type='password' />
			<View style={{ height: 2 }} />
			<TextField placeholder='Confirm Master Keyword' type='password' />
			<Spacer />
			<Button>Create</Button>
			<Spacer />
			<ErrorBox>Warning: If you forget your master keyword, you will lose access to all your vaults.</ErrorBox>
		</Container>
		<BottonPanel>
			<Text.H2>Setup the App</Text.H2>
			<Spacer />
			<Text.Body>You have to setup a master keyword in order to access your future vauls from one password.</Text.Body>
			<Spacer />
			{/* <View style={{ flexDirection:'row', height: 16, backgroundColor:'red', flex: 1, width: '100%', justifyContent: 'space-between' }}>
				<Button>Restore</Button>
				<Button>Import</Button>
			</View> */}
		</BottonPanel>
	</>
)
