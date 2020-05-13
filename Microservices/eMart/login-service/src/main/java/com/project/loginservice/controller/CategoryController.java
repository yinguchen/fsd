package com.project.loginservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.loginservice.pojo.CategoryPojo;
import com.project.loginservice.pojo.SubCategoryPojo;
import com.project.loginservice.service.CategoryService;

@RestController
@CrossOrigin
@RequestMapping("emart")
public class CategoryController {
	@Autowired
	CategoryService categoryService;

	//EndPoint to Retrieve AllItems
	@GetMapping("category/all")
	List<CategoryPojo> getAllCategorys() {

		return categoryService.getAllCategory();
	}

	//EndPoints to Retrieve Particular Item
	@GetMapping("subcategory/{categoryId}")
	List<SubCategoryPojo> getSubCategorys(@PathVariable("categoryId") Integer categoryId) {

		return categoryService.getSubCategory(categoryId);
	}

}
