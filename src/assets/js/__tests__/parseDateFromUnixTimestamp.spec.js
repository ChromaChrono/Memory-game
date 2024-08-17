import { describe, test, expect } from "vitest";
import parseDateFromUnixTimestamp from "../parseDateFromUnixTimestamp";

describe("parseDateFromUnixTimestamp TEST", () => {
    test("given a unix timestamp, returns date string in format dd-mm-yyyy", () => {
        const unixTimestamp = 1723913666888;
        const dateStringFromFunction =
            parseDateFromUnixTimestamp(unixTimestamp);
        expect(dateStringFromFunction).toBe("17-08-2024");
    });
});
