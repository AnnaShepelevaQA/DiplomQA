// @ts-nocheck
import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../registrationForm/registration';

test.describe('Check invalid First Name from class', () => {
  let form: RegistrationForm;
    
  test.beforeEach( () => {
        form = new RegistrationForm();
  });

  test('should set First Name invalid and save', () => {
    const invalidName = 'Иван123';

    expect(() => form.setFirstName(invalidName)).toThrowError(
      'The name contains invalid characters'
    );
  });

  test('should set array invalid First Names with specific errors', () => {
    const testCases = [
    { input: 'Harry1James', expectedError: 'invalid characters' },
    { input: '', expectedError: 'cannot be empty' }
  ];

  testCases.forEach(({ input, expectedError }) => {
    expect(() => form.setFirstName(input)).toThrowError(expectedError);
  });
});

  test('should set boolean First Name', () => {
    const invalidName = true;

    expect(() => form.setFirstName(invalidName)).toThrowError(TypeError);
  });
});



test.describe('Check invalid Last Name from class', () => {
  let form: RegistrationForm;
    
  test.beforeEach( () => {
        form = new RegistrationForm();
  });

  test('should set Last Name invalid and save', () => {
    const invalidSurname = 'Фроло23ва';

    expect(() => form.setLastName(invalidSurname)).toThrowError();
  });

  test('should set array invalid Last Names with specific errors', () => {
    const testCases = [
    { input: 'Pott3r', expectedError: 'invalid characters' },
    { input: '', expectedError: 'cannot be empty' }
  ];

  testCases.forEach(({ input, expectedError }) => {
    expect(() => form.setLastName(input)).toThrowError(expectedError);
  });
});

  test('should set boolean Last Name', () => {
    const invalidSurname = true;

    expect(() => form.setLastName(invalidSurname)).toThrowError(TypeError);
  });
});



test.describe('Check invalid Email from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set invalid Email and save', () => {
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

