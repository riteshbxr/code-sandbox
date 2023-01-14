import { isTimeBetween, fibonacci, factorial } from "./sample.js";
describe("interview Questions", () => {
  it("Should pass for blackout Period", () => {
    /*
    console.log(1, isTimeBetween("22:00", "18:00", "23:22") === true);
    console.log(2, isTimeBetween("22:00", "18:00", "6:00") === true);
    console.log(3, isTimeBetween("22:01", "18:00", "18:30") === false);
    console.log(4, isTimeBetween("22:01", "18:00", "19:00") === false);
    console.log(5, isTimeBetween("9:00", "18:00", "16:00") === true);
    console.log(6, isTimeBetween("9:00", "9:50", "9:15") === true);
    console.log(7, isTimeBetween("9:40", "10:20", "10:12") === true);
    console.log(8, isTimeBetween("9:40", "10:20", "09:50") === true);
    console.log(9, isTimeBetween("9:41", "10:20", "09:31") === false);
    console.log(10, isTimeBetween("9:41", "10:20", "10:42") === false);
    console.log(11, isTimeBetween("9:01", "9:50", "9:51") === false);
    console.log(12, isTimeBetween("9:01", "18:00", "6:00") === false);
    console.log(13, isTimeBetween("9:01", "18:00", "19:00") === false);
    console.log(14, isTimeBetween("9:10", "9:05", "9:07") === false);
    console.log(15, isTimeBetween("9:10", "9:05", "9:02") === true);
    console.log(16, isTimeBetween("9:10", "9:05", "9:13") === true);*/

    expect(isTimeBetween("22:00", "18:00", "23:22")).toBe(true);
    expect(isTimeBetween("22:00", "18:00", "6:00")).toBe(true);

    expect(isTimeBetween("22:01", "18:00", "18:30")).toBe(false);
    expect(isTimeBetween("22:01", "18:00", "19:00")).toBe(false);
    //----
    expect(isTimeBetween("9:00", "18:00", "16:00")).toBe(true);
    expect(isTimeBetween("9:00", "9:50", "9:15")).toBe(true);
    expect(isTimeBetween("9:40", "10:20", "10:12")).toBe(true);
    expect(isTimeBetween("9:40", "10:20", "09:50")).toBe(true);

    expect(isTimeBetween("9:41", "10:20", "09:31")).toBe(false);
    expect(isTimeBetween("9:41", "10:20", "10:42")).toBe(false);
    expect(isTimeBetween("9:01", "9:50", "9:51")).toBe(false);
    expect(isTimeBetween("9:01", "18:00", "6:00")).toBe(false);
    expect(isTimeBetween("9:01", "18:00", "19:00")).toBe(false);
  });

  it("Should result in fibonacci task", () => {
    expect(fibonacci(1)).toStrictEqual([1]);
    expect(fibonacci(2)).toStrictEqual([1, 1]);
    expect(fibonacci(3)).toStrictEqual([1, 1, 2]);
    expect(fibonacci(6)).toStrictEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(8)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("Should result in factorial task", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(6)).toBe(720);
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });
});
