# @berty/ui-components

React Native UI components à la carte, by Berty

## Installation

```sh
npm install @berty/ui-components
```

## Usage


```js
import { Button, DefaultTheme, Text, ThemeProvider } from '@berty/ui-components'

// ...

<ThemeProvider theme={theme}>
    <Button onPress={() => console.log('Button pressed')}>Press me</Button>
    <Text>Some text</Text>
</ThemeProvider>

```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
