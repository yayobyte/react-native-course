export const RED = {
    200: '#EF9A9A',
    500: '#F44336'
}

export const GRAY = {
    100: '#F5F5F5',
    200: '#EEEEEE',
}

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
    }
}
