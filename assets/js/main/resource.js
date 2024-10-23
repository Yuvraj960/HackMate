document.addEventListener('DOMContentLoaded', () => {
    fetch('./js/main/resource.json')
      .then(response => response.json())
      .then(data => {
          const products = data.products;
          const container = document.querySelector('.resource-box2');
 
          products.forEach(product => {
              const colDiv = document.createElement('div');
              colDiv.classList.add('col-xl-3', 'col-lg-3', 'col-md-6', 'col-sm-12');
 
              const productBoxDiv = document.createElement('div');
              productBoxDiv.classList.add('product-box');
              productBoxDiv.dataset.description = product.description;
 
              const imgElement = document.createElement('img');
              imgElement.src = product.imgSrc;
              imgElement.style.width = '160px';
              imgElement.style.height = '160px';
 
              const headingElement = document.createElement('h3');
              headingElement.textContent = product.heading;
 
              const linkElement = document.createElement('a');
              linkElement.href = product.href;
              linkElement.target = '_blank';
              linkElement.classList.add('btn-access');
              linkElement.textContent = 'Access it →';
 
              productBoxDiv.appendChild(imgElement);
              productBoxDiv.appendChild(headingElement);
              productBoxDiv.appendChild(linkElement);
              colDiv.appendChild(productBoxDiv);
              container.appendChild(colDiv);
 
              productBoxDiv.addEventListener('click', function() {
                  const title = headingElement.textContent;
                  const link = linkElement.href;
                  const description = productBoxDiv.dataset.description;
 
                  document.getElementById('modalTitle').textContent = title;
                  document.getElementById('modalImage').src = product.imgSrc;
                  document.getElementById('modalDescription').textContent = description;
                  document.getElementById('modalLink').href = link;
                  document.getElementById('resourceModal').style.display = 'block';
              });
          });
 
          document.getElementById('searchBar').addEventListener('input', function() {
              const searchTerm = this.value.toLowerCase();
              const resourceItems = document.querySelectorAll('.product-box');
 
              resourceItems.forEach(item => {
                  const headingText = item.querySelector('h3').textContent.toLowerCase();
                  if (headingText.includes(searchTerm)) {
                      item.parentElement.style.display = ''; 
                  } else {
                }
                item.parentElement.style.display = 'none'; 
              });
          });
      })
      .catch(error => console.error('Error fetching the data:', error));
 
  document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('resourceModal').style.display = 'none';
  });
 });