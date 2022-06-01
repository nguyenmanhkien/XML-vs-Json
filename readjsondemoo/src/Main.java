import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;;
import java.io.FileReader;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        JSONParser parser = new JSONParser();
        try {
            Object obj = parser.parse(new FileReader("course.json"));
            JSONObject jsonObject = (JSONObject) obj;
            String name = (String) jsonObject.get("Name");
            String course = (String) jsonObject.get("Course");
            JSONArray subjects = (JSONArray) jsonObject.get("Subject");
            System.out.println("Name: " + name);
            System.out.println("Course: " + course);
            System.out.println("Subject: ");
            Iterator interator = subjects.iterator();
            while (interator.hasNext()) {
                System.out.println(interator.next());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
