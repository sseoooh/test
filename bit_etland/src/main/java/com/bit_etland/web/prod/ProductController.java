/*package com.bit_etland.web.prod;




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
public class ProductController {
	
	static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired EmployeeMapper empMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	
	@PostMapping("/cust/{userid}")
	public Product login(
						@PathVariable String userid,
						@RequestBody Product param) {
		
		System.out.println("CustController안에 login 진입:"+param);
		IFunction i = (Object o) -> prodMap.selectProducts()((Product)param);
		return (Product)i.apply(param);
	}
	
	@PostMapping("/cust")
	public Map<?, ?> join(
			@RequestBody Product param) {
		System.out.println("CustController안에 join 진입:"+param);
		IConsumer i = (Object o) -> prodMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
			return map;
	}
	
	@PutMapping("/{user}/{userid}")
	public Map<?, ?> update(		
			@PathVariable String userid,
			@RequestBody Product param) {
		System.out.println("CustController안에 update 진입:"+param);
		IConsumer i = (Object o) -> prodMap.selectProduct(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	
	@DeleteMapping("/{user}/{userid}")
	public Map<?,?> delete(			
			@PathVariable String userid,
			@RequestBody Product param) {
		System.out.println("CustController안에 delete 진입:"+param);
		IConsumer i = (Object o) -> prodMap.deleteProduct(param);;
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
};

*/