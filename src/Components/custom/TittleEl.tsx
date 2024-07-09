import { Box, BoxProps, Image, Text } from "@chakra-ui/react"
import shape from "../../Assets/shape";

interface TittleProps extends BoxProps {
    tittle: string;
    subTittle: string;
}

const tittleShape = ({ tittle, subTittle, ...props }: TittleProps) => {
    return (
        <Box as={'div'} position={'relative'} my={'32px'} {...props} textAlign={'center'}>
            <Text as={'h1'} mb={3} color={'main'} textShadow={'0px 4px 4px rgba(0, 0, 0, 0.70)'}>{tittle}</Text>
            <Image src={shape.shapeWave} alt="shapeWave" w={{base: '60%', md: '40%'}} position={'absolute'} top={{ base: '30%', md: '40%' }} left="50%" transform="translate(-50%, -50%)" zIndex="-1" />
            <Text as={'span'} color={'paragraphDark'} fontWeight={'500'} fontSize={{ base: 'lg', md: 'xl' }}>{subTittle}</Text>
        </Box>
    )
}

const Tittle = ({ tittle, subTittle, ...props }: TittleProps) => {
    return (
        <Box as={'div'} my={'32px'} {...props}>
            <Text as={'h1'} color={'primary.500'} lineHeight={'34px'}>
                {tittle}
                <br />
                <Box as={'span'} color={'#1f2937'} fontWeight={'500'} fontSize={{ base: 'lg', md: 'xl' }}>
                    {subTittle}
                </Box>
            </Text>
        </Box>
    )
}

export default { Tittle, tittleShape };