package bestbuy.api.restassured;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchema;

import java.io.File;

public class PetStoreRestAssuredActions {
	public void createPet(){
		given().														//Request Payload
		body(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiRequestPayloads/CreatePetRequest.json")).
	when().															//Setting the Header & Request url
		header("Content-Type", "application/json").
		post("https://petstore.swagger.io/v2/pet").
	then().															//Printing Response in console
		log().body().
	and().															//Verify status code
		assertThat().statusCode(200).
	and().															//Verify Response using json schema
		body(matchesJsonSchema(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiResponseSchemas/CreatePetResponse.json")));
		
	}
	public void getPet(){
		given().														//Request Payload
	when().															//Setting the Header & Request url
		header("Content-Type", "application/json").
		get("https://petstore.swagger.io/v2/pet/4567").
	then().															//Printing Response in console
		log().body().
	and().															//Verify status code
		assertThat().statusCode(200).
	and().															//Verify Response using json schema
		body(matchesJsonSchema(new File(System.getProperty("user.dir") 
				+ "/src/test/resource/ApiResponseSchemas/GetPetResponse.json")));
		
	}
}
