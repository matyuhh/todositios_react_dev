import React from 'react'
import { 
    Container,
    FormContent,
    Icon,
    FormWrap,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormTextArea,
    FormButton
} from './contact-us.styles'

const ContactUs = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>TODOSITIOS</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Tenés algún proyecto en mente? Hagamoslo realidad.</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Asunto</FormLabel>
                            <FormInput type='text' required/>
                            <FormLabel htmlFor='for'>Mensaje</FormLabel>
                            <FormTextArea type='textarea' required/>
                            <FormButton type='submit'>Enviar</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container> 
        </>
    )
};

export default ContactUs;
