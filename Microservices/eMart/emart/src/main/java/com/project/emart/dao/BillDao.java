package com.project.emart.dao;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.emart.entity.BillEntity;

@Repository
public interface BillDao extends JpaRepository<BillEntity,Integer> {

	Set<BillEntity> findByBuyerId(int buyerid);
}
