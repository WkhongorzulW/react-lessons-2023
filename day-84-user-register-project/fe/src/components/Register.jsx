import { useEffect } from "react";
import { useState } from "react";

export default function Register() {
  const ROLE_URL = "http://localhost:8080/role/list";
  const REGISTER_URL = "http://localhost:8080/register";

  const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    userrole: 0,
    address: "",
  });

  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstname">
          First Name:
          <input type="text" name="firstname" onChange={handleChange} />
        </label>
        <label htmlFor="lastname">
          Last Name:
          <input type="text" name="lastname" onChange={handleChange} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="number" name="phone" onChange={handleChange} />
        </label>
        <label htmlFor="address">
          Address:
          <textarea type="text" name="address" onChange={handleChange} />
        </label>
        <label htmlFor="userrole">
          Roles:
          <select name="userrole" onChange={handleChange}>
            {roles &&
              roles.map((r, idx) => (
                <option key={idx} id={r._id} value={r._id}>
                  {r.name}
                </option>
              ))}
          </select>
        </label>
        <button type="submit">Submit Register</button>
      </form>
    </div>
  );
}
