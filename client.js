//Add this code in react app

function Client() {
  const performGetSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/id=2?id=2&name=Bob")
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          return Promise.reject(`${res.status} ${res.statusText}`);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  const performPutSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 1, name: "Tom" }),
    };
    fetch("http://localhost:5000/", requestOptions)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          return Promise.reject(`${res.status} ${res.statusText}`);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  const performPostSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 3, name: "Tom" }),
    };
    fetch("http://localhost:5000/", requestOptions)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          return Promise.reject(`${res.status} ${res.statusText}`);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  const performDeleteSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 3 }),
    };
    fetch("http://localhost:5000/", requestOptions)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          return Promise.reject(`${res.status} ${res.statusText}`);
        }
        console.log(data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <>
      <h1>Login</h1>
      After button click check console's of both server and browser
      <h3>Get</h3>
      <button type="button" onClick={performGetSubmit}>
        Get
      </button>
      <h3>Put</h3>
      <button type="button" onClick={performPutSubmit}>
        Put
      </button>
      <h3>Post</h3>
      <button type="button" onClick={performPostSubmit}>
        Post
      </button>
      <h3>Delete</h3>
      <button type="button" onClick={performDeleteSubmit}>
        Delete
      </button>
    </>
  );
}

export default Client;
