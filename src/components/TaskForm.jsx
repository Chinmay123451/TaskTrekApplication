import React,{useState} from 'react'
import "./TaskForm.css"
import Tag from './Tag'
import { set } from 'lodash'



const TaskForm = ({setTask}) => {
  const [taskData,setTaskData]=useState({
    task:"",
    status:"todo",
    tags:[]
  })
  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value

    setTaskData((prev)=>{
      return {...prev,[name]:value}
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(taskData)
    setTask((prev)=>{
      return [...prev,taskData]
    })
    setTaskData({
      task:"",
      status:"todo",
      tags:[]
    })
  }

  const checkTags=(tag)=>{
    return taskData.tags.some(items => items==tag)
  }

  const selectTags=(tag)=>{
      if(taskData.tags.some(items => items===tag)){
        let filterTag=taskData.tags.filter(items=>items!=tag)

        setTaskData(prev=>{
          return {...prev,tags:filterTag}
        })
      }
      else{
        setTaskData(prev=>{
          return {...prev,tags:[...prev.tags,tag]}
        })
      }
  }
  
  return (
    <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input name= "task"  value={taskData.task} type='text' className='text_input' placeholder='Enter the task..'
            onChange={(e)=>handleChange(e)}
            ></input> 
            <div className='task_form_bottom_line'>
                <div>
                <Tag tagName="HTML" selectTags={selectTags} selected={checkTags("HTML")}/>
                <Tag tagName="CSS" selectTags={selectTags} selected={checkTags("CSS")}/>
                <Tag tagName="Javascript" selectTags={selectTags} selected={checkTags("Javascript")}/>
                <Tag tagName="JQuery" selectTags={selectTags} selected={checkTags("JQuery")}/>
                </div>
                <div>
                <select name="status" value={taskData.status} className='task_status' onChange={(e)=>handleChange(e)}>
                    <option value="to-do">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                </div>
                <button value='submit' className='submit_btn'> + Add Task</button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm