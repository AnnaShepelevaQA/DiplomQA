export class RegistrationForm {
    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private birthDate: Date | null;
    private isSubscribed: boolean;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.birthDate = null;
        this.isSubscribed = false;
    }

    setFirstName(name: string): void {
        if (!name.trim()) {
            throw new Error('Name cannot be empty');
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ\- ]+$/.test(name)) {
            throw new Error('The name contains invalid characters');
        }
        this.firstName = name;
    }

    getFirstName(): string {
        return this.firstName;
    }

    setLastName(surname: string): void {
        if (!surname.trim()) {
            throw new Error('LastName cannot be empty');
        }
        if (!/^[a-zA-Zа-яА-ЯёЁ\- ]+$/.test(surname)) {
            throw new Error('The LastName contains invalid characters');
        }
        this.lastName = surname;
    }

    getLastName(): string {
        return this.lastName;
    }

    setEmail(email: string): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Invalid email format');
        }
        this.email = email;
    }

    getEmail(): string {
        return this.email;
    }

    setPassword(password: string): void {
        if (password.length < 5) {
            throw new Error('Password must be at least 5 characters long');
        }
        if (!/\d/.test(password) || !/[a-zA-Zа-яА-ЯёЁ]/.test(password)) {
            throw new Error('The password must contain letters and numbers');
        }
        this.password = password;
    }

    checkPassword(password: string): boolean {
        return this.password === password;
    }

    setBirthDate(birthDateStr: string): void {
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

    getBirthDate(): Date | null {
        return this.birthDate;
    }

    setSubscription(isSubscribed: boolean): void {
        this.isSubscribed = isSubscribed;
    }

    isSubscribedToNewsletter(): boolean {
        return this.isSubscribed;
    }

    validate(): boolean {
        return !!(
            this.firstName &&
            this.lastName &&
            this.email &&
            this.password &&
            this.birthDate
        );
    }

    getFormData(): {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        birthDate: Date | null;
        isSubscribed: boolean;
    } {
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