import { signUp, login, addAddress } from "./authentication";
import axios from "axios";

describe("Actions assíncronas de autenticação", () => {
  test("Login", async () => {
    // const email = "luan@gmail.com";
    // const password = "luanzinhotop";
    // const mockBody = { email, password };
    // axios.post = jest.fn (async () => {
    // })
  });

  test("Sign Up", async () => {
    const name = "Bruninho O Brabíssimo";
    const email = "future4@gmail.com";
    const cpf = "123.123.468.12";
    const password = "bananinha";
    const mockBody = {
      name,
      email,
      cpf,
      password,
    };

    axios.post = jest.fn(async () => {
      return {
        data: [{ token: "euSouOToken" }],
      };
    });

    await signUp(name, email, cpf, password)();

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4/signup",
      mockBody
    );
  });

  test("addAddress", async () => {
    // const mockAddress = { street: "Luanzinho", city: "São Paulo", state: "SP" };
    // const mockBody = { mockAddress };
    // const mockToken = "Token"

    // axios.put = jest.fn( async () => {
    //   {headers : {
    //     auth: mockToken
    //   }}
    // });
    // const dispatch = jest.fn()

    // await addAddress(mockAddress)(dispatch)

    // expect(axios.put).toHaveBeenCalledWith("https://us-central1-missao-newton.cloudfunctions.net/rappi4/address", mockBody)
  });
});
