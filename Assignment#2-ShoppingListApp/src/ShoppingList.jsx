import { useState } from 'react'
import './ShoppingList.css'

const mainPage = () => {
    const [List, setList] = useState([]);
    const [input, setInput] = useState("");
    const [editing, setEditing] = useState(null);
    const [editText, setEditText] = useState("");
  
    const addList = () => {
      if (input.trim() !== "") {
        setList([...List, { text: input, completed: false }]);
        setInput("");
      }
    };
  
    const toggle = (index) => {
      setList(
        List.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const removeList = (index) => {
      setList(List.filter((_, i) => i !== index));
    };
  
    const edit = (index) => {
      setEditing(index);
      setEditText(List[index].text);
    };
  
    const newEdit = (index) => {
      if (editText.trim() !== "") {
        const updatedList = [...List];
        updatedList[index].text = editText;
        setList(updatedList);
      }
      setEditing(null);
    };
  
    return (
      <div className="container">

        <h2>Shopping List</h2>

        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new list"
          />
          <button onClick={addList}>Add</button>
        </div>

        <ul>
          {List.map((task, index) => (
            <li className={task.completed ? "completed" : ""}>
              {editing === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onBlur={() => newEdit(index)}
                  onKeyDown={(e) => e.key === "Enter" && newEdit(index)}
                  autoFocus
                />
              ) : (
                <span
                  className={task.completed ? "completed" : ""} onClick={() => toggle(index)}>
                  {task.text}
                </span>
              )}

              <button className="edit" onClick={() => edit(index)}>Edit</button>

              <button className="delete" onClick={() => removeList(index)}>Remove!</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default mainPage;