package com.project.loginservice.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.loginservice.entity.CategoryEntity;
import com.project.loginservice.entity.SubCategoryEntity;

@Repository
public interface SubCategoryDao extends JpaRepository<SubCategoryEntity,Integer>{
	List<SubCategoryEntity> findByCategoryId(CategoryEntity categoryId);
}
