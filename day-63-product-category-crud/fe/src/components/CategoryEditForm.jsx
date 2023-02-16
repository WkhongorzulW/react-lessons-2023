import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function CategoryEditForm() {
  const { id } = useParams();
  console.log(id);
  const URL = "http://localhost:8000/category";
  const navigate = useNavigate();

  const [category, setCategory] = useState({
    name: "test",
  });

  useEffect(() => {
    fetchCategory();
  }, []);

  async function fetchCategory() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategory(FETCHED_JSON.data);
    }
  }

  function handleInputChange(e) {
    setCategory(e.target.value);
  }

  async function handleEditSubmit(e) {
    e.preventDefault();
    console.log(e.target.categoryName.value);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
        categoryName: e.target.categoryName.value,
        isEdit: true,
      }),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategory(FETCHED_JSON.data);
      navigate("/category/list");
    }
  }

  return (
    <div>
      <h1>Category Edit Form</h1>
      <form onSubmit={handleEditSubmit}>
        <input
          type="text"
          value={category.name}
          onChange={handleInputChange}
          name="categoryName"
        />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
}
