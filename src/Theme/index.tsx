import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./foundations/colors";
import Button from "./components/button";

const breakpoints ={
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
}

const Theme = extendTheme({
    styles, breakpoints, colors,
    components: {
        Button,
    }
})

export default Theme