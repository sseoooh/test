package com.bit_etland.web.prod;

import org.springframework.stereotype.Component;



import lombok.Data;

@Data @Component
public class Product {
	private String productID, productName, supplierID, categoryID,
	unit, price, productImage;
}
