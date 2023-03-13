package com.spring.resturant.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category extends CategoryOrder {

    @Column(name = "categorylogo")
    private String logo;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private Set<Order> orders;

}


//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import net.minidev.json.annotate.JsonIgnore;
//
//import javax.persistence.Entity;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//import java.util.Set;
//
//@Data
//@NoArgsConstructor
//@Entity
//@Table(name = "category")
//public class Category extends CategoryOrder{
//
//    @JsonIgnore
//    @OneToMany(mappedBy = "category")
//   private Set<Order> orders;
//
//}

// http://localhost:4200/
//const routes: Routes=[
        // http://localhost:4200/
  //      {path: '', component:OrderItemsComponent}
    //    ];