const Styles = {
    global: {

        // Global Styles
        body: {
            bg: '#030712',
            color: 'main',
        },
        div: {
            // border: '1px',
            borderColor: 'primary.500',
        },
        section: {
            // border: '1px',
            borderColor: 'secondary',
        },

        // Typography Styles
        p: {
            color: 'paragraphDark',
            fontWeight: '400',
            fontSize: {
                base: 'sm',
                md: 'md',
            },
            lineHeight: {
                base: '24px',
                md: '28px',
            },
            letterSpacing: {
                base: '0.01em',
                md: '0.03em',
            }
        },

        h1: {
            fontWeight: '700',
            fontSize: { base: '3xl', md: '4xl' },
        },
        h2: {
            fontWeight: '600',
            fontSize: { base: 'xl', md: '2xl' },
        },
        h4: {
            fontWeight: '600',
            fontSize: { base: 'md', md: 'lg' },
        },

        // Components Style
        '.headlineStyle': {
            color: 'secondary.500',
            fontWeight: '800',
            fontSize: {
                base: '4xl',
                md: '5xl',
                lg: '6xl',
            },
            lineHeight: {
                base: '40px',
                md: '52px',
                lg: '70px',
            },
        },
        '.heroImage': {
            width: { base: '230px', sm: '270px', md: '250px', lg: '300px' }
        }
    },
}

export default Styles