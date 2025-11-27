import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <div className="contact-list">
            <h2>Ваши контакты</h2>
            {contacts.length === 0 ? (
                <p>Список контактов пуст.</p>
            ) : (
                contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDelete={onDeleteContact}
                    />
                ))
            )}
        </div>
    );
};

export default ContactList;
