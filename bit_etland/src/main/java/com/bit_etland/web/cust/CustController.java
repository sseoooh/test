package com.bit_etland.web.cust;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/cust")
public class CustController {
	static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired Customer cust;
	
	@PostMapping("/login")
	public @ResponseBody Customer member(@RequestBody Customer param) {
	
		System.out.println("------------커스텀진입----------------");
		System.out.println(param.toString());
		return null;
	}
	

}
