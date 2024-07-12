import { Box, Button, Flex, Icon, Image, Text, } from "@chakra-ui/react";
import heroImage from "../../public/Profile.png";
import { Icons, Section, useIsMobile } from "../Components";
import { motion } from "framer-motion";

function Br() {
    return <Box as="br" display={{ base: 'none', lg: 'block' }} />
}

const headlineStyle = {
    color: 'secondary.500',
    fontWeight: '800',
    fontSize: {
        base: '4xl',
        md: '5xl',
        lg: '6xl',
    },
    lineHeight: {
        base: '40px',
        md: '52px',
        lg: '70px',
    },
}

const container = {
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
}

const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 140,
        }
    }
}

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

export default function HeroSection() {
    const isMobile = useIsMobile();

    return (
        <Section h="700px">
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} gap={{ base: 12, md: 6 }}>

                {/* Hero Text */}
                <MotionFlex variants={container} initial="hidden" animate="visible" flexDirection={'column'} alignItems={{ base: 'center', md: 'flex-start' }} gap={6} textAlign={{ base: 'center', md: 'left' }}>
                    <MotionText variants={item} as={'h1'} sx={headlineStyle}>FrontEnd & <br /> Designer Web.</MotionText>
                    <MotionText variants={item} as={'p'}>Designing Robust Frontend Applications that Deliver <Br /> Outstanding User Experiences.</MotionText>
                    <Flex mt={3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={3}>
                        <MotionButton variants={item} rightIcon={<Icons.arrowRight size={22} />} variant='primary'>
                            <a href="#about">READ MORE</a>
                        </MotionButton>
                        {isMobile ?
                            <MotionButton variants={item} variant={'none'}><Icons.download size={20} /></MotionButton>
                            :
                            <MotionButton variants={item} variant='ghost'>DOWNLOAD CV</MotionButton>
                        }
                    </Flex>
                </MotionFlex>

                {/* Hero Image */}
                <Image src={heroImage} alt="Hero Image" width={{ base: '230px', sm: '270px', md: '250px', lg: '300px' }} />
            </Flex>
        </Section>
    )
}