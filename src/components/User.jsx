import React from 'react'
import { useState } from 'react';

function User({ user, banUser, setUser }) {
    const [edit, setEdit] = React.useState(false);
    const [name, setName] = useState(user.name)
    const [surname, setSurname] = useState(user.surname)
    const [age, setAge] = useState(user.age)

  return edit ? (
        <p>
          Имя:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          Фамилия:
          <input
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
          Возраст:{' '}
          <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
          <button onClick={() => {setUser({...user, name: name, surname: surname, age: age}, user.id); setEdit(false)}}>Сохранить</button>
        </p>
      ) : (
        <div>
          <span onClick={() => setEdit(true)}>{user.name} {user.surname} {user.age} </span>
          {user.banned ? 'Забанен' : ''} <button onClick={() => banUser(user.id)}>Забанить</button>
        </div>
      )
}

export default User