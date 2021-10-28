import React, { useState } from "react";
import { fetchAll } from "./api/fake.api/user.api";
const users = fetchAll();
console.log("users:", users);

export const App = () => {
  const [persons, setPersons] = useState(users);
  const [addFormUsers, setAddFormUsers] = useState({
    name: "",
    profession: {
      name: "",
    },
    qualities: { name: "000", color: "#000", _id: "67rdca3eeb7f6fgeed471198" },
    completedMeetings: "",
    rate: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormUsers = { ...addFormUsers };
    newFormUsers[fieldName] = fieldValue;
    setAddFormUsers(newFormUsers);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: addFormUsers.name,
      profession: addFormUsers.profession,
    };
    const newPersons = [...persons, newPerson];
    setPersons(newPersons);
  };
  const handleDeleteClick = (personId) => {
    const newPersons = [...persons];
    const index = persons.findIndex((person) => person._id === personId);
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };
  const people = "человек";
  const tusa = "тусанет";
  if (users.length > 1 && users.length < 5) {
    people = "человека";
    tusa = "тусанут";
  }

  return (
    <div className="app-container">
      <h1>{`${users.length} ${people} ${tusa} с тобой сегодня`}</h1>
      <table className="table table-dark table-striped table-hover">
        <thead className="thead">
          <tr>
            <th scope="col" className="px-2">
              Имя
            </th>
            <th scope="col" className="px-2">
              Качества
            </th>
            <th scope="col" className="px-2">
              Профессия
            </th>
            <th scope="col" className="px-2">
              Встретился, раз
            </th>
            <th scope="col" className="px-2">
              Оценка
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr id={person._id}>
              <td>{person.name}</td>
              <td>
                {person.qualities.map((qualitie) => (
                  <span className={"ms-1 badge bg-" + qualitie.color}>
                    {qualitie.name}
                  </span>
                ))}
              </td>
              <td>{person.profession.name}</td>
              <td>{person.completedMeetings}</td>
              <td>{person.rate}</td>
              <button
                style={{ color: "white" }}
                onClick={() => handleDeleteClick(person._id)}
              >
                Удалить
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="h2 ta-center">
        Чтобы присоедениться заполните форму ниже
      </h2>
      <form className="form" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Введите Ваше имя"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="profession"
          required="required"
          placeholder="Введите Вашу профессию"
          onChange={handleAddFormChange}
        />
        <button className="button" type="submit">
          Присоедениться
        </button>
      </form>
    </div>
  );
};
