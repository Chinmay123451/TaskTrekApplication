import React from 'react'
import "./TaskCard.css"
import Tag from "./Tag.jsx"
import deleteIcon from "../assets/delete.png"

const TaskCard = ({columnName,tags,handleDelete,index}) => {
  return (
    <article className='task_card'>
        <div className='task_card_bottom_line'>
          <div><p className='text'>{columnName}</p></div>
            <div className='task_card_tags'>
              {tags.map((tag,index)=><Tag key={index} tagName={tag} selected={true}/>)}
            </div>
            <div className='task_delete' onClick={()=>handleDelete(index)}>
                <img src ={deleteIcon} className='deleteIcon'></img>
            </div>
        </div>
    </article>
  )
}

export default TaskCard