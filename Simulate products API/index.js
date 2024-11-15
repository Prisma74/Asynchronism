function getProducts() {
  return new Promise((resolve, reject) => {
    console.log("Getting list of products...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve([
          {
            id: 1,
            name: "Tomatoes",
          },
          {
            id: 2,
            name: "Lettuces",
          },
          {
            id: 3,
            name: "Bread",
          },
          {
            id: 4,
            name: "Coffee",
          },
        ]);
      } else {
        reject("Error getting list of products...");
      }
    }, 2000);
  });
}

/* 1: { name: "Tomatoes", price: 3.5, stock: "Available", category: "Vegetables" },
2: { name: "Lettuces", price: 2.0, stock: "Low stock", category: "Vegetables" },
3: { name: "Bread", price: 1.5, stock: "Available", category: "Bakery" },
4: { name: "Coffee", price: 10.0, stock: "Out of stock", category: "Beverages" } */

function getProductsDetails(id) {
  return new Promise((resolve, reject) => {
    console.log("Getting details of product");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({
          id: id,
          name:
            id === 1
              ? "Tomatoes"
              : id === 2
              ? "Lettuces"
              : id === 3
              ? "Bread"
              : "Coffe",
          price: id === 1 ? 3.5 : id === 2 ? 2.0 : id === 3 ? 1.5 : 10.0,
          stock:
            id === 1
              ? "Available"
              : id === 2
              ? "Low stock"
              : id === 3
              ? "Available"
              : "Out of stock",
          category:
            id === 1
              ? "Vegetables"
              : id === 2
              ? "Vegetables"
              : id === 3
              ? "Bakery"
              : "Beverages",
        });
      } else {
        reject("Error getting details of product");
      }
    }, 1500);
  });
}

function showProductData() {
  getProducts()
    .then((products) => {
      console.log(products);
      return getProductsDetails(products[0].id);
    })
    .then((productDetails) => {
      console.log(productDetails);
    })
    .catch((error) => {
      console.log(error);
    });
}

showProductData();
