import { forwardStatus, getStatusName } from "../movementStatus";

describe("forwardStatus", () => {
  it("should return the next status", () => {
    expect(forwardStatus("TODO")).toEqual({ name: "IN PROGRESS", value: "INPROGRESS" });
    expect(forwardStatus("INPROGRESS")).toEqual({ name: "DONE", value: "DONE" });
  });
  it("should return the undefined", () => {
    expect(forwardStatus("DONE")).toEqual(undefined);
  });
})

describe("getStatusName", () => {
  it("should return the status name", () => {
    expect(getStatusName("TODO")).toEqual("TODO");
    expect(getStatusName("INPROGRESS")).toEqual("IN PROGRESS");
    expect(getStatusName("DONE")).toEqual("DONE");
  });
})