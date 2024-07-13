import { Box, Flex, Highlight, Img, Text, Tooltip } from "@chakra-ui/react";
import { Section, TittleEl, personalDetails, useIsMobile } from "../Components";
import MotionBox, { MotionFlex, MotionText, containerVariant, itemVariantY } from "../Animations";

const ContainerView = ({ children }: { children: React.ReactNode }) => {
    return (
        <MotionBox variants={containerVariant} whileInView="visible" initial="hidden" viewport={{ once: true, amount: 0.5 }}>
            {children}
        </MotionBox>
    )
}

export default function AboutSection() {

    return (
        <Section w="100%" bg='main' id='about'>
            <Box maxW={'1024px'} mx={'auto'} display={'flex'} flexDirection={'column'} gap={6}>

                <AboutMe />

                <MyStack />

            </Box>
        </Section>
    )
}

const AboutMe = () => {
    return (
        <ContainerView>

            <MotionText variants={itemVariantY}>
                <TittleEl.Tittle tittle="About me." subTittle="Short story about me" />
            </MotionText>

            {personalDetails.mySelf.map(text => (
                <MotionText as={'p'} variants={itemVariantY} color='paragraphLight' mb={3} key={text}>
                    <Highlight query={'Fajar Fathurrahman'} styles={{ fontWeight: '600' }}>
                        {text}
                    </Highlight>
                </MotionText>
            ))}
        </ContainerView>
    )
}

const MyStack = () => {
    const isMobileView = useIsMobile();

    return (
        <ContainerView>

            <MotionBox variants={itemVariantY}>
                <TittleEl.Tittle tittle="My stack." subTittle="Here is my toolbelt for success." />
            </MotionBox>

            <Flex wrap={'wrap'} gap={3} justifyContent={'flex-start'}>
                {personalDetails.myStack.map(item =>
                    isMobileView ?
                        <Tooltip key={item.name} label={item.name} placement='top' bg={'primary.500'} color={'secondary.300'} borderRadius={'25px'} px={3}>
                            <Img src={item.icon} alt={item.name} width={9} />
                        </Tooltip>
                        :
                        <MotionFlex key={item.name} variants={itemVariantY} whileHover={{ scale: 1.1 }} display={{ base: 'flex', md: 'flex' }} alignItems={'center'} gap={2} px={3} py={1.5} border='1px' borderColor={'blackAlpha.200'} borderRadius={'12px'}>
                            <Img src={item.icon} alt={item.name} width={8} />
                            <Text as={'span'} color='paragraphLight'>{item.name}</Text>
                        </MotionFlex>
                )}
            </Flex>
        </ContainerView>
    )
}