package com.project.loginservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.loginservice.pojo.SellerSignupPojo;
import com.project.loginservice.service.SellerSignupService;

@RestController
@CrossOrigin
@RequestMapping("emart")
public class SellerSignupController {
	@Autowired
	SellerSignupService sellerSignupService;

	// EndPoint to validate Buyer
	@GetMapping("validateseller")
	SellerSignupPojo validateSeller(@RequestHeader("Authorization") String data) {
		String token[] = data.split(":");
		SellerSignupPojo sellerSignupPojo = new SellerSignupPojo();
		sellerSignupPojo.setUsername(token[0]);
		sellerSignupPojo.setPassword(token[1]);
		return sellerSignupService.validateSeller(sellerSignupPojo);
	}

	@GetMapping("/seller/{sellerId}")
	SellerSignupPojo getSellerItem(@PathVariable("sellerId") Integer sellerId) {
		return sellerSignupService.getItems(sellerId);
	}

	@PostMapping("/postseller")
	SellerSignupPojo postseller(@RequestBody SellerSignupPojo sellersignupPojo) {

		return sellerSignupService.postseller(sellersignupPojo);
	}
}
