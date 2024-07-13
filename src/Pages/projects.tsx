import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Icons, Section, TittleEl, projectsInfo, useIsMobile } from "../Components";
import { MotionImg } from "../Animations";

export default function ProjectsSection() {
    const isMobileView = useIsMobile();

    return (
        <Section id="projects">
            <TittleEl.tittleShape tittle="My Projects" subTittle="Here are the projects that I have worked on" />

            <Flex w={'full'} mt={16} px={{ base: 3, md: 6 }}>
                {projectsInfo.map(project => (
                    <Box key={project.id}>
                        <MotionImg whileHover={{ scale: 0.95, rotate: 2 }} transition={{ duration: 0.3 }} src={project.img} alt={project.alt} border={'2px'} borderRadius={'12px'} />
                        <Flex my={6} justifyContent={'space-between'} alignItems={'center'}>
                            <Text as={'h2'}>{project.name}</Text>
                            <Flex gap={3}>
                                <Link href={project.link.github} target={project.link.target} rel={project.link.rel} _hover={{ color: 'primary.500' }}>
                                    <Icons.github size={isMobileView === true ? 20 : 28} />
                                </Link>
                                <Link href={project.link.live} target={project.link.target} rel={project.link.rel} _hover={{ color: 'primary.500' }}>
                                    <Icons.externalLink size={isMobileView === true ? 18 : 26} />
                                </Link>
                            </Flex>
                        </Flex>

                        {project.description.map(item => (
                            <Text key={item} mb={3}>{item}</Text>
                        ))}
                    </Box>
                ))}
            </Flex>
        </Section>
    )
}