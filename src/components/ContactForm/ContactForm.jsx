import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Label, Span, Input, Button } from './ContactForm.styled';


export const ContactForm = ({onSubmit}) => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
        case 'name':
            setName(value);
            break;
        case 'number':
            setNumber(value);
            break;
        default:
            throw new Error('unsupported input name');
        }
  };

    const handleSubmit = e => {
        e.preventDefault();
       onSubmit({name, number});
        reset();
    };

    const reset = () => {
        setName('');
        setNumber(''); 
    };

        return (
            <Form onSubmit={handleSubmit}>
                <Label>
                    <Span>Name</Span>
                    <Input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label>
                    <Span>Number</Span>
                    <Input
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                 <Button type="submit">
                    Add contact
                </Button>
            </Form>
        );
    }
ContactForm.propType = {
  onSubmit: PropTypes.func.isRequired,
};
