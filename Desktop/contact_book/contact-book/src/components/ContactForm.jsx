import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && phone.trim()) {
            onAddContact({ name, phone });
            setName('');
            setPhone('');
        } else {
            alert('Пожалуйста, заполните оба поля.');
        }
    };
    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Добавить контакт</button>
        </form>
    );
};

export default ContactForm;