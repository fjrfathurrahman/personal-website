import { Box, BoxProps } from "@chakra-ui/react";

interface SectionProps extends BoxProps {
    children: React.ReactNode,
    className?: string,
    w?: string,
    h?: string,
}

export default function Section({ children, w = '1024px', h = 'max-content', ...props }: SectionProps) {

    const SectionStyle: any = {
        maxW: { base: '100%', lg: w },
        minH: h,
        position: 'relative',
        top: 0,
        zIndex: 1,
        overflowX: 'hidden',
        margin: 'auto',
        padding: {
            base: '70px 24px',
            md: '150px 32px'
        },
        // borderBottom: '1px',
        // borderBottomColor: 'gray.600',
    }

    return (
        <Box as="section" sx={SectionStyle} {...props}>
            {children}
        </Box>
    )
} 