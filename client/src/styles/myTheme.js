import {
    cyan500,
    pinkA200,
    grey100, grey300, grey400, grey500,
    white, darkBlack, fullBlack
} from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator';
import spacing from 'material-ui/styles/spacing';

export default {
    spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: white,
        primary2Color: '#95a5a6',
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: '#34495e',
        alternateTextColor: fade('#34495e', 0.85),
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    }
}
