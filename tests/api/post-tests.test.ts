import {api} from "../utils/api";
import {endpoints} from "../utils/endpoints";
import {testPost} from "../../tests-data/post-data";
import {testUser} from "../../tests-data/user-data";

describe('POST create valid posts', () => {
  test('POST /post should create a new post and return it', async () => {
    const response = await api.post(endpoints.posts.create)
      .send(testPost)
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      title: testPost.title,
      body: testPost.body,
      userId: testPost.userId
    });
  });

  test('POST /post should create a new user and return it', async () => {
    const response = await api.post(endpoints.users.create)
      .send(testUser)
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      name: testUser.name,
      email: testUser.email,
      company: testUser.company
    });
  });
});