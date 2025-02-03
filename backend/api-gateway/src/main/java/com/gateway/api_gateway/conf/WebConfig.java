//package com.gateway.api_gateway.conf;
//
//import java.util.Arrays;
//
//import org.springframework.cloud.gateway.route.RouteLocator;
//import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestMethod;
//
//@CrossOrigin
//@Configuration
//public class WebConfig  {
//
//    @Bean
//    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
//    	
//    	
//        return builder.routes()
//                .route("produtos", r -> r
//                        .path("/produtos/**")
//                        .uri("http://localhost:8081/"))
//                .route("usuarios", r -> r
//                        .path("/usuarios/**")
//                        .uri("http://localhost:8082/"))
//                .build();
//
//    }
//    
//    
//}