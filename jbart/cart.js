document.addEventListener("DOMContentLoaded", () => {
    const quantityInputs = document.querySelectorAll('.cart input[type="number"]');
    const cartItemCount = document.querySelector('.d-flex'); // This is the cart item count span
  
    const prices = [69.99, 9.99, 29.99, 19.99, 10.99];
  
    function updateTotals() {
      let subtotal = 0;
  
      quantityInputs.forEach((input, index) => {
        const quantity = parseInt(input.value);
        const price = prices[index];
        const itemSubtotal = quantity * price;
        subtotal += itemSubtotal;
  
        input.closest('tr').querySelector('td:last-child').textContent = `$${itemSubtotal.toFixed(2)}`;
      });
  
      const tax = subtotal * 0.2; 
      const total = subtotal + tax;
  
      document.querySelector('.total-price tr:nth-child(1) td:last-child').textContent = `$${subtotal.toFixed(2)}`;
      document.querySelector('.total-price tr:nth-child(2) td:last-child').textContent = `$${tax.toFixed(2)}`;
      document.querySelector('.total-price tr:nth-child(3) td:last-child').textContent = `$${total.toFixed(2)}`;
  
      updateCartItemCount();
    }
  
    function updateCartItemCount() {
      const remainingItems = document.querySelectorAll('.cart table tr').length - 1; // Subtract 1 for the header row
      cartItemCount.textContent = remainingItems;
    }
  
    quantityInputs.forEach(input => {
      input.addEventListener('change', updateTotals);
    });
  
    const removeLinks = document.querySelectorAll('.cart a[href="#"]');
    removeLinks.forEach((link, index) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const row = link.closest('tr');
        row.remove();
        prices.splice(index, 1);
        updateTotals(); 
      });
    });
  
    updateTotals();
  });
  