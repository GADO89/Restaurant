package com.spring.resturant.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends CategoryOrder{

    @Column(name = "price")
    private int price;
    @Column(name = "image")
    private String img;

    @Column(name = "description")
    @Lob
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_Category")
    private Category category;

}




/*import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends CategoryOrder{

    @Column(name = "price")
    private int price;
    @Column(name = "image")
    private String img;

    @Column(name = "description")
    @Lob
    private String description;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;



}*/
