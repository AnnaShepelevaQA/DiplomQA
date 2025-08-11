import {api} from "../utils/api";
import {endpoints} from "../utils/endpoints";
import {testPost, testPost2, testPost3, testPost4} from "../../tests-data/post-data";
import {testUser} from "../../tests-data/user-data";

describe('DELETE valid post and user', () => {
    test('DELETE /posts/1 should return 200 (existing post)', async () => {
        const response = await api.delete(endpoints.posts.delete(1));
        
        expect(response.status).toBe(200);
        expect(response.body).toEqual({});
    });
});

const deleteCases = [
  { 
    id: 9999, 
    description: "non-existent post",
    expected: {
      status: 200,
      body: {}
    }
  },
  { 
    id: 0, 
    description: "zero ID",
    expected: {
      status: 200,
      body: {}
    }
  },
  { 
    id: -1, 
    description: "negative ID",
    expected: {
      status: 200,
      body: {}
    }
  },
  { 
    id: "invalid", 
    description: "string ID",
    expected: {
      status: 200,
      body: {}
    }
  }
];

describe.each(deleteCases)('DELETE /posts/{id} with $description, parameterized test', ({id, expected}) => {
    test(`should return ${expected.status}`, async () => {
      const response = await api.delete(endpoints.posts.delete(id));
      
      expect(response.status).toBe(expected.status);
      expect(response.body).toEqual(expected.body);
    });
});