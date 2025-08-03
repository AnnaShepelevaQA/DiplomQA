export class RegistrationForm {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.birthDate = null;
        this.isSubscribed = false;
    }

    setFirstName(name) {
        if (!name.trim()) {
            throw new Error('Name cannot be empty');
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ\- ]+$/.test(name)) {
            throw new Error('The name contains invalid characters');
        }
        this.firstName = name;
    }

    getFirstName() {
        return this.firstName;
    }

    setLastName(surname) {
        if (!surname.trim()) {
            throw new Error('LastName cannot be empty');
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ\- ]+$/.test(surname)) {
            throw new Error('The LastName contains invalid characters');
        }
        this.lastName = surname;
    }

    getLastName() {
        return this.lastName;
    }

    setEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    setPassword(password) {
        if (password.length < 5) {
            throw new Error('Password must be at least 5 characters long');
        }
        if (!/\d/.test(password) || !/[a-zA-Zа-яА-ЯёЁ]/.test(password)) {
            throw new Error('The password must contain letters and numbers');
        }
        this.password = password;
    }

    checkPassword(password) {
        return this.password === password;
    }

    setBirthDate(birthDateStr) {
        // Парсинг строки даты (формат YYYY-MM-DD)
        const birthDate = new Date(birthDateStr);
        if (isNaN(birthDate.getTime())) {
            throw new Error('Invalid date format. Use YYYY-MM-DD');
        }

        const currentYear = new Date().getFullYear();
        const minBirthYear = currentYear - 12;

        if (birthDate.getFullYear() > minBirthYear) {
            throw new Error('User must be at least 12 years old');
        }

        this.birthDate = birthDate;
    }

    getBirthDate() {
        return this.birthDate;
    }

    setSubscription(isSubscribed) {
        this.isSubscribed = isSubscribed;
    }

    isSubscribedToNewsletter() {
        return this.isSubscribed;
    }

    validate() {
        return !!(
            this.firstName &&
            this.lastName &&
            this.email &&
            this.password &&
            this.birthDate
        );
    }

    getFormData() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            birthDate: this.birthDate,
            isSubscribed: this.isSubscribed,
        };
    }
}