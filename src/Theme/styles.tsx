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
        }
    },
}

export default Styles