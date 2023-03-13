package com.spring.resturant.controller;


import com.spring.resturant.model.Category;
import com.spring.resturant.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api")
public class CategoryController {

    private CategoryService categoryService;

    @Autowired
    public CategoryController(CategoryService categoryService)
    {this.categoryService = categoryService;
    }

    // http://localhost:8080/api/allCategories
    @GetMapping("/allCategories")
    public List<Category> getAllCategory(){
        return categoryService.allCategories();
    }
}