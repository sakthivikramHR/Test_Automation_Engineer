import { test, expect } from "@playwright/test";

test("API Testing: GET request", async ({ request }) => {
  
  // Creating GET API Response
  const getResponse = await request.get("https://reqres.in/api/users/2");

  // Checking API Response code
  expect(getResponse.status()).toBe(200);
  expect(getResponse.statusText()).toBe("OK");

  // Printing JSON API Response
  const jsonGETAPIResponse = await getResponse.json();
  console.log('GET API RESPONSE: ' + JSON.stringify(jsonGETAPIResponse, null, 2));

});

test("API Testing: POST request", async ({ request }) => {
  // Creating POST API Response
  const postResponse = await request.post("https://reqres.in/api/users", {
    data: {
      id: 10,
      name: "Vikram",
      job: "QA Automation Engineer",
    },
  });

  // Checking API Response Code
  expect(postResponse.status()).toBe(201);
  expect(postResponse.statusText()).toBe("Created");
  expect(postResponse.headers()["content-type"]).toContain("application/json");

  // Printing JSON API Response
  const jsonPOSTAPIResponse = await postResponse.json();
  console.log("POST API RESPONSE: " + JSON.stringify(jsonPOSTAPIResponse, null, 2));

  // Validating property/key names
  expect(jsonPOSTAPIResponse).toHaveProperty("id");
  expect(jsonPOSTAPIResponse).toHaveProperty("name");
  expect(jsonPOSTAPIResponse).toHaveProperty("job");
  expect(jsonPOSTAPIResponse._meta).toHaveProperty("powered_by");

  // Validating API response body
  expect(jsonPOSTAPIResponse.id).toBeGreaterThan(0);
  expect(jsonPOSTAPIResponse.name).toBe("Vikram");
  expect(jsonPOSTAPIResponse._meta.powered_by).toBe("ReqRes");

});
