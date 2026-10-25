import java.util.List;


public class PercentageDiscount implements DiscountStrategy{


    private double percentage;

    public PercentageDiscount(Double percentage){
        this.percentage = percentage;
    }

    @Override
    public double applyDiscount (List<CartItem> items) {

        double rawTotal = 0.0;
        for(CartItem item : items){
            rawTotal += item.getTotalPrice();
        }
        return  rawTotal * percentage;
    }
}
