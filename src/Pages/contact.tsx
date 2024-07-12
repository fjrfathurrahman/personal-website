import { Box, Button, FormControl, FormLabel, Input, Spinner, Textarea, VStack } from "@chakra-ui/react";
import { Section, TittleEl, useIsMobile } from "../Components";
import { useContactForm } from "../Lib/hooks/useContactForm";
import contactFormFields from "../Components/constants/formContact";

export default function ContactSection() {
    const { register, handleSubmit, handleFormSubmit, isLoading } = useContactForm();
    const isMobile = useIsMobile()

    return (
        <Section>
            <TittleEl.tittleShape tittle="Contact Me" subTittle="If you are interested in me, contact me now!" />

            <Box position={'relative'} w={{ base: 'full', md: '80%' }} p={[5, 7]} mt={16} mx={'auto'} rounded={'2xl'} bg={'main'} color={'#030712'}>

                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <HeaderForm />
                    <FormFields formField={register} />
                    <Button type="submit" width="full" variant={'solid'} colorScheme={'primary'} size={'md'} isDisabled={isLoading}>
                        {isLoading ? <Spinner size="sm" color="white" /> : 'Submit'}
                    </Button>
                </form>

                {isMobile === true ? null :
                    <>
                        <Box w={'full'} h={'full'} border={'2px'} borderColor='secondary.500' rounded={'xl'} position={'absolute'} top={4} left={4} zIndex={-1} />
                        <Box w={'full'} h={'full'} border={'2px'} borderColor='primary.500' rounded={'xl'} position={'absolute'} top={-4} left={-4} zIndex={-1} />
                    </>
                }
            </Box>

        </Section>
    )
}

const FormFields = ({ formField }: { formField: any }) => {
    return (
        <VStack spacing={3} mb={6}>
            {contactFormFields.map(item => (
                <FormControl id={item.name} isRequired key={item.name}>
                    <FormLabel>{item.label}</FormLabel>
                    <Input {...formField(item.name, { required: true })} placeholder={item.placeholder} />
                </FormControl>
            ))}

            <FormControl id='message' isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea rows={3} {...formField('message', { required: true })} placeholder="Your Message" />
            </FormControl>
        </VStack>
    )
}

const HeaderForm = () => {
    return (
        [1, 2, 3,].map(item => (
            <Box key={item} bg={'primary.500'} _odd={{ bg: '#030712' }} display={'inline-block'} w={4} h={4} mr={1} mb={4} borderRadius={'full'} />
        ))
    )
}
