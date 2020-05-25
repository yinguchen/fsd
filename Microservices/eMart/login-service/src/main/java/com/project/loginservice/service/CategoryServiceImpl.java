package com.project.loginservice.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.loginservice.dao.CategoryDao;
import com.project.loginservice.dao.SubCategoryDao;
import com.project.loginservice.entity.CategoryEntity;
import com.project.loginservice.entity.SubCategoryEntity;
import com.project.loginservice.pojo.CategoryPojo;
import com.project.loginservice.pojo.SubCategoryPojo;

@Service
public class CategoryServiceImpl implements CategoryService{
	private final static Logger LOG = LoggerFactory.getLogger(CategoryServiceImpl.class);
	@Autowired
	CategoryDao categoryDao;
	@Autowired
	SubCategoryDao subCategoryDao;

	@Override
	public List<CategoryPojo> getAllCategory() {
		// TODO Auto-generated method stub
		LOG.info("Enterd getAllCategory()");
		List<CategoryPojo> allCategoryPojo = new ArrayList<CategoryPojo>();
		Iterable<CategoryEntity> allCategoryEntity = categoryDao.findAll();
		Iterator<CategoryEntity> itr = allCategoryEntity.iterator();

		while (itr.hasNext()){
			CategoryEntity categoryEntity = (CategoryEntity) itr.next();
			CategoryPojo categoryPojo = new CategoryPojo(categoryEntity.getId(), categoryEntity.getName(),
					categoryEntity.getBrief());
			allCategoryPojo.add(categoryPojo);
		}

		return allCategoryPojo;
	}

	@Override
	public List<SubCategoryPojo> getSubCategory(Integer categoryId) {
		// TODO Auto-generated method stub
		LOG.info("Enterd getSubCategory()");
		List<SubCategoryPojo> allSubCategoryPojo = new ArrayList<SubCategoryPojo>();
		CategoryEntity category = new CategoryEntity();
		category.setId(categoryId.intValue());
		Iterable<SubCategoryEntity> allSubCategoryEntity = subCategoryDao.findByCategoryId(category);
		Iterator<SubCategoryEntity> itr = allSubCategoryEntity.iterator();
		while (itr.hasNext()){
			SubCategoryEntity subCategoryEntity = (SubCategoryEntity) itr.next();
			SubCategoryPojo subCategoryPojo = new SubCategoryPojo();
			subCategoryPojo.setId(subCategoryEntity.getId());
			subCategoryPojo.setName(subCategoryEntity.getName());
			allSubCategoryPojo.add(subCategoryPojo);
		}

		return allSubCategoryPojo;
	}

}
