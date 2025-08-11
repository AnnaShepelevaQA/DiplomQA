import {api} from "../utils/api";
import {endpoints} from "../utils/endpoints";
import {testPost, testPost2, testPost3, testPost4} from "../../tests-data/post-data";
import {testUser} from "../../tests-data/user-data";

describe('PUT valid post and user', () => {
    test('PUT /posts/{id} should update a post and return updated data', async () => {
        const postId = 1; 
  
        const updatedPost = {
            title: "Updated " + testPost.title,
            body: "Modified " + testPost.body,
            userId: testPost.userId
        };

        const response = await api.put(endpoints.posts.update(postId))
            .send(updatedPost);

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            id: postId,
            title: updatedPost.title,
            body: updatedPost.body,
            userId: testPost.userId
        });
    });

    test('PUT /posts/{id} update a testPost2', async () => {
        const postId = 1;   
            
        const response = await api.put(endpoints.posts.update(postId))
            .send(testPost2);
    
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(testPost2.title);
        expect(response.body.userId).toBeDefined();
    });
    
    test('PUT /posts/{id} update a testPost3', async () => {
        const postId = 1;   
            
        const response = await api.put(endpoints.posts.update(postId))
            .send(testPost3);
    
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(testPost3.title);
        expect(response.body.userId).toBeDefined();
    });
    
    test('PUT /posts/{id} update a testPost4', async () => {
        const postId = 1;   
            
        const response = await api.put(endpoints.posts.update(postId))
            .send(testPost4);
    
        expect(response.status).toBe(200);
        expect(response.body.title).toBe(testPost4.title);
        expect(response.body.userId).toBeDefined();
    });

    test('PUT /users/{id} should update a user and return updated data', async () => {
        const userId = 1; 

        const updatedUser = {
            name: "Updated " + testUser.name,
            email: "new." + testUser.email,
            company: {
            name: testUser.company.name
        }
    };

        const response = await api.put(endpoints.users.putById(userId))
            .send(updatedUser)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            id: userId,
            name: updatedUser.name,
            email: updatedUser.email,
            company: updatedUser.company
        });
    });
});