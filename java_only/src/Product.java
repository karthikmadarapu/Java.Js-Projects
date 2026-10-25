public class Product {

   private int id;
   private String name;
   private String category;
   private double basePrice;



   public Product(int id ,String name, String category, double basePrice) {
       this.id = id;
       this.name = name;
       this.category = category;
       this.basePrice = basePrice;
   }


   // Getters
    public int getId(){return id;}
    public String getName(){return name;}
    public String getCategory(){return category;}
    public double getBasePrice(){return basePrice;}

}
