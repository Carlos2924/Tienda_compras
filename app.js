let cartItems = [];

function addToCart() {
  const product1Qty = parseInt(document.getElementById('product1').value);
  const product2Qty = parseInt(document.getElementById('product2').value);
  const product3Qty = parseInt(document.getElementById('product3').value);
  const product4Qty = parseInt(document.getElementById('product4').value);
  const product5Qty = parseInt(document.getElementById('product5').value);
  const product6Qty = parseInt(document.getElementById('product6').value);
  const product7Qty = parseInt(document.getElementById('product7').value);
  const product8Qty = parseInt(document.getElementById('product8').value);
  const product9Qty = parseInt(document.getElementById('product9').value);
  const product10Qty = parseInt(document.getElementById('product10').value);
  const product11Qty = parseInt(document.getElementById('product11').value);
  const product12Qty = parseInt(document.getElementById('product12').value);




  // Clear previous items
  cartItems = [];

  if (product1Qty > 0) {
    cartItems.push({ name: 'Argolla', price: 4000, quantity: product1Qty });
  }
  if (product2Qty > 0) {
    cartItems.push({ name: 'Bafle', price: 1050000, quantity: product2Qty });
  }
  if (product3Qty > 0) {
    cartItems.push({ name: 'cocina', price: 3800000, quantity: product3Qty });
  }
  if (product4Qty > 0) {
    cartItems.push({ name: 'Crema para piel', price: 5000, quantity: product4Qty });
  }
  if (product5Qty > 0) {
    cartItems.push({ name: 'Maceta pequeña', price: 20000, quantity: product5Qty });
  }
  if (product6Qty > 0) {
    cartItems.push({ name: 'Mochilla', price: 500200, quantity: product6Qty });
  }
  if (product7Qty > 0) {
    cartItems.push({ name: 'Moto de Juquete', price: 1300000, quantity: product7Qty });
  }
  if (product8Qty > 0) {
    cartItems.push({ name: 'Paquete de ollas', price: 5100000, quantity: product8Qty });
  }
  if (product9Qty > 0) {
    cartItems.push({ name: 'Maceta pequeña', price: 2000, quantity: product9Qty });
  }
  if (product10Qty > 0) {
    cartItems.push({ name: 'Mochilla', price: 5200, quantity: product10Qty });
  }
  if (product11Qty > 0) {
    cartItems.push({ name: 'Moto de Juquete', price: 2000500, quantity: product11Qty });
  }
  if (product12Qty > 0) {
    cartItems.push({ name: 'Paquete de ollas', price: 1000, quantity: product12Qty });
  }

  showCart();
}

function showCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';

  let total = 0;
  for (const item of cartItems) {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - Cantidad: ${item.quantity} - Subtotal: $${itemTotal}`;
    cartList.appendChild(listItem);
  }

  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total a pagar: $${total}`;
}

function checkout() {
  if (cartItems.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de pagar.');
  } else {
    alert('¡Gracias por tu compra! Total a pagar: $' + calculateTotal());

  }
}

function calculateTotal() {
  let total = 0;
  for (const item of cartItems) {
    total += item.price * item.quantity;
  }
  return total;
}
