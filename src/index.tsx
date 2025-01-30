import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ErrorBox } from './components/alert'
import { Button } from './components/buttons'
import { Container, BottonPanel, Spacer } from './components/layout'
import { H1, H2, Body } from './components/text'
import { TextField } from './components/textFields/TextField'

export const Text = { H1, H2, Body }

export { ThemeProvider, DefaultTheme, Button, TextField, Container, BottonPanel, Spacer, ErrorBox }
