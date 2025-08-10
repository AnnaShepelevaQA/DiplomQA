import {api} from "../utils/api";
import {endpoints} from "../utils/endpoints";

describe('GET valid requests', () => {
  
  test.each([1, 2, 3])('GET /posts/%i - should return a post by id', async (postId) => {
    const response = await api.get(endpoints.posts.getById(postId));
    
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(postId);
  });

  test.each([1, 2, 3])('GET /users/%i - should return a user by id', async (userId) => {
    const response = await api.get(endpoints.users.getById(userId));

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(userId);
  });

  test('GET /posts/{id}/comments - should return comments for a post', async () => {
    const response = await api.get(endpoints.posts.getByPosts(1));

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET invalid requests', () => {
  
  test('GET /posts/999999 - should return error 404', async () => {
    try {
      const response = await api.get('/posts/999999');
    
      throw new Error(`Expected 404, but got ${response.status}`);
    } catch (err: any) {
      expect(err.status).toBe(404);
      expect(err.response.body).toEqual({});
    }
  });
});