import { Box, BoxProps, Text } from "@chakra-ui/react"

interface TittleProps extends BoxProps {
    tittle: string;
    subTittle: string;
}

const TittleEl = ({ tittle, subTittle, ...props } : TittleProps) => {
    return (
        <Box as={'div'} my={'32px'} {...props}>
            <Text as={'h2'} color={'primary.500'} fontWeight={'700'} fontSize={{base: '3xl', md: '4xl'}} lineHeight={'34px'}>
                {tittle}
                <br />
                <Box as={'span'} color={'#1f2937'} fontWeight={'500'} fontSize={{base: 'lg', md: 'xl'}}>
                    {subTittle}
                </Box>
            </Text>
        </Box>
    )
}

export default TittleEl