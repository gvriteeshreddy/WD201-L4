
const todoconcept = () => {
  listofall = [];
  const bind = (todoItem) => {
    listofall.push(todoItem);
  };
  const tickcomplete = (index) => {
    listofall[index].completed = true;
  };

  let onthisdate = new Date().toLocaleDateString("en-CA");
  

  const aftervalue = () => {
    return listofall.filter((todo) => {
      return todo.dueDate < onthisdate;
    });
  };

  const onvalue = () => {
    return listofall.filter((todo) => {
      return todo.dueDate === onthisdate;
    });
  };

  const beforevalue = () => {
    return listofall.filter((todo) => {
      return todo.dueDate > onthisdate;
    });
  };

  const toDisplayList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == onthisdate ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    listofall,
    bind,
    tickcomplete,
    aftervalue,
    onvalue,
    beforevalue,
    toDisplayList,
  };
};

module.exports = todoconcept;

