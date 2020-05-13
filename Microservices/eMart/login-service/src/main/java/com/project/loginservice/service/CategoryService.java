package com.project.loginservice.service;

import java.util.List;

import com.project.loginservice.pojo.CategoryPojo;
import com.project.loginservice.pojo.SubCategoryPojo;

public interface CategoryService {

	List<CategoryPojo> getAllCategory();
	List<SubCategoryPojo> getSubCategory(Integer categoryId);

}
