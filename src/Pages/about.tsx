import { Box, Flex, Highlight, Img, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { Section, TittleEl, personalDetails } from "../Components";

export default function About() {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Section w="100%" bg='main'>
            <Box maxW={'1024px'} mx={'auto'} display={'flex'} flexDirection={'column'} gap={6}>

                <div>
                    <TittleEl tittle="About me." subTittle="Short story about me" />
                    {personalDetails.mySelf.map(text => (
                        <Text as={'p'} color='paragraphLight' mb={3} key={text}>
                            <Highlight query={'Fajar Fathurrahman'} styles={{ fontWeight: '600' }}>
                                {text}
                            </Highlight>
                        </Text>
                    ))}
                </div>

                <div>
                    <TittleEl tittle="My stack." subTittle="Here is my toolbelt for success." />
                    <Flex wrap={'wrap'} gap={3}>
                        {personalDetails.myStack.map(item =>
                            isMobile === true ?
                                <Tooltip key={item.name} label={item.name} placement='top' bg={'primary.500'} color={'secondary.300'} borderRadius={'25px'} px={3}>
                                    <Img src={item.icon} alt={item.name} width={10} />
                                </Tooltip>
                                :
                                <Flex key={item.name} display={{ base: 'flex', md: 'flex' }} alignItems={'center'} gap={2} px={3} py={1.5} border='1px' borderColor={'blackAlpha.200'} borderRadius={'12px'}>
                                    <Img src={item.icon} alt={item.name} width={8} />
                                    <Text as={'span'} color='paragraphLight'>{item.name}</Text>
                                </Flex>
                        )}
                    </Flex>
                </div>
            </Box>
        </Section>
    )
}