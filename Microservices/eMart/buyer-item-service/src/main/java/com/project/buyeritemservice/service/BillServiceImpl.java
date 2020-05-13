package com.project.buyeritemservice.service;

import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.buyeritemservice.dao.BillDao;
import com.project.buyeritemservice.dao.BillDetails;
import com.project.buyeritemservice.entity.BillDetailsEntity;
import com.project.buyeritemservice.entity.BillEntity;
import com.project.buyeritemservice.entity.BuyerSignupEntity;
import com.project.buyeritemservice.entity.CategoryEntity;
import com.project.buyeritemservice.entity.ItemEntity;
import com.project.buyeritemservice.entity.SellerSignupEntity;
import com.project.buyeritemservice.entity.SubCategoryEntity;
import com.project.buyeritemservice.pojo.BillPojo;
import com.project.buyeritemservice.pojo.BillerDetailsPojo;
import com.project.buyeritemservice.pojo.BuyerSignupPojo;
import com.project.buyeritemservice.pojo.CategoryPojo;
import com.project.buyeritemservice.pojo.ItemPojo;
import com.project.buyeritemservice.pojo.SellerSignupPojo;
import com.project.buyeritemservice.pojo.SubCategoryPojo;
import com.project.buyeritemservice.service.BillServiceImpl;

@Service
public class BillServiceImpl implements BillService {
	private final static Logger LOG = LoggerFactory.getLogger(BillServiceImpl.class);

	@Autowired
	BillDao billDao;
	@Autowired
	BillDetails billDetailsDao;

	// Implementing addBill function
	@Override
	public BillPojo addBill(BillPojo billPojo) {
		LOG.info("Enterd addBill()");
		BuyerSignupPojo buyerPojo = billPojo.getBuyerId();
		BuyerSignupEntity buyerEntity = new BuyerSignupEntity(buyerPojo.getId(), buyerPojo.getUsername(),
				buyerPojo.getPassword(), buyerPojo.getEmail(), buyerPojo.getMobile(), buyerPojo.getDate(), null);

		BillEntity billEntity = new BillEntity();
		billEntity.setId(0);
		billEntity.setAmount(billPojo.getAmount());
		billEntity.setRemarks(billPojo.getRemarks());
		billEntity.setType(billPojo.getType());
		billEntity.setDate(billPojo.getDate());
		billEntity.setBuyer(buyerEntity);

		billEntity = billDao.saveAndFlush(billEntity);
		billPojo.setId(billEntity.getId());

		BillEntity setBillEntity = billDao.findById(billEntity.getId()).get();

		Set<BillerDetailsPojo> allBillDetailsPojo = billPojo.getAllBillDetails();
		for (BillerDetailsPojo billDetailsPojo : allBillDetailsPojo) {
			ItemPojo itemPojo = billDetailsPojo.getItemId();
			SubCategoryPojo subcategoryPojo = itemPojo.getSubCategoryId();
			CategoryPojo categoryPojo = subcategoryPojo.getCategoryId();
			SellerSignupPojo sellerPojo = itemPojo.getSeller_id();
			SellerSignupEntity sellerSignupEntity = new SellerSignupEntity(sellerPojo.getId(), sellerPojo.getUsername(),
					sellerPojo.getPassword(), sellerPojo.getCompany(), sellerPojo.getGst(), sellerPojo.getBrief(),
					sellerPojo.getAddress(), sellerPojo.getEmail(), sellerPojo.getWebsite(), sellerPojo.getContact());
			CategoryEntity categoryEntity = new CategoryEntity(categoryPojo.getId(), categoryPojo.getName(),
					categoryPojo.getBrief());
			SubCategoryEntity subCategoryEntity = new SubCategoryEntity(subcategoryPojo.getId(),
					subcategoryPojo.getName(), categoryEntity, subcategoryPojo.getBrief(),
					subcategoryPojo.getGstPercent());

			ItemEntity itemEntity = new ItemEntity(itemPojo.getId(), itemPojo.getName(), subCategoryEntity,
					itemPojo.getPrice(), itemPojo.getDescription(), itemPojo.getStock(), itemPojo.getRemarks(),
					itemPojo.getImage(), sellerSignupEntity);
			BillDetailsEntity billDetailsEntity = new BillDetailsEntity(billDetailsPojo.getId(), setBillEntity,
					itemEntity);

			billDetailsDao.save(billDetailsEntity);

		}
		LOG.info("Exited addBill()");

		return billPojo;
	}

	@Override
	public Set<BillPojo> getBill(int buyerId) {

		Set<BillEntity> allBills = billDao.findByBuyerId(buyerId);
		Set<BillPojo> allBillPojo = new HashSet<BillPojo>();
		if (allBills != null) {

			for (BillEntity billEntity : allBills) {
				Set<BillerDetailsPojo> allBillDetailsPojo = new HashSet<BillerDetailsPojo>();
				Set<BillDetailsEntity> allBillDetailsEntity = billEntity.getAllBillDetails();
				for (BillDetailsEntity billDetailsEntity : allBillDetailsEntity) {
					ItemEntity itemEntity = billDetailsEntity.getItem();
					SubCategoryEntity subCategoryEntity = itemEntity.getSubCategoryId();
					CategoryEntity categoryEntity = subCategoryEntity.getCategoryId();
					SellerSignupEntity sellerSignupEntity = itemEntity.getSellerId();
					SellerSignupPojo sellersignupPojo = new SellerSignupPojo(sellerSignupEntity.getId(),
							sellerSignupEntity.getUsername(), sellerSignupEntity.getPassword(),
							sellerSignupEntity.getCompany(), sellerSignupEntity.getBrief(), sellerSignupEntity.getGst(),
							sellerSignupEntity.getAddress(), sellerSignupEntity.getEmail(),
							sellerSignupEntity.getWebsite(), sellerSignupEntity.getContact());

					CategoryPojo categoryPojo = new CategoryPojo(categoryEntity.getId(), categoryEntity.getName(),
							categoryEntity.getBrief());
					SubCategoryPojo subCategoryPojo = new SubCategoryPojo(subCategoryEntity.getId(),
							subCategoryEntity.getName(), categoryPojo, subCategoryEntity.getBrief(),
							subCategoryEntity.getGstPercent());

					ItemPojo itemPojo = new ItemPojo(itemEntity.getId(), itemEntity.getName(), subCategoryPojo,
							itemEntity.getPrice(), itemEntity.getDescription(), itemEntity.getStock(),
							itemEntity.getRemarks(), itemEntity.getImage(), sellersignupPojo);
					BillerDetailsPojo billDetailsPojo = new BillerDetailsPojo(billDetailsEntity.getId(), null,
							itemPojo);
					allBillDetailsPojo.add(billDetailsPojo);
				}
				BillPojo billPojo = new BillPojo(billEntity.getId(), null, billEntity.getType(), billEntity.getDate(),
						billEntity.getRemarks(), billEntity.getAmount(), allBillDetailsPojo);
				allBillPojo.add(billPojo);
			}
		}

		return allBillPojo;
	}
}
