import java.util.List;

public class CategoryDiscount implements DiscountStrategy{

    private String targetCategory;
    private double percentage;

    public CategoryDiscount(String targetCategory, double percentage) {
        this.targetCategory = targetCategory;
        this.percentage = percentage;
    }

    public double applyDiscount (List<CartItem> items) {

        double totalDiscount = 0.0;
        for (CartItem item : items) {
            if(item.getProduct().getCategory().equalsIgnoreCase(targetCategory)){
                totalDiscount = item.getTotalPrice() * percentage;

            }
        }
        return totalDiscount;
    }
}
