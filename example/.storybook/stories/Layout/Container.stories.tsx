import React from 'react'
import { View } from 'react-native'
import { Button, Container, Text, TextField, BottonPanel, Spacer, ErrorBox, AppBar, ButtonIcon } from '@berty/ui-components'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
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
} satisfies Meta<typeof Container>

export default meta

export const FirstScreen = (args: any) => (
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
		</BottonPanel>
	</>
)

export const SecondScreen = (args: any) => (
	<>
		<AppBar>
			<ButtonIcon size={40} color='tertirary'>
				<FontAwesome6 name='user' size={20} color='black' />
			</ButtonIcon>

			<Button color='tertirary' endIcon={<FontAwesome6 name='add' size={16} color='black' />}>
				New Vault
			</Button>
		</AppBar>
		<Container>
			<Text.H1>Check</Text.H1>
			<Text.H1>Your Safe</Text.H1>
			<Text.H1>Keys List</Text.H1>
			<View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', paddingTop: 24 }}>
				<View style={{ flexDirection: 'row', alignItems: 'baseline', paddingRight: 24 }}>
					<Text.H1>0</Text.H1>
					<Text.Body>Key</Text.Body>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
					<Text.H1>0</Text.H1>
					<Text.Body>User</Text.Body>
				</View>
			</View>
		</Container>
		<BottonPanel>
			<Text.H2>New User</Text.H2>
			<Spacer />
			<Text.Body style={{ textAlign: 'center' }}>
				As a new user, your first step is to create a new Vault in the app to securely store your data.
			</Text.Body>
			<Spacer style={{ height: 56 }} />
			<View style={{ flexDirection: 'row', flex: 1, width: '100%', justifyContent: 'space-between' }}>
				<Button color='secondary'>Import Vault</Button>
				<Button endIcon={<FontAwesome6 name='add' size={16} color='white' />}>New Vault</Button>
			</View>
		</BottonPanel>
	</>
)
