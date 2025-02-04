import React from 'react'
import { ModalProps, View, Modal, SafeAreaView } from 'react-native'
import { Button, Container, Text, TextField, BottonPanel, Spacer, ErrorBox, AppBar, ButtonIcon } from '@berty/ui-components'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import type { Meta } from '@storybook/react'

const meta = {
	title: 'Layout/Modal',
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

export const NewVaultInfo = (args: any) => {
	const [showModal, setShowModal] = React.useState(true)

	return (
		<>
			<ModalNewVault visible={showModal} onRequestClose={() => setShowModal(false)} />
			<AppBar>
				<ButtonIcon size={40} color='tertirary'>
					<FontAwesome6 name='user' size={20} color='black' />
				</ButtonIcon>

				<Button color='tertirary' onPress={() => setShowModal(true)} endIcon={<FontAwesome6 name='add' size={16} color='black' />}>
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
					<Button onPress={() => setShowModal(true)} endIcon={<FontAwesome6 name='add' size={16} color='white' />}>
						New Vault
					</Button>
				</View>
			</BottonPanel>
		</>
	)
}

const ModalNewVault = (props: ModalProps) => {
	return (
		<Modal {...props} animationType='slide' transparent>
			<View
				style={{
					height: '25%',
					width: '100%',
					backgroundColor: '#25292e',
					borderTopRightRadius: 18,
					borderTopLeftRadius: 18,
					position: 'absolute',
					bottom: 0,
				}}
			>
				<AppBar>
					<View style={{ flex: 1 }} />
					<Button color='tertirary' onPress={props.onRequestClose} endIcon={<FontAwesome6 name='xmark' size={16} color='black' />}>
						Cancel
					</Button>
				</AppBar>
				{/*
					<Container>
						<Text.H1>Create</Text.H1>
						<Text.H1>New Vault</Text.H1>
						<View style={{ height: 16 }} />
						<TextField placeholder='Vault Name' />
						<View style={{ height: 2 }} />
						<TextField placeholder='Description' />
						<Spacer />
						<Button>Create</Button>
						<Spacer />
						<ErrorBox>Warning: If you forget your master keyword, you will lose access to all your vaults.</ErrorBox>
					</Container> */}
			</View>
		</Modal>
	)
}
