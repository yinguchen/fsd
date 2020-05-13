package com.project.buyeritemservice.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.buyeritemservice.entity.ItemEntity;
import com.project.buyeritemservice.pojo.ItemPojo;
import com.project.buyeritemservice.service.ItemService;


@RestController
@RequestMapping("emart")
@CrossOrigin
public class ItemController {
	private final static Logger LOG = LoggerFactory.getLogger(ItemController.class);

	@Autowired
	ItemService itemService;

	//EndPoint to Retrieve AllItems
	@GetMapping("item/all")
	List<ItemPojo> getAllItems() {
		LOG.info("Entered the end point \'emart/item/all\'");
		LOG.info("exited end point \'emart/item/all'");

		return itemService.getAllItems();
	}

	//EndPoints to Retrieve Particular Item
	@GetMapping("/item/{itemId}")
	ItemPojo getItem(@PathVariable("itemId") Integer itemId) {
		LOG.info("Entered the end point \'emart/item/{itemId}\'");
		LOG.info("exited end point \'emart/item/{itemId}\'");

		return itemService.getItem(itemId);
	}


	@RequestMapping(method=RequestMethod.PUT,value="item/updateItem")
	void updateCategories(@RequestBody ItemEntity item) {
		itemService.updateItem(item);
	}

}
