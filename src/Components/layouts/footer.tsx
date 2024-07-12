import { Box, Icon, Text } from "@chakra-ui/react";
import Icons from "../constants/icons";

export default function Footer() {
    return (
        <Box py={6} textAlign={'center'}>
            <Text as={'h4'} mb={1} fontWeight={700} color={'main'}>
                MADE WITH
                {[Icons.reactIcon, Icons.chakraUi, Icons.framerMotion].map(item => (
                    <Icon key={item} as={item} ms={2} />
                ))}
            </Text>
            <Text>
                copyright 2023 fajar | All rights reserved |{' '}
                <Box color={''} fontWeight={600} as="a" href="https://github.com/fjrfathurrahman/personal-website" target="_blank" rel="noopener noreferrer">view source code</Box>
            </Text>
        </Box>
    )
} 