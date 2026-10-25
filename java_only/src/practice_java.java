import org.w3c.dom.ls.LSOutput;

public class practice_java {

    public static void main(String[] args) {
        int age_1 = 26;

        String canEnter = (age_1 > 18)? "yes" : "must be 18++";
        System.out.println(canEnter);


        // door code guard

        int doorCode = 123456789;

        String guardCheck = (doorCode == 123456789)?
                "yes you can enter the building" : "Wrong code authorisation rejected";


        System.out.println(guardCheck);

        System.out.println(fahrenheitToCelsius(77));
        fizzBuzz(15);




    }





    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;

    }


     public static void fizzBuzz(int num) {


        for (int i = 0; i <= num; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            }else{
                System.out.println(i);
            }


        }



    }






}