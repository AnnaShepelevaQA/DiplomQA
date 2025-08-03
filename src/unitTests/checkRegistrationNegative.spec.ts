// @ts-nocheck
import { test, expect } from '@playwright/test';
import { RegistrationForm } from '../registrationForm/registration';

test.describe('Check invalid firstName from class', () => {
    let form: RegistrationForm;
    
    test.beforeEach( () => {
        form = new RegistrationForm();
    });

    test('should set FirstName invalid and save', () => {
    const invalidName = 'Иван123';

    expect(() => form.setFirstName(invalidName)).toThrowError(
      'The name contains invalid characters'
    );
});

});

