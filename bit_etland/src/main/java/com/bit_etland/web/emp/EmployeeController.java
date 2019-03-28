package com.bit_etland.web.emp;

import java.util.Map;

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


@RestController
@RequestMapping("/users")
public class EmployeeController {
	
	@Autowired Employee emp;
	@Autowired PrintService ps;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	
	@PostMapping("/emp/{userid}")
	public Employee login(
						@PathVariable String userid,
						@RequestBody Employee param) {
		IFunction i = (Object o) -> empMap.selectEmployee((Employee)param);
		return (Employee)i.apply(param);
	}
	
	@PostMapping("/emp")
	public Map<?, ?> join(
			@PathVariable String user,
			@RequestBody Employee param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> empMap.insertEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
			return map;
	}
	
	@PutMapping("/emp/{userid}")
	public Map<?, ?> update(		
			@PathVariable String userid,
			@RequestBody Employee param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> empMap.updateEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/emp/{userid}")
	public Map<?,?> delete(			
			@PathVariable String userid,
			@RequestBody Employee param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> empMap.deleteEmployee(param);;
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
