export interface FormField {
    id: string;
    label: string;
    name: string;
    placeholder: string;
}

const contactFormFields: FormField[] = [
    {
        id: 'name',
        label: 'Name',
        name: 'name',
        placeholder: 'Your Name',
    },
    {
        id: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'Your Email',
    },
    {
        id: 'subject',
        label: 'Subject',
        name: 'subject',
        placeholder: 'Topic of your message',
    },
]

export default contactFormFields;