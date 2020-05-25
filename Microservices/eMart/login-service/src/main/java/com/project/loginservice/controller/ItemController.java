package com.project.loginservice.controller;

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.loginservice.pojo.ItemPojo;
import com.project.loginservice.service.ItemService;

@RestController
@CrossOrigin
@RequestMapping("emart")
public class ItemController {
	@Autowired
	ItemService itemService;

	@CrossOrigin
    @PostMapping(value = "/upload")
    public String upload(@RequestParam("files") MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String filePath = "C:/FSD/2020/Final-Project-master/Angular/eMart/src/assets/img/" + fileName;
        BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(filePath));
        outputStream.write(file.getBytes());
        outputStream.flush();
        outputStream.close();

        return fileName;
    }

	@PostMapping("/additem")
	public void addItem(@RequestBody ItemPojo itemPojo) {
		itemService.addItem(itemPojo);
	}
}
