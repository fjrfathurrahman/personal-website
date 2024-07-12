import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import useWeb3Forms from "@web3forms/react";

const accessKey = import.meta.env.VITE_ACCESS_KEY;

export const useContactForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const [values, setValues] = useState({ name: '', email: '', subject: '', message: '', });
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const toast = useToast();

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_email: values.email,
            from_name: values.name,
            subject: values.subject,
            message: values.message,
        },
        onSuccess: (msg : any) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
            setIsLoading(false);
            toast({
                position: 'top-right',
                title: 'Success',
                description: 'Your message has been sent successfully.',
                status: 'success',
                duration: 3000,
                isClosable: true
            });
        },
        onError: (msg: any) => {
            setIsSuccess(false);
            setResult(msg);
            setIsLoading(false);
            toast({
                position: 'top-right',
                title: 'Error',
                description: 'There was an error sending your message. Please try again.',
                status: 'error',
                duration: 3000,
                isClosable: true
            });
            console.log(msg);
        },
    });

    const handleFormSubmit = async (data: any) => {
        setIsLoading(true);
        await onSubmit(data);
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        isSuccess,
        isLoading,
        result
    };
};
