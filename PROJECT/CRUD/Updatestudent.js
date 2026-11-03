import React, {
  useEffect,
  useState
} from 'react';

import {
  useParams,
  useNavigate
} from 'react-router-dom';


function Updatestudent() {

  const { id } = useParams();

  const navigate = useNavigate();


  const API =
    "https://6aa2d260ccb3db9689a71063.mockapi.io/student";


  const [data, setData] = useState({

    rno: "",
    name: "",
    class: "",
    profile: ""

  });


  // SELECT ONE RECORD
  useEffect(() => {

    fetch(API + "/" + id)

      .then((response) =>
        response.json()
      )

      .then((result) => {

        setData(result);

      })

      .catch((error) => {

        console.log(error);

      });

  }, [id]);


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


  // UPDATE
  const updateStudent = () => {

    fetch(API + "/" + id, {

      method: "PUT",

      body: JSON.stringify(data),

      headers: {

        "Content-Type":
          "application/json"

      }

    })

      .then(() => {

        alert("Record Updated Successfully");

        navigate("/student");

      })

      .catch((error) => {

        console.log(error);

      });

  };


  return (

    <div>

      <h1>
        Update Student
      </h1>


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

      <input
        type="text"
        value={data.class}
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


      {data.profile && (

        <img
          src={data.profile}
          height="100"
          width="100"
          alt="profile"
        />

      )}


      <br />
      <br />


      <button onClick={updateStudent}>
        UPDATE
      </button>


      <button
        onClick={() => navigate("/student")}
      >
        BACK
      </button>

    </div>

  );

}

export default Updatestudent;