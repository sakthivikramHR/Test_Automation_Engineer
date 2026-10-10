import { test, expect } from "@playwright/test";

test("API Testing: GET request", async ({ request }) => {
  const getResponse = await request.get("https://reqres.in/api/users/2");

  expect(getResponse.status()).toBe(200);

  const getBody = await getResponse.json();

  expect(getBody.data.id).toBe(2);
  expect(getBody.data.first_name).toBe("Janet");
  expect(getBody.data.email).toBe("janet.weaver@reqres.in");
});

test("API Testing: POST request", async ({ request }) => {
  const postResponse = await request.post("https://reqres.in/api/users", {
    data: {
      id: 10,
      name: "Alex",
      job: "QA Automation Engineer",
    },
  });

  expect(postResponse.status()).toBe(201);

  const postBody = await postResponse.json();

  expect(postBody.id).toBe(10);
  expect(postBody.name).toBe("Alex");
  expect(postBody.job).toBe("QA Automation Engineer");
});
