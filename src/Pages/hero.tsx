import { Box, Flex, Image, } from "@chakra-ui/react";
import heroImage from "../../public/Profile.png";
import { Icons, Section, useIsMobile } from "../Components";
import { MotionButton, MotionFlex, MotionText, containerVariant, itemVariantY } from "../Animations";
import shape from "../Assets/shape";

function Br() {
    return <Box as="br" display={{ base: 'none', lg: 'block' }} />
}

const flexStyle = {
    position: 'relative',
    flexDirection: { base: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: { base: 12, md: 6 }
}

export default function HeroSection() {
    const isMobile = useIsMobile();

    return (
        <Section h="700px" id="hero">
            <Flex sx={flexStyle}>

                <HeroText />

                {/* Hero Image */}
                <Image src={heroImage} alt="Hero Image" className="heroImage" />

            </Flex>

            {!isMobile &&
                <Box position={'absolute'} top={'0'} left={'0'} zIndex={-999} w='full' h='full'>
                    <Image src={shape.shapeTangga} alt="shapeTangga" position={'absolute'} bottom={12} left={52} rotate={180} />
                    <shape.shapeGrid position={'absolute'} bottom={4} right={0} />
                    <shape.shapeGrid position={'absolute'} top={{md: 28, xl: 24}} right={{ md: 44, xl: 52}} />
                    <shape.shapeElips position={'absolute'} bottom={44} right={{ md: 60, xl: 80}} />
                </Box>
            }
        </Section>
    )
}

const HeroText = () => {
    const isMobile = useIsMobile();

    const flexStyle = {
        flexDirection: 'column',
        alignItems: { base: 'center', md: 'flex-start' },
        gap: 6,
        textAlign: { base: 'center', md: 'left' }
    }

    return (
        <MotionFlex variants={containerVariant} initial="hidden" animate="visible" sx={flexStyle}>
            <Box position={'absolute'} top={-8} left={{ base: 6, md: 3 }}>
                <Image src={shape.shapeTangga} alt="shapeTangga" transform="rotate(-45deg)" />
            </Box>

            <MotionText variants={itemVariantY} as={'h1'} className={'headlineStyle'}>FrontEnd & <br /> Designer Web.</MotionText>
            <MotionText variants={itemVariantY} as={'p'}>Designing Robust Frontend Applications that Deliver <Br /> Outstanding User Experiences.</MotionText>
            <Flex mt={3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={3}>
                <MotionButton variants={itemVariantY} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} rightIcon={<Icons.arrowRight size={22} />} variant='primary'>
                    <a href="#about">READ MORE</a>
                </MotionButton>
                {isMobile ?
                    <MotionButton variants={itemVariantY} variant={'none'}><Icons.download size={22} /></MotionButton> :
                    <MotionButton variants={itemVariantY} variant='ghost'>DOWNLOAD CV</MotionButton>
                }
            </Flex>
        </MotionFlex>
    )
}