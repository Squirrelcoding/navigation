import test, { describe } from "node:test";
import { Hallway } from "../lib/hallway";
import { expect } from "vitest";

describe("Hallway", () => {
  test("should sort rooms in ascending order", () => {
    const hallway = new Hallway(1, 3, [
      { floor: 1, number: 2, wing: "A" },
      { floor: 1, number: 1, wing: "A" },
      { floor: 2, number: 3, wing: "B" },
    ]);

    hallway.sortRooms();

    expect(hallway.rooms).toEqual([
      { floor: 1, number: 1, wing: "A" },
      { floor: 1, number: 2, wing: "A" },
      { floor: 2, number: 3, wing: "B" },
    ]);
  });
});