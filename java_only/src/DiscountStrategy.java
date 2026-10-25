import java.util.List;


public interface DiscountStrategy {
    double applyDiscount (List<CartItem> items);
}
