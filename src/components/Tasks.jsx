/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Task from './Task';

export function Tasks({ tasks,onDelete,onToggle }) {
  return (
    <>
      {tasks.map((task,index) => (
        <Task key={index} task = {task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  );
}
