import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Addstudent() {

  const navigate = useNavigate();

  const API =
    "https://6aa2d260ccb3db9689a71063.mockapi.io/student";


  const [data, setData] = useState({

    rno: "",
    name: "",
    class: "",
    profile: ""

  });


  // IMAGE
  const imgChange = (e) => {

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {

      setData({

        ...data,

        profile: reader.result

      });

    };

    reader.readAsDataURL(file);

  };


  // ADD / CREATE
  const addStudent = () => {

    if (
      data.rno === "" 
      data.name === "" 
      data.class === ""
    ) {

      alert("Please fill all fields");

      return;

    }


    fetch(API, {

      method: "POST",

      body: JSON.stringify(data),

      headers: {
        "Content-Type": "application/json"
      }

    })

      .then(() => {

        alert("Record Added Successfully");

        navigate("/student");

      })

      .catch((error) => {

        console.log(error);

      });

  };


  return (

    <div>

      <h1>Add Student</h1>


      <label>
        Roll No :
      </label>

      <input
        type="text"
        value={data.rno}
        onChange={(e) =>
          setData({
            ...data,
            rno: e.target.value
          })
        }
      />

      <br />
      <br />


      <label>
        Name :
      </label>

      <input
        type="text"
        value={data.name}
        onChange={(e) =>
          setData({
            ...data,
            name: e.target.value
          })
        }
      />

      <br />
      <br />


      <label>
        Class :
      </label>

      <br />


      BCA

      <input
        type="radio"
        name="class"
        value="BCA"
        onChange={(e) =>
          setData({
            ...data,
            class: e.target.value
          })
        }
      />


      BSCIT

      <input
        type="radio"
        name="class"
        value="BSCIT"
        onChange={(e) =>
          setData({
            ...data,
            class: e.target.value
          })
        }
      />


      MCA

      <input
        type="radio"
        name="class"
        value="MCA"
        onChange={(e) =>
          setData({
            ...data,
            class: e.target.value
          })
        }
      />


      <br />
      <br />


      <label>
        Profile :
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={imgChange}
      />


      <br />
      <br />


      <button onClick={addStudent}>
        ADD
      </button>


      <button
        onClick={() => navigate("/student")}
      >
        BACK
      </button>

    </div>

  );

}

export default Addstudent;