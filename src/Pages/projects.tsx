import { Box, Flex, Img, Link, Text, useBreakpointValue } from "@chakra-ui/react";
import { Icons, Section, TittleEl, projectsInfo } from "../Components";

export default function Projects() {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Section>
            <TittleEl.tittleShape tittle="My Projects" subTittle="Here are the projects that I have worked on" />

            <Flex w={'full'} mt={12} px={{base: 3, md: 6}}>
                {projectsInfo.map(project => (
                    <Box key={project.id}>
                        <Img src={project.img} alt={project.alt} border={'2px'} borderRadius={'12px'} />
                        <Flex my={6} justifyContent={'space-between'} alignItems={'center'}>
                            <Text as={'h2'}>{project.name}</Text>
                            <Flex gap={3}>
                                <Link href={project.link.github} target={project.link.target} rel={project.link.rel}>
                                    <Icons.github size={isMobile === true ? 24 : 28} />
                                </Link>
                                <Link href={project.link.live} target={project.link.target} rel={project.link.rel}>
                                    <Icons.externalLink size={isMobile === true ? 22 : 26} />
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