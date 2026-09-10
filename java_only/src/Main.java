//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {


        Students students_101 = new Students(35, "Garry", true );
        Students students_102 = new Students(28, "manny", false );


        System.out.println(students_101.name);
        System.out.println(students_102.name);

        for(int i= 0; i < 2; i++){

            if(students_101.age < 30){
                System.out.println(students_101.name);
            }
            else if(students_102.age < 20){
                System.out.println(students_102.name);
            }
            else{
                System.out.println("doesnt exist !!!");
            }
        }




    }
}