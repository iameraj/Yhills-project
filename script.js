// Function to add an item to the cart
function addToCart(num, itemName, itemPrice) {
  const cartItemsList = document.getElementById("cartItemsList");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
                <div class="card mb-3" style="max-width: 540px position: relative;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src="public/shoe${num}.jpg"
                                class="img-fluid rounded-start"
                                alt="${itemName}"
                            />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">${itemName}</h5>
                                <p class="card-text">$${itemPrice}</p>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="card-body">
                                <button type = "button float-end bg-danger" class = "btn-close" onclick="removeFromCart(this)"></button>
                            </div>
                        </div>
                        
                    </div>
                </div>`;
  cartItemsList.appendChild(listItem);
  $("#liveToast").toast("show");
}

// Function to remove an item from the cart
function removeFromCart(button) {
  const listItem = button.parentNode.parentNode.parentNode.parentNode;
  listItem.remove();
}
