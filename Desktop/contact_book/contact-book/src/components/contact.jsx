const Contact = ({ contact, onDelete }) => {
    return (
        <div className="contact">
            <div className="contact-info">
                <strong>{contact.name}</strong>: {contact.phone}
            </div>
            <button
                onClick={() => onDelete(contact.id)}
                className="delete-btn"
            >
                Удалить
            </button>
        </div>
    );
};

export default Contact;