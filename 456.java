public static void main(String[] args){
int version = 6;
String applicaiton = "Onal Developer ";

String edition = "For Java ";
String message = "This is version";
message = message.concat(String.valueOf(version));
message = message.concat(" of ");
message = message.concat(applicaiton);
message = message.concat(edition);
message = message.concat("\".");
System.out.println(message);
}
