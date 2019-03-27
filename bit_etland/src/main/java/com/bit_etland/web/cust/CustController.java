package com.bit_etland.web.cust;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;


@RestController
@RequestMapping("/cust")
public class CustController {
	static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@PostMapping("/login")
	public Customer member(@RequestBody Customer param) {
		System.out.println("CustController에 진입:"+param);
		
		return (Customer)(new IFunction() {//앞에 customer object리턴
			
			@Override
			public Object apply(Object o) {
				return custMap.selectCustomer(param);
			}
		}.apply(param));
	}
}
