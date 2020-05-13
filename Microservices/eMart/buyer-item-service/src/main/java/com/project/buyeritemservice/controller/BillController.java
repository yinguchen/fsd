package com.project.buyeritemservice.controller;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.buyeritemservice.pojo.BillPojo;
import com.project.buyeritemservice.service.BillService;
import com.project.buyeritemservice.controller.BillController;

@RestController
@CrossOrigin
@RequestMapping("emart")
public class BillController {
	private final static Logger LOG = LoggerFactory.getLogger(BillController.class);

	@Autowired
	BillService billService;

	//EndPoint to addBill
	@PostMapping("/bitem")
	BillPojo addBill(@RequestBody BillPojo billPojo) {
		LOG.info("Entered the end point \'emart/bitem\'");
		LOG.info("exited end point \'emart/bitem\'");
		return billService.addBill(billPojo);
}

	@GetMapping("/bill/{buyerId}")
	Set<BillPojo> getBill(@PathVariable("buyerId") Integer buyerId) {

		return billService.getBill(buyerId);
	}


}