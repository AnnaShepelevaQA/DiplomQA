import {api} from "../../utils/api";
import {endpoints} from "../../utils/endpoints";
import {testPost} from "../../tests-data/post-data";
import {testUser} from "../../tests-data/user-data";

describe('GET Requests', () => {
  test.only('GET /posts/{id} - should return a post', async () => {
    const response = await api.get(endpoints.posts.getById(1));
    console.log(response)
    // expect(response.status).toBe(200);
    // expect(response.body.id).toBe(1);
  });

  // test('GET /users/{id} - should return a user', async () => {
  //   const response = await api.get(endpoints.users.getById(testUser.id));
  //   expect(response.status).toBe(200);
  //   expect(response.body.id).toBe(testUser.id);
  // });

  // test('GET /posts/{id}/comments - should return comments for a post', async () => {
  //   const response = await api.get(endpoints.posts.getByComments(testPost.id));
  //   expect(response.status).toBe(200);
  //   expect(Array.isArray(response.body)).toBe(true);
  // });
});