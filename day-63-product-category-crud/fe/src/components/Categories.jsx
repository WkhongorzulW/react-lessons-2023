import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const CATEGORY_URL = "http://localhost:8000/category";

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const FETCHED_DATA = await fetch(CATEGORY_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }

  async function handleCategoryDelete(categoryId) {
    console.log(categoryId);

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
      }),
    };
    const FETCHED_DATA = await fetch(CATEGORY_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
      toast(`Category with id = ${categoryId} deleted successfully`);
    }
  }

  async function handleSearchSubmit(e) {
    e.preventDefault();
    const searchInput = e.target.search.value;

    const SEARCH_URL = `http://localhost:8000/search?value=${searchInput}`; // query params
    const FETCHED_DATA = await fetch(SEARCH_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }

  return (
    <div>
      <h1>Category list</h1>
      <form onSubmit={handleSearchSubmit}>
        <input name="search" />
        <button type="submit">Search</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Category ID</td>
            <td>Category Name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <a href={`/category/edit/${category.id}`}>
                      <button>Edit</button>
                    </a>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleCategoryDelete(category.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
