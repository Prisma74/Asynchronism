function fetchProducts() {
  return new Promise((resolve, reject) => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error getting products");
        }
        return response.json();
      })
      .then((dat) => {
        resolve(data);
      }).catch((error) => {
        reject()
      })
  });
}
