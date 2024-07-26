import { uuidV4 } from "../uuid";

describe("uuid", () => {
  it("should generate a uuid", () => {
    const uuid = uuidV4();
    expect(uuid).not.toBeNull();
    expect(uuid).toBeDefined();
    expect(uuid.length).toEqual(36);
  });

  it("should not same uuid", () => {
    const uuid1 = uuidV4();
    const uuid2 = uuidV4();
    expect(uuid1).not.toEqual(uuid2);
  });
})