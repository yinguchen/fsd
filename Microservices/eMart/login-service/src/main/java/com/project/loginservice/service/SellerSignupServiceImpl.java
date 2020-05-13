package com.project.loginservice.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.loginservice.dao.SellerSignupDao;
import com.project.loginservice.entity.BillEntity;
import com.project.loginservice.entity.CategoryEntity;
import com.project.loginservice.entity.ItemEntity;
import com.project.loginservice.entity.SellerSignupEntity;
import com.project.loginservice.entity.SubCategoryEntity;
import com.project.loginservice.pojo.BillPojo;
import com.project.loginservice.pojo.CategoryPojo;
import com.project.loginservice.pojo.ItemPojo;
import com.project.loginservice.pojo.SellerSignupPojo;
import com.project.loginservice.pojo.SubCategoryPojo;

@Service
public class SellerSignupServiceImpl implements SellerSignupService{

		@Autowired
		SellerSignupDao sellerSignupDao;
	
	@Override
	public SellerSignupPojo validateSeller(SellerSignupPojo sellerSignupPojo) {
		
		SellerSignupEntity sellerSignupEntity= sellerSignupDao.findByUsernameAndPassword(sellerSignupPojo.getUsername(),sellerSignupPojo.getPassword()	);
		if (sellerSignupEntity != null) {
			
				
				Set<ItemEntity> allItemsEntity = sellerSignupEntity.getAllItems();
				Set<ItemPojo> allItems= new HashSet<ItemPojo>();
				for(ItemEntity itemEntity : allItemsEntity) {
					SubCategoryEntity subCategoryEntity = itemEntity.getSubCategoryId();
					CategoryEntity categoryEntity = subCategoryEntity.getCategoryId();
					CategoryPojo categoryPojo = new CategoryPojo(categoryEntity.getId(), categoryEntity.getName(),
							categoryEntity.getBrief());
					SubCategoryPojo subCategoryPojo = new SubCategoryPojo(subCategoryEntity.getId(),
							subCategoryEntity.getName(), categoryPojo, subCategoryEntity.getBrief(),
							subCategoryEntity.getGstPercent());
				ItemPojo itemPojo = new ItemPojo(itemEntity.getId(), itemEntity.getName(), subCategoryPojo,
							itemEntity.getPrice(), itemEntity.getDescription(), itemEntity.getStock(),
							itemEntity.getRemarks(), itemEntity.getImage(), null);
				allItems.add(itemPojo);
				}
				sellerSignupPojo = new SellerSignupPojo(sellerSignupEntity.getId(),
						sellerSignupEntity.getUsername(), sellerSignupEntity.getPassword(),
						sellerSignupEntity.getCompany(), sellerSignupEntity.getGst(),sellerSignupEntity.getBrief(), 
						sellerSignupEntity.getAddress(), sellerSignupEntity.getEmail(),
						sellerSignupEntity.getWebsite(), sellerSignupEntity.getContact(),allItems);
				}
	
		return sellerSignupPojo;
		}

	@Override
	public SellerSignupPojo getItems(int SellerId) {
		SellerSignupPojo sellerSignupPojo = null;
		SellerSignupEntity sellerSignupEntity = sellerSignupDao.findById(SellerId).get();
		if(sellerSignupEntity!=null)
		{
			Set<ItemEntity> allItemsEntity = sellerSignupEntity.getAllItems();
			Set<ItemPojo> allItems= new HashSet<ItemPojo>();
			for(ItemEntity itemEntity : allItemsEntity) {
				SubCategoryEntity subCategoryEntity = itemEntity.getSubCategoryId();
				CategoryEntity categoryEntity = subCategoryEntity.getCategoryId();
				CategoryPojo categoryPojo = new CategoryPojo(categoryEntity.getId(), categoryEntity.getName(),
						categoryEntity.getBrief());
				SubCategoryPojo subCategoryPojo = new SubCategoryPojo(subCategoryEntity.getId(),
						subCategoryEntity.getName(), categoryPojo, subCategoryEntity.getBrief(),
						subCategoryEntity.getGstPercent());
			ItemPojo itemPojo = new ItemPojo(itemEntity.getId(), itemEntity.getName(), subCategoryPojo,
						itemEntity.getPrice(), itemEntity.getDescription(), itemEntity.getStock(),
						itemEntity.getRemarks(), itemEntity.getImage(), null);
			allItems.add(itemPojo);
			
		}
		
			sellerSignupPojo = new SellerSignupPojo(sellerSignupEntity.getId(),
					sellerSignupEntity.getUsername(), sellerSignupEntity.getPassword(),
					sellerSignupEntity.getCompany(), sellerSignupEntity.getGst(),sellerSignupEntity.getBrief(), 
					sellerSignupEntity.getAddress(), sellerSignupEntity.getEmail(),
					sellerSignupEntity.getWebsite(), sellerSignupEntity.getContact(),allItems);
			}
		
	System.out.println(sellerSignupPojo);
		return sellerSignupPojo;
		
	}

	@Override
	public SellerSignupPojo postseller(SellerSignupPojo sellersignupPojo) {
		SellerSignupEntity sellerSignupEntity = new SellerSignupEntity(sellersignupPojo.getId(),
				sellersignupPojo.getUsername(),
				sellersignupPojo.getPassword(),
				sellersignupPojo.getCompany(),
				sellersignupPojo.getGst(),
				sellersignupPojo.getBrief(),
				sellersignupPojo.getAddress(),
				sellersignupPojo.getEmail(),
				sellersignupPojo.getWebsite(),
				sellersignupPojo.getContact(), null);
				sellerSignupDao.save(sellerSignupEntity);
			
				return sellersignupPojo;
				}
	}


