package com.project.loginservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.project.loginservice.dao.ItemDao;
import com.project.loginservice.entity.ItemEntity;
import com.project.loginservice.entity.SellerSignupEntity;
import com.project.loginservice.entity.SubCategoryEntity;
import com.project.loginservice.pojo.ItemPojo;

@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	ItemDao itemDao;

	@Override
	public void addItem(ItemPojo itemPojo) {
		// TODO Auto-generated method stub
		SubCategoryEntity subCategory = new SubCategoryEntity();
		subCategory.setId(itemPojo.getSubCategoryId().getId());
		SellerSignupEntity seller = new SellerSignupEntity();
		seller.setId(itemPojo.getSellerId().getId());

		ItemEntity itemEntity = new ItemEntity(
				itemPojo.getId(),
				itemPojo.getName(),
				subCategory,
				itemPojo.getPrice(),
				itemPojo.getDescription(),
				itemPojo.getStock(),
				ObjectUtils.getDisplayString(itemPojo.getRemarks()),
				itemPojo.getImage(),
				seller);
		itemDao.save(itemEntity);

	}
}


