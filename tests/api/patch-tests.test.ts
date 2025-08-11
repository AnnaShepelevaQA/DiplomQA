import {api} from "../utils/api";
import {endpoints} from "../utils/endpoints";
import {testPost, testPost2, testPost3, testPost4} from "../../tests-data/post-data";
import {testUser, testUser2} from "../../tests-data/user-data";

describe('PATCH valid post and user', () => {
    test('PATCH /posts/{id} update a testPost2', async () => {
        const postId = 1;   
        
        const response = await api.patch(endpoints.posts.update(postId))
            .send(testPost2);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(testPost2.title);
            expect(response.body.userId).toBeDefined();
    });

    test('PATCH /posts/{id} update a testPost3', async () => {
        const postId = 2;   
        
        const response = await api.patch(endpoints.posts.update(postId))
            .send(testPost3);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(testPost3.title);
            expect(response.body.userId).toBeDefined();
    });

    test('PATCH /posts/{id} update a testPost4', async () => {
        const postId = 10;
        const updateData = {
            title: testPost4.title
        };
        
        const response = await api.patch(endpoints.posts.update(postId))
            .send(updateData);

            expect(response.status).toBe(200);
            expect(response.body.title).toBe(testPost4.title);
            expect(response.body.userId).toBeDefined();
    });

    test('PATCH /users/{id} should partially update a user', async () => {
        const userId = 1;

        const response = await api.patch(endpoints.users.putById(userId))
            .send(testUser2);

        expect(response.status).toBe(200);
        expect(response.body.name).toBe(testUser2.name);
        expect(response.body.company.name).toBeDefined();
    });
});