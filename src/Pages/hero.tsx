import { Box, Button, Flex, IconButton, Image, Text, } from "@chakra-ui/react";
import heroImage from "../Assets/Profile.png";
import { Icons, Section } from "../Components";

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

export default function Hero() {
    return (
        <Section h="700px">
            <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'space-between'} gap={{ base: 12, md: 6 }}>

                {/* Hero Text */}
                <Flex flexDirection={'column'} alignItems={{ base: 'center', md: 'flex-start' }} gap={6} textAlign={{ base: 'center', md: 'left' }}>
                    <Text as={'h1'} sx={headlineStyle}>FrontEnd & <br /> Designer Web.</Text>
                    <Text as={'p'}>Designing Robust Frontend Applications that Deliver <Br /> Outstanding User Experiences.</Text>
                    <Flex mt={3} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={3}>
                        <Button rightIcon={<Icons.arrowRight size={23} />}>READ MORE</Button>
                        <Button display={{ base: 'none', md: 'block' }} variant='ghost'>DOWNLOAD CV</Button>
                        <IconButton aria-label="Download CV" display={{ base: 'block', md: 'none' }} icon={<Icons.download size={26} />} variant={'none'} />
                    </Flex>
                </Flex>

                {/* Hero Image */}
                <Image src={heroImage} alt="Hero Image" width={{ base: '230px', sm: '270px', md: '250px', lg: '300px' }} />
            </Flex>
        </Section>
    )
}