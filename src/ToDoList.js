/*import React,{useState} from 'react'

function Todolist()
{
    const [tasks,setTasks]=useState([]);
    const [newtask,setNewtask]=useState(" ");
    const [completedTasks,setCompletedTasks]=useState([])
    function addTask()
    {
        setTasks(t=>[...t,newtask]);
        setNewtask(" ")
    }
    function deleteTask(index)
    {
        const updatedTasks=tasks.filter((element,i)=>i!==index)
        setTasks(updatedTasks);
    }
    function deleteTaskc(index1)
    {
        const updater=completedTasks.filter((ele,i1)=>i1!==index1)
        setCompletedTasks(updater)
    }
    function completedTask(index)
    {
        const tas=tasks[index];
        setCompletedTasks(c=>[...completedTasks,tas]);
        deleteTask(index);
    }
    return(
        <div>
        <div className='todobox'>
            <h1>To Do List</h1>
            <input type="text" value = {newtask} onChange={(e)=>setNewtask(e.target.value)} style={{textAlign:'center',width:'25%'}}></input>
            <input type="button" value={"Add"} onClick={addTask}></input>
            
        </div>
        <div>
        <ol style={{width:"25%",border:"1px solid black"}}>
            {
                tasks.map((task,index)=>
                <li key={index} className='borderList'style={{padding:'10px'}}>
                    <span className='text'>{task}</span>
                    <button className='deletebutton' onClick={()=>deleteTask(index)}>delete</button>
                    <button className='completed' onClick={()=>completedTask(index)}>completed</button>
                    <br></br>
                </li>)
            }
        </ol></div>
        <div >
        <h2>Completed Tasks</h2>
        <ol style={{border:"1px solid black",width:"25%"}}>
          {completedTasks.map((task1, index1) => (
            <li key={index1}>
              <span className='text1'>{task1}</span>
              <button className='deletec' onClick={()=>deleteTaskc(index1)}>delete</button>
            </li>
          ))}
        </ol>
        </div>
        </div>
    );
}
export default Todolist;*/

/*import React, { useState } from 'react';

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    setTasks(t => [...t, newtask]);
    setNewtask('');
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function deleteCompletedTask(index) {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  }

  function completeTask(index) {
    const taskToComplete = tasks[index];
    setCompletedTasks(c => [...c, taskToComplete]);
    deleteTask(index);
  }

  return (
    <div style={{textAlign:"center", backgroundColor:""}}>
      <div className='todobox'>
        <h1>To Do List</h1>
        <input
          type='text'
          value={newtask}
          onChange={e => setNewtask(e.target.value)}
          style={{ textAlign: 'center', width: '25%' }}
        />
        <input type='button' value={'Add'} onClick={addTask} />
      </div>
      <div className='tasklists' style={{ marginLeft:"35%", width:"100%"}}>
        <ol style={{ width: '25%' }}>
          {tasks.map((task, index) => (
            <li key={index} className='task-item' style={{ padding: '10px' }}>
              <span className='text'>{task}</span>
              <button className='deletebutton' onClick={() => deleteTask(index)}>
              <span role="img" aria-label="cross-mark">❌</span>
              </button>
              <button className='completed' onClick={() => completeTask(index)}>
              <span role="img" aria-label="complete">✅</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Completed Tasks</h2>
        <ol style={{ marginLeft:"35%", width:"25%"}}>
          {completedTasks.map((task, index) => (
            <li key={index} className='task-item'>
              <span className='text'>{task}</span>
              <button className='deletebutton' onClick={() => deleteCompletedTask(index)}>
              <span role="img" aria-label="cross-mark">❌</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Todolist;*/

import React, { useState } from 'react';
import './ToDoList.css';  // Importing the external CSS file

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewtask] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    if (newtask.trim()) {
      setTasks(t => [...t, newtask]);
      setNewtask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function deleteCompletedTask(index) {
    const updatedCompletedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedCompletedTasks);
  }

  function completeTask(index) {
    const taskToComplete = tasks[index];
    setCompletedTasks(c => [...c, taskToComplete]);
    deleteTask(index);
  }

  function uncompleteTask(index) {
    const taskToUncomplete = completedTasks[index];
    setTasks(t => [...t, taskToUncomplete]);
    deleteCompletedTask(index);
  }

  return (
    <div className="todolist-container">
      <div className="todobox">
        <h1>To Do List</h1>
        <div className="input-container">
          <input
            type='text'
            value={newtask}
            onChange={e => setNewtask(e.target.value)}
            className="task-input"
            placeholder="Enter new task"
          />
          <button onClick={addTask} className="add-button">Add</button>
        </div>
      </div>
      <div className="tasklists">
        <h2>Tasks</h2>
        <ol className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span className="task-text">{task}</span>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteTask(index)}>
                  ❌
                </button>
                <button className="complete-button" onClick={() => completeTask(index)}>
                  ✅
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="completed-tasks">
        <h2>Completed Tasks</h2>
        <ol className="task-list">
          {completedTasks.map((task, index) => (
            <li key={index} className="task-item completed-task-item">
              <span className="task-text">{task}</span>
              <div className="task-buttons">
                <button className="delete-button" onClick={() => deleteCompletedTask(index)}>
                  ❌
                </button>
                <button className="uncomplete-button" onClick={() => uncompleteTask(index)}>
                  ↩️
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;

