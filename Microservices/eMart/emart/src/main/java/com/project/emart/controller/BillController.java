package com.project.emart.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.emart.pojo.BillPojo;
import com.project.emart.service.BillService;

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



}

