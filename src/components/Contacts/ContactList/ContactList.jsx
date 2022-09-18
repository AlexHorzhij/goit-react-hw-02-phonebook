import PropTypes from 'prop-types';
import {Message, Item, Button, List} from './ContactList.styled';


export function ContactList({ contacts, serchName, removeContact }) {
    const filtredList = contacts.filter((contact) => contact.name.toLowerCase().includes(serchName));

    if (serchName) {
        return (filtredList.length === 0 ? <Message>Сontact was not found</Message> : (<List>
            {filtredList.map(contact => <Item key={contact.id}>{contact.name}: {contact.number}</Item>)}
        </List>))
    }
    return (contacts.length === 0
        ? <Message>You don't have any contact</Message>
        : (<List>{(serchName ? serchName : contacts).map(contact => <Item key={contact.id}>{contact.name}: {contact.number}
            <Button id={contact.id} onClick={removeContact}>Delete</Button></Item>)}</List>)
    );
}
    
ContactList.propTypes = {
    serchName: PropTypes.string,
    removeContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
}