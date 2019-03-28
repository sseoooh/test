package com.bit_etland.web.cust;


import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Users;

import com.bit_etland.web.emp.EmployeeMapper;


@RestController
@RequestMapping("/users")
public class CustController {
	
	static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired Customer cust;
	@Autowired PrintService ps;
	@Autowired CustomerMapper custMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	
	@PostMapping("/cust/{userid}")
	public Customer login(
						@PathVariable String userid,
						@RequestBody Customer param) {
		System.out.println("CustController탐?");
		IFunction i = (Object o) -> custMap.selectCustomer((Customer)param);
		return (Customer)i.apply(param);
	}
	
	@PostMapping("/cust")
	public Map<?, ?> join(
			@PathVariable String user,
			@RequestBody Customer param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
			return map;
	}
	
	@PutMapping("/{user}/{userid}")
	public Map<?, ?> update(		
			@PathVariable String userid,
			@RequestBody Customer param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/{user}/{userid}")
	public Map<?,?> delete(			
			@PathVariable String userid,
			@RequestBody Customer param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);;
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
};
