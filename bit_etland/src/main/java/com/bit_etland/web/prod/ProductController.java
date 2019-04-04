package com.bit_etland.web.prod;




import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_etland.web.cate.Category;
import com.bit_etland.web.cate.CategoryMapper;
import com.bit_etland.web.cmm.IConsumer;
import com.bit_etland.web.cmm.IFunction;
import com.bit_etland.web.cmm.ISupplier;
import com.bit_etland.web.cmm.PrintService;
import com.bit_etland.web.cmm.Proxy;
import com.bit_etland.web.cmm.Users;
import com.bit_etland.web.supp.Supplier;
import com.bit_etland.web.supp.SupplierMapper;


@RestController

public class ProductController {
	
	static final Logger logger = LoggerFactory.getLogger( ProductController.class);

	@Autowired Product prod;
	@Autowired PrintService ps;
	@Autowired Users<?> user;
	@Autowired Map<String, Object> map;
	@Autowired Proxy pxy;
	@Autowired ProductMapper prodMap;
	@Autowired CategoryMapper cateMap;
	@Autowired SupplierMapper suppMap;
	@Autowired Category cate;
	@Autowired Supplier supp;
	
	@GetMapping("/prod/page/{page}")
	public Map<?,?> plist(			
			@PathVariable String page) {
		System.out.println("여기자체들어오느냐?");
		map.clear();
		map.put("page_num", "1"); //page
		map.put("page_size", "5");
		map.put("block_size", "5");
		ISupplier s = ()-> prodMap.countAllProducts();
		map.put("rowCount",  s.get());
	
		pxy.carryOut(map);
		IFunction i = (Object o) -> prodMap.selectProducts(pxy);
		List<?> li = (List<?>) i.apply(pxy);
		map.clear();
		map.put("li", li);
		map.put("pxy", pxy);
	/*	System.out.println("li::::"+li);
		System.out.println("pxy::::"+pxy);*/
		return map;
	}
	@Transactional
	@PostMapping("/prod")
	public Map<?, ?> regist(
			@RequestBody Product prod){
		List<String> li = prod.getFreebies();
		ps.accept("리스트::"+li);
		ps.accept("리스트::"+prod.toString());
		IFunction f = s -> cateMap.txCategory((String)s);
		IFunction f2 = s -> suppMap.txSupplier((String)s);
		String cateID = (String) f.apply(prod.getCategoryID());
		String suppID = (String) f2.apply(prod.getSupplierID());
		prod.setCategoryID(cateID);
		prod.setSupplierID(suppID);
		IConsumer i = o -> prodMap.insertProduct((Product)o);
		i.accept(prod);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
	@GetMapping("/showlist/{search}")
	public Map<?,?> showList(
			@PathVariable String search) {
		System.out.println("plist값::"+search);
		IFunction c = o -> prodMap.selectProducts(pxy);
		@SuppressWarnings("unchecked")
		List<Product> li= (List<Product>) c.apply(search);
		map.clear();
		map.put("li", li);
		return map;
	}
};

