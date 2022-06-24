function withOpacityValue(variable) {
    return ({opacityValue}) => {
        console.log(opacityValue)
        if (opacityValue === undefined) {
            return `rgb(var(${variable}))`;
        }
        return `rgb(var(${variable}) / ${opacityValue})`;
    };
}

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        container: {
            padding: {
                DEFAULT: '2rem',
                sm: '2rem',
                md: '2rem',
                lg: '1rem',
                xl: '1rem',
                '2xl': '1rem'
            },
            margin: 'auto 0',
            center: true
        },
        extend: {
            colors: {
                base: {
                    50: withOpacityValue('--color-base-50'),
                    100: withOpacityValue('--color-base-100'),
                    200: withOpacityValue('--color-base-200'),
                    300: withOpacityValue('--color-base-300'),
                    400: withOpacityValue('--color-base-400'),
                    500: withOpacityValue('--color-base-500'),
                    600: withOpacityValue('--color-base-600'),
                    700: withOpacityValue('--color-base-700'),
                    800: withOpacityValue('--color-base-800'),
                    900: withOpacityValue('--color-base-900')
                },
                primary: {
                    50: withOpacityValue('--color-primary-50'),
                    100: withOpacityValue('--color-primary-100'),
                    200: withOpacityValue('--color-primary-200'),
                    300: withOpacityValue('--color-primary-300'),
                    400: withOpacityValue('--color-primary-400'),
                    500: withOpacityValue('--color-primary-500'),
                    600: withOpacityValue('--color-primary-600'),
                    700: withOpacityValue('--color-primary-700'),
                    800: withOpacityValue('--color-primary-800'),
                    900: withOpacityValue('--color-primary-900')
                },
            }
        },
    },
    plugins: [],
    darkMode: 'class',
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    }
}
