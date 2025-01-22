import { StyleSheet, View } from 'react-native'
import { Button, DefaultTheme, Text, ThemeProvider } from '@berty/ui-components'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
	const theme: DefaultTheme = {
		colors: {
			black: '#000000',
		},
		buttons: {
			primary: '#000000',
			secondary: '#E5E5E5',
			label: {
				primary: '#ffffff',
				secondary: '#000000',
			},
		},
	}

	return (
		<ThemeProvider theme={theme}>
			<View style={styles.container}>
				<View style={{ justifyContent: 'space-around' }}>
					<Text.H1>Create The</Text.H1>
					<Text.H1 style={{ color: 'red' }}>Master</Text.H1>
					<Text.H1 style={{ color: 'red' }}>Keyword</Text.H1>
				</View>
				<View style={{ height: 16 }} />
				<Button>Primary Button</Button>
				<View style={{ height: 16 }} />
				<Button startIcon={<Ionicons name='checkmark-circle' size={20} color='white' />}>Primary with start icon</Button>
				<View style={{ height: 16 }} />
				<Button color='secondary' endIcon={<FontAwesome6 name='copy' size={20} color='black' />}>
					Primary with start icon
				</Button>
				<View style={{ height: 16 }} />
				<Button color='primary' style={{ height: 80, width: 80, borderRadius: 40 }}>
					<FontAwesome6 name='copy' size={20} />
				</Button>
				<View style={{ height: 16 }} />
				{/* <View style={{ height: 16 }} />
				<Button.Icon aria-label="plus" >Button with icon</Button.Icon>
				<View style={{ height: 16 }} />
				<Button.Icon aria-label="minus" >Button with icon</Button.Icon>
				<View style={{ height: 16 }} />
				<Button.Icon  aria-label="minus" >Secondary</Button.Icon>
				<View style={{ height: 16 }} />
				<Button.Icon aria-label="minus" ></Button.Icon> */}
			</View>
		</ThemeProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
