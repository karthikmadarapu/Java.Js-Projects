import java.util.*;

public class ShoppingCart {

    private Map<String, CartItem> items = new HashMap<>();
    private List<CartItem> cartItems = new ArrayList<>();

    public void addItem( Product product , int quantity) {
        if(items.containsKey(product.getId())){
            CartItem existingItem = items.get(product.getId());
            existingItem.setQuantity(existingItem.getQuantity() + quantity);
        }
        else{
            items.put(product.getId(), new CartItem(product, quantity));

        }
    }

    public void removeItem(String productId){
        items.remove(productId);
    }

}
