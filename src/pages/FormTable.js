import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getDatabase, ref, set, get } from "firebase/database";

const FormTable = () => {
  const [data, setData] = useState({});
  const firebaseConfig = {
    apiKey: "AIzaSyB1US5Rj7GIiXxxKFkk2shPT_JkgwrxSmU",
    authDomain: "reactform-86464.firebaseapp.com",
    databaseURL: "https://reactform-86464-default-rtdb.firebaseio.com",
    projectId: "reactform-86464",
    storageBucket: "reactform-86464.appspot.com",
    messagingSenderId: "173490351823",
    appId: "1:173490351823:web:5035dccd2dccb58efed1ba",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  useEffect(() => {
    const db = getDatabase(app);
    const dbRef = ref(db);
    get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val()?.form);
      } else {
        console.log("No data available");
      }
    });
  }, []);
  const mappedObject = Object.fromEntries(
    Object.entries(data)
      .reverse()
      .map(([key, value]) => [key, value])
  );
  console.log(mappedObject);

  return (
    <div>
      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          width: "100%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <thead
          style={{
            backgroundColor: "#e6e6e6",
          }}
        >
          <tr>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Name
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Date of Birth
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Sex
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Mobile No
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Email
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Govt issue id
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Guardian Name
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Emergency Contact No
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Address
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              City
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              State
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Pincode
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Country
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Occupation
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Marital Status
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Religion
            </th>
            <th
              style={{
                borderCollapse: "collapse",
                width: "100%",
                padding: "10px",
                textAlign: "center",
              }}
            >
              Nationality
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(mappedObject).map((key, index) => {
            return (
              <tr
                key={index}
                style={{
                  border: "1px solid black",
                  borderCollapse: "collapse",
                  width: "100%",
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].dob}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].sex}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].mobile_no}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].email}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].issued_id}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].guardian_name}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].emergency_no}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].address}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].city}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].state}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].pincode}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].country}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].occupation}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].martial_status}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  {mappedObject[key].occupation}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    borderCollapse: "collapse",
                    width: "100%",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {mappedObject[key].nationality}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FormTable;
