const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 3.9
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.1
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: 4.7
    },
    {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: 2.1
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: 4.6
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: 3.9
    },
    {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: 3
    },
    {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: 1.9
    },
    {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64,
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: 3.3
    },
    {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description: "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: 2.9
    }
   
];

window.onload = function () {
    const productList = document.getElementById("product-list");
  
    // Function to render product cards
    function renderProducts(products) {
      // Clear existing product list
      productList.innerHTML = "";
  
      products.forEach((product) => {
        const originalPrice = Math.trunc(product.price * 1.6);
        const priceDifference = (originalPrice - product.price).toFixed(2);
  
        const rating = product.rating.rate;
        const reviews = (product.rating.count / 1000).toFixed(1);
  
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
              <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
              </div>  
              <div class="product-info">
                <div class="product-rating">
                  <span>
                    ${rating} <span class="star">★</span> | ${reviews}k
                  </span>
                  
                </div>
                  <div class="product-title">${
                    product.title.slice(0, 15) + "..."
                  }</div>
                  <div class="product-description">${
                    product.description.slice(0, 26) + "..."
                  }</div>
                  <div class="product-price">
                  <strong>Rs. ${product.price}</strong>&nbsp;
                  <strike class="org-price">Rs.${originalPrice}</strike>&nbsp;
                  <span class="price-diff">(Rs.${priceDifference} OFF)</span>
                  
                  </div>
              </div>
          `;
  
        productList.appendChild(productCard);
      });
    }
  
    // Initial rendering of products
    renderProducts(products);
  
    // Filter by category
    const filterByCategory = (category) => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    };
  
    // Sort by price (ascending or descending)
    const sortByPrice = (order) => {
      const sortedProducts = [...products].sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
      );
      renderProducts(sortedProducts);
    };
  
    // Sort by popularity (rating: ascending or descending)
    const sortByPopularity = (order) => {
      const sortedProducts = [...products].sort((a, b) =>
        order === "asc"
          ? a.rating.count - b.rating.count
          : b.rating.count - a.rating.count
      );
      renderProducts(sortedProducts);
    };
  
    // Event listeners for filter and buttons
    document
      .getElementById("filter-category-men")
      .addEventListener("click", () => {
        filterByCategory("men's clothing");
      });
  
    document
      .getElementById("filter-category-women")
      .addEventListener("click", () => {
        filterByCategory("women's clothing");
      });
  
    document.getElementById("sort-price-asc").addEventListener("click", () => {
      sortByPrice("asc");
    });
  
    document.getElementById("sort-price-desc").addEventListener("click", () => {
      sortByPrice("desc");
    });
  
    document
      .getElementById("sort-popularity-asc")
      .addEventListener("click", () => {
        sortByPopularity("asc");
      });
  
    document
      .getElementById("sort-popularity-desc")
      .addEventListener("click", () => {
        sortByPopularity("desc");
      });
  };