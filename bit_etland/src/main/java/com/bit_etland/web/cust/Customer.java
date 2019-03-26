package com.bit_etland.web.cust;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component
public class Customer {
	private String  customerID, customerName, password, ssn, phone,
	photo, city, address, postalcode;
}
