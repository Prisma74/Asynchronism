// Function that simulates obtaining a list of users from an "API"

function getUsers() {
    return new Promise((resolve, reject) => {
      console.log("Getting users...");
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve([
            { id: 1, nombre: "Andres" },
            { id: 2, nombre: "Garcia" },
            { id: 3, nombre: "Camilo" },
          ]);
        } else {
          reject("Error getting users...");
        }
      }, 2000);
    });
  }
  
  function getUserDetails(id) {
    return new Promise((resolve, reject) => {
      console.log(`Getting details of user with ID ${id}`);
      setTimeout(() => {
        const success = true;
        if (success) {
          resolve({
            id: id,
            nombre: id === 1 ? "Andres" : id === 2 ? "Garcia" : "Camilo",
            edad: id === 1 ? 23 : id === 2 ? 22 : 25,
            correo:
              id === 1
                ? "andres@gmail.com"
                : id === 2
                ? "garcia@gmail.com"
                : "camilo@gmail.com",
          });
        }
      }, 2000);
    });
  }
  
  function showUserData() {
    getUsers()
      .then((users) => {
        console.log("Users obtained: ", users);
        return getUserDetails(users[1].id);
      })
      .then((details) => {
        console.log("User details", details);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  showUserData();
  