package com.project.emart.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.emart.entity.BillDetailsEntity;
@Repository
public interface BillDetails extends JpaRepository<BillDetailsEntity,Integer>{

}
