import { beforeEach, describe, expect, it, vi } from "vitest";
import { Messaging } from "../../../client/clients/messaging/index.js";
import { generateToken } from "../../utils.js";

describe("Base Client - Get token", () => {
  const baseUrl = "http://fakehost";
  // messaging is not directly base client, but it inherits the get token logic

  it("Will expire in a lot of time", async () => {
    let getTokenFnInvokationNumber = 0;
    const generatedToken = generateToken(10000000000000);
    const getTokenFn = () => {
      getTokenFnInvokationNumber++;
      return Promise.resolve(generatedToken);
    };
    const client = new Messaging({ baseUrl, getTokenFn });
    const token = await client.refreshToken();
    expect(getTokenFnInvokationNumber).toBe(1);
    expect(token).toBe(generatedToken);

    const secondToken = await client.refreshToken();
    expect(
      getTokenFnInvokationNumber,
      "It has been invoked even if it is not expired",
    ).toBe(1);
    expect(secondToken).toBe(generatedToken);
  });

  it("Is already expired", async () => {
    let getTokenFnInvokationNumber = 0;
    const generatedToken = generateToken(-10000000000000);
    const getTokenFn = () => {
      getTokenFnInvokationNumber++;
      return Promise.resolve(generatedToken);
    };
    const client = new Messaging({ baseUrl, getTokenFn });
    const token = await client.refreshToken();
    expect(getTokenFnInvokationNumber).toBe(1);
    expect(token).toBe(generatedToken);

    const secondToken = await client.refreshToken();
    expect(
      getTokenFnInvokationNumber,
      "It has not been invoked even if it is expired",
    ).toBe(2);
    expect(secondToken).toBe(generatedToken);
  });

  it("Will expire in few seconds", async () => {
    let getTokenFnInvokationNumber = 0;
    const generatedToken = generateToken(2);
    const getTokenFn = () => {
      getTokenFnInvokationNumber++;
      return Promise.resolve(generatedToken);
    };
    const client = new Messaging({ baseUrl, getTokenFn });
    const token = await client.refreshToken();
    expect(getTokenFnInvokationNumber).toBe(1);
    expect(token).toBe(generatedToken);

    const secondToken = await client.refreshToken();
    expect(
      getTokenFnInvokationNumber,
      "It has not been invoked even if it will expire in few seconds",
    ).toBe(2);
    expect(secondToken).toBe(generatedToken);
  });
});
