async function fetchDetails() {
    try {
      const params = new URLSearchParams(window.location.search);
      const productId = params.get('id');
  
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const product = await response.json();

      const container = document.querySelector('.singleDetails');
  
      const img = document.createElement('img');
      img.src = product.image;
  
      const title = document.createElement('p');
      title.textContent = product.title;
  
      const price = document.createElement('p');
      price.textContent = 'Rs.' + product.price;
  
      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(price);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }
  
  window.addEventListener('load', fetchProductDetails);
  