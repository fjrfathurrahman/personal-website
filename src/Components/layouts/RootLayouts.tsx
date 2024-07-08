import { Box } from "@chakra-ui/react";
import React from "react";

const layoutStyle : React.CSSProperties = {
    width: '100%',
    height: '100vh',
    position: 'relative',
    top: 0, 
    zIndex: 1, 
    overflowX: 'hidden',
}

export default function RootLayouts({ children }: { children: React.ReactNode }) {
    return (
        <Box as='main' sx={layoutStyle}>
            {children}
        </Box>
    )
}