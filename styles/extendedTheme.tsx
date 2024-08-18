import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins';
import '@fontsource/staatliches';

const extendedTheme = {
    fonts: {
        heading: `'Staatliches', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
    components: {
        Link: {
            variants: {
                'outline': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2em',
                    height: '2em',
                    border: '1px',
                    borderStyle: 'solid',
                    borderColor: 'gray.200',
                    transitionProperty: 'background-color',
                    transitionDuration: '0.25s',
                    _hover: {
                        backgroundColor: 'gray.200',
                        textDecoration: 'none'
                    },
                }
            }
        },
    }
}

export default extendTheme(extendedTheme);