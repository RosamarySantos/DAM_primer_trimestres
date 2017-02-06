import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Tiempo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			URL url = new URL("http://www.accuweather.com/es/es/jaen/306731/current-weather/306731");
			URLConnection con = url.openConnection();
			// <span class="large-temp">2&deg;</span>  <span class="large-temp">2&deg;</span>
			Pattern patron = Pattern.compile(" <span class=\"large-temp\">(\\d)+&deg;</span>");
			BufferedReader buf = new BufferedReader(new InputStreamReader(con.getInputStream()));
			String html="";
			String linea;
			while((linea=buf.readLine())!=null){
				html+=linea;
			}
			Matcher match = patron.matcher(html);
			match.find();
			System.out.println("Temperatura ambiente: "+match.group(1));
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

