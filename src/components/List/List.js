import React from "react";
import students from "./students.js";
import './List.css'

const listStudents = students.map(student => <Item name={student.name} isMember={student.isMember} />)

function Item({ name, isMember }) {
  return isMember ? <li className="item">{name}☑️ </li> : <li>{name} </li>;
}

function List() {
  return <ul>{listStudents}</ul>;
}

export default List;