package com.project.buyeritemservice.service;

import java.util.Set;

import com.project.buyeritemservice.entity.BillEntity;
import com.project.buyeritemservice.pojo.BillPojo;

public interface BillService {
	BillPojo addBill(BillPojo billPojo);
	
	Set<BillPojo> getBill(int buyerId);
}
