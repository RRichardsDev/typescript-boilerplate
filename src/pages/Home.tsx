import { Button, Checkbox, TextField } from '@mui/material';
import React, { useState } from 'react';
import { text } from 'stream/consumers';

type TodoItem = {
  id: number;
  name: string;
  completed: boolean;
};

export default function Home () {
  const [data, setData] = useState<string> ('rhodri');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [textInput,  setTextInput] = useState<string>('');

  const testFunction  = async () => {
    await fetch('http://localhost:3001/test')
      .then((res) => res.json())
      .then((res) => { 
        setData(res.someValue);
      });
  };
  const handleClick = () => {
    if(textInput==='') return;
    setTodoList(prevTodo => [
      ...prevTodo,
      {id: todoList.length, name: textInput, completed: false},
    ]);
    setTextInput('');
  };
  const handleCheckboxChange = (item:TodoItem) => {
    setTodoList(todo =>
      todo.map(obj => {
        if (obj.id === item.id) {
          return {...obj, name: obj.name, completed: !obj.completed};
        }

        return obj;
      }),
    );
  };
  const handleKeydown = (e:string) => {
    if(e === 'Enter') handleClick();
  };
  return (
    <>
      <h1>Todo</h1>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li className='todo-item' key={index}>
              <span className={todo.completed?'strikethrough':''}>{todo.name}</span>
              <Checkbox 
                checked={todo.completed} 
                onChange={()=>handleCheckboxChange(todo)}/>
            </li>
          );
        })}
      </ul>
      <TextField id="standard-basic-textbox" label="What are you going to do next?" variant="standard" value={textInput} onChange={newText => setTextInput(newText.target.value)} 
        onKeyDown={e =>handleKeydown(e.key)}/>
      <Button id='submit-button' variant='contained' onClick={()=>handleClick()}>Add</Button>
      <Button id='submit-button' variant='outlined' color="error" onClick={()=>setTodoList([])}>Clear</Button>
    
    </>
  );
};