
const todoconcept = require("../todo");
let onthisdate = new Date().toLocaleDateString("en-CA");

const { listofall, tickcomplete, bind, aftervalue, onvalue, beforevalue} = todoconcept();

describe("we need to test Todoconcept ", () => {
  beforeAll(() => {
    const onthisdate = new Date();
    const singleDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "Complete assignment fully",
        completed: false,
        dueDate: new Date(onthisdate.getTime() - 1 * singleDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Go for shopping today only",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Complete project this week",
        completed: false,
        dueDate: new Date(onthisdate.getTime() + 1 * singleDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].forEach(bind);
  });

  test("Add new todo concept", () => {
    

    let length = listofall.length;

    bind({
      title: "node js",
      complete: false,
      Date: new Date().toLocaleDateString("en-CA"),
    });

    expect(listofall.length).toBe(length + 1);
  });

  test("Mark todo as a tickcomplete", () => {
    expect(listofall[0].completed).toBe(false);
    tickcomplete(0);
    expect(listofall[0].completed).toBe(true);
  });

  test("retrive listofall Todos that are aftervalue", () => {
    let Todos = aftervalue();

    expect(
      Todos.every((todo) => {
        return todo.Date < onthisdate;
      })
    ).toBe(true);
  });

  test("retrive listofall Todos that are onvalue", () => {
    let Todos = onvalue();

    expect(
      Todos.every((todo) => {
        return todo.Date === onthisdate;
      })
    ).toBe(true);
  });

  test("retrive listofall Todos that are beforevalue", () => {
    let Todos = beforevalue();

    expect(
      Todos.every((todo) => {
        return todo.Date > onthisdate;
      })
    ).toBe(true);
  });
});
