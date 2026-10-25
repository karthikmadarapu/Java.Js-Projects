import java.util.List;

public class BulkDiscount  implements DiscountStrategy {

    public double applyDiscount(List<CartItem> items) {

        double totalDiscount = 0.0;
        for(CartItem item : items){
            if(item.getQuantity() > 3){
                totalDiscount += item.getTotalPrice() * 0.20;
            }
        }
        return totalDiscount;
    }

}
