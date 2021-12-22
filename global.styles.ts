export const RED = {
    200: '#EF9A9A',
    500: '#F44336'
}

export const GRAY = {
    0: '#FFFFFF',
    100: '#F5F5F5',
    200: '#EEEEEE',
}

const SPACE_SMALL = 4
const SPACE_MEDIUM = 8
const SPACE_LARGE = 16
const SPACE_X_LARGE = 24

const borderWidth = 1;
const borderRadius = 5;
const boxShadowColor = '#EFEFEF';
const shadowRadius = 5;

export const globalStyles = {
    theme: {
        colors: {
            red: {
                default: RED['500'],
            }
        }
    },
    components: {
        box: {
            shadow: {
                shadowColor: boxShadowColor,
                shadowRadius,
                shadowOffset: {width: 5, height: 6},
                shadowOpacity: 0.5
            },
            grayBorder: {
                borderColor: GRAY["200"],
                borderWidth,
                borderRadius,
            },
            redBorder: {
                borderColor: RED['500'],
                borderWidth,
                borderRadius,
            }
        }
    },
    spacing: {
        small: SPACE_SMALL,
        medium: SPACE_MEDIUM,
        large: SPACE_LARGE,
        xl: SPACE_X_LARGE,
    },
    fontSize: {
        small: 16,
        regular: 18,
        medium: 20,
        large: 22,
        xLarge: 24
    }
}
