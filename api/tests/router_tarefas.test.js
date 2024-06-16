const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

let id = null;

describe("API Todo List", () => {
  test('Deve retornar 201 e um JSON no POST /tarefas', async () => {
    const response = await request.post('/tarefas').send({titulo: "Comprar leite", descricao: "Comprar 2 litros de leite"});
    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
  });

  test("Deve retornar 422 e um JSON no POST /tarefas", async () => {
    const response = await request.post("/tarefas").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um array no GET /tarefas", async () => {
    const response = await request.get("/tarefas");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e um JSON no GET /tarefas/id", async() => {
    const response = await request.get(`/tarefas/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no GET /tarefas/id", async() => {
    const response = await request.get("/tarefas/6643e1f30514eb771f0b5cb3");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON no PUT /tarefas/id", async () => {
    const response = await request.put(`/tarefas/${id}`)
     .send({titulo: "Comprar pão", descricao: "Comprar pão francês"});
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no PUT /tarefas/id", async() => {
    const response = await request.put("/tarefas/6643e1f30514eb771f0b5cb3");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON no PUT /tarefas", async () => {
    const response = await request.put(`/tarefas/${id}`).send({});
    expect(response.status).toBe(422 );
    expect(response.type).toBe("application/json"); 
  });

  test("Deve retornar 204 e sem corpo no DELETE /tarefas/id", async () => {
    const response = await request.delete(`/tarefas/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });

  test("Deve retornar 404 e um JSON no DELETE /tarefas/id", async () => {
    const response = await request.delete(`/tarefas/${id}`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
});
