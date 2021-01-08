public static void main(String[] args){
final String MSG_FORMATSTRING="Rational Developer {0} version {1}";
final String VERSION = "version";
final String EDITION = "edition";
final String JAVA = "For Java";
final String MY_RESOURCES = "MyResources";

ResourceBundle myResources = ResourceBundle.getBundle(MY_RESOURCES, Locale.US );
String version = myResources.getString(VERSION);
String edition = myResources.getString(EDITION);

MessageFormat form = new MessageFormat(MSG_FORMATSTRING);
Object[] testArgs = {new Integer(6), JAVA};
System.out.println(form.format(testArgs));
}
