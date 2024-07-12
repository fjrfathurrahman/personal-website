import { useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import useWeb3Forms from "@web3forms/react";
import { Action, State } from '../types';

const accessKey = import.meta.env.VITE_ACCESS_KEY;

// Definisikan initial state
const initialState: State = {
    values: { name: '', email: '', subject: '', message: '' },
    isSuccess: false,
    isLoading: false,
    result: null,
};

// Definisikan reducer function
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_VALUES':
            return { ...state, values: action.payload };
        case 'SET_SUCCESS':
            return { ...state, isSuccess: action.payload };
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        case 'SET_RESULT':
            return { ...state, result: action.payload };
        default:
            throw new Error();
    }
}

export const useContactForm = () => {
    const { register, reset, handleSubmit } = useForm();
    const [state, dispatch] = useReducer(reducer, initialState);
    const toast = useToast();

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_email: state.values.email,
            from_name: state.values.name,
            subject: state.values.subject,
            message: state.values.message,
        },
        onSuccess: (msg: any) => {
            dispatch({ type: 'SET_SUCCESS', payload: true });
            dispatch({ type: 'SET_RESULT', payload: msg });
            reset();
            dispatch({ type: 'SET_LOADING', payload: false });
            toast({
                position: 'top-right',
                title: 'Success',
                description: 'Your message has been sent successfully.',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        },
        onError: (msg: any) => {
            dispatch({ type: 'SET_SUCCESS', payload: false });
            dispatch({ type: 'SET_RESULT', payload: msg });
            dispatch({ type: 'SET_LOADING', payload: false });
            toast({
                position: 'top-right',
                title: 'Error',
                description: 'There was an error sending your message. Please try again.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        },
    });

    const handleFormSubmit = async (data: any) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        await onSubmit(data);
    };

    return {
        register,
        handleSubmit,
        handleFormSubmit,
        setValues: (values: { name: string; email: string; subject: string; message: string }) => dispatch({ type: 'SET_VALUES', payload: values }),
        isSuccess: state.isSuccess,
        isLoading: state.isLoading,
        result: state.result,
    };
};
