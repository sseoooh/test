package com.bit_etland.web.prod;




import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.emp.EmployeeMapper;


@RestController

public class ProductController {
	
	static final Logger logger = LoggerFactory.getLogger( ProductController.class);

	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired ProductMapper prodMap;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@Autowired Proxy pxy;
	
	@GetMapping("/prod/page/{page}")
	public Map<?,?> plist(			
			@PathVariable String page) {
		ISupplier s = ()-> prodMap.countProduct();
		map.clear();
		map.put("page_num", "1"); //page
		map.put("page_size", "5");
		map.put("block_size", "5");
		map.put("rowCount",  s.get());
		pxy.carryOut(map);
		IFunction i = (Object o) -> prodMap.selectProducts(pxy);
		List<?> li = (List<?>) i.apply(pxy);
		map.clear();
		map.put("li", li);
		map.put("pxy", pxy);
		System.out.println("li::::"+li);
		System.out.println("pxy::::"+pxy);
		
		return map;
	}
};

