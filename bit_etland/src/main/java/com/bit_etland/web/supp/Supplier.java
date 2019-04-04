package com.bit_etland.web.supp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Supplier {
	private String supplier_id,
	supplier_name,
	contact_name,
	address,
	city,
	postal_code,
	country,
	phone;
}
