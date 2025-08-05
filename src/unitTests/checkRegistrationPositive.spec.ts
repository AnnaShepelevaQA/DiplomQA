// @ts-nocheck
import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../registrationForm/registration';

test.describe('Check valid First Name from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set First Name correctly and save', () => {
        const validName = 'Anna';
        form.setFirstName(validName);
        
        expect(form.getFirstName()).toBe(validName);
    });

    test('should set First Name correctly array and save', () => {
        const validNames = [
            'Harry-James',
            'Ronald',
            'Hermione'
        ]

        validNames.forEach(name => {
            form.setFirstName(name);
            expect(form.getFirstName()).toBe(name);
        });
    });

    test('should set First Name correctly with space and save', () => {
        const validName = 'Joanne Rowling';
        form.setFirstName(validName);
        
        expect(form.getFirstName()).toBe(validName);
    });
});



test.describe('Check valid Last Name from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set Last Name correctly and save', () => {
        const validSurname = 'Potter';
        form.setLastName(validSurname);
        
        expect(form.getLastName()).toBe(validSurname);
    });

    test('should set Last Name correctly array and save', () => {
        const validSurname = [
            'James-Potter',
            'Granger',
            'RonWeasley'
        ]

        validSurname.forEach(surename => {
            form.setLastName(surename);
            expect(form.getLastName()).toBe(surename);
        });
    });

    test('should set Last Name correctly with space and save', () => {
        const validSurname = 'Kathleen Rowling';
        form.setLastName(validSurname);
        
        expect(form.getLastName()).toBe(validSurname);
    });
});


test.describe('Check valid Email from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set Email correctly and save', () => {
        const validEmail = 'HarryPotter@hogwarts.com';
        form.setEmail(validEmail);
        
        expect(form.getEmail()).toBe(validEmail);
    });

    test('should set Emails array correctly and save', () => {
        const validEmail = [
            'Hermione.Granger@hogwarts.com',
            'ron-weasley@hogwarts.uk',
            'albus@dumbledore.com'
        ]

        validEmail.forEach(email => {
            form.setEmail(email);
            expect(form.getEmail()).toBe(email);
        });
    });
});



test.describe('Check valid password from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set password correctly and save', () => {
        const validPassword = 'platformA934';
        form.setPassword(validPassword);
        
        expect(form.checkPassword(validPassword)).toBe(true);
    });

    test('should set password correctly and check password correctly', () => {
        const validPassword = 'platformA934';
        form.setPassword(validPassword);
        
        expect(form.checkPassword('platformA934')).toBe(true);
    });

    test('should set rus password correctly and save', () => {
        const validPassword = 'ЭкспектоПатронум77';
        form.setPassword(validPassword);
        
        expect(form.checkPassword(validPassword)).toBe(true);
    });
});



test.describe('Check valid Birhday date from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should accept valid birth date for 15 year old', async () => {
        const testDateStr = '2010-05-20';
        form.setBirthDate(testDateStr);
  
        expect(form.getBirthDate()).toEqual(new Date(testDateStr));
    });

    test('should accept valid birth date for 29 year old', async () => {
        const testDateStr = '1996-05-20';
        form.setBirthDate(testDateStr);
  
        expect(form.getBirthDate()).toEqual(new Date('1996-05-20'));
    });
});



test.describe('Check valid Subscription from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set Subscription true', async () => {
        const needSub = true;
        form.setSubscription(needSub);
  
        expect(form.isSubscribedToNewsletter()).toBe(true);
    });

    test('should set Subscription false', async () => {
        const needSub = false;
        form.setSubscription(needSub);
  
        expect(form.isSubscribedToNewsletter()).toBe(false);
    });
});
