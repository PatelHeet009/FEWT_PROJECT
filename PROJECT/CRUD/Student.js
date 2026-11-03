import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Student() {

  const [students, setStudents] = useState([]);

  const API =
    "https://6aa2d260ccb3db9689a71063.mockapi.io/student";


  // SELECT / READ
  const getStudents = () => {

    fetch(API)

      .then((response) => response.json())

      .then((data) => {

        setStudents(data);

      })

      .catch((error) => {

        console.log(error);

      });

  };


  useEffect(() => {

    getStudents();

  }, []);


  // DELETE
  const deleteStudent = (id) => {

    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    fetch(API + "/" + id, {

      method: "DELETE"

    })

      .then(() => {

        alert("Record Deleted Successfully");

        getStudents();

      })

      .catch((error) => {

        console.log(error);

      });

  };


  return (

    <div>

      <h1>Student Management System</h1>

      <Link to="/student/add">

        <button>
          ADD STUDENT
        </button>

      </Link>

      <br />
      <br />


      <table border="1">

        <thead>

          <tr>

            <th>ID</th>

            <th>Roll No</th>

            <th>Name</th>

            <th>Class</th>

            <th>Profile</th>

            <th>Action</th>

          </tr>

        </thead>


        <tbody>

          {students.map((s) => (

            <tr key={s.id}>

              <td>
                {s.id}
              </td>

              <td>
                {s.rno}
              </td>

              <td>
                {s.name}
              </td>

              <td>
                {s.class}
              </td>

              <td>

                {s.profile && (

                  <img
                    src={s.profile}
                    height="100"
                    width="100"
                    alt="profile"
                  />

                )}

              </td>


              <td>

                <button
                  onClick={() => deleteStudent(s.id)}
                >
                  DELETE
                </button>


                &nbsp;


                <Link to={"/update/" + s.id}>

                  <button>
                    UPDATE
                  </button>

                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Student;