async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
      const data = await response.json();
  
      const container = document.querySelector('.images');
      
      data.map(product => {
        const div = document.createElement('div');
        div.classList.add('img1');
  
        const img = document.createElement('img');
        img.src = product.image;
        img.width = 200;
        img.height = 200;

        img.addEventListener('click', () => {
          window.location.href = `details.html?id=${product.id}`;
        });
        

        const title = document.createElement('p');
        title.textContent = product.title;
  
        const price = document.createElement('p');
        price.textContent = 'Rs.' + product.price;
  
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
  
        container.appendChild(div);
      });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  window.addEventListener('load', fetchProducts);
  