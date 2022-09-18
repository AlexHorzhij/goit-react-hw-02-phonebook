
export function ContactList ({ contacts, serchName, removeContact }) {
    const filtredList = contacts.filter((contact) => contact.name.toLowerCase().includes(serchName));

    if (serchName) {
        return (filtredList.length === 0 ? <div>Сontact was not found</div> : ( <ul>
           {filtredList.map(contact => <li key={contact.id}>{contact.name}: {contact.number}</li>)}
        </ul>))
    }    
     return <ul>
            {contacts.length === 0
                ? "You don't have any contact"
             : ((serchName ? serchName : contacts).map(contact => <li key={contact.id}>{contact.name}: {contact.number}
             <button id={contact.id} onClick={removeContact}>Delete</button></li>))}
        </ul>
}