package com.bit_etland.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_etland.web.cmm.Proxy;

@Repository
public interface ProductMapper {

	public void insertProduct(Product prod);
	public List<Product> selectProductsList(Map<?,?> m);
	public List<?> selectProducts(Proxy pxy);
	public Product selectProduct(Product prod);
	public int countProduct(Map<?,?> m);
	public int countAllProducts();
	public List<?> retrieveProducts(Proxy pxy);
	public void updateProduct(Product prod);
	public Map<String, Object> selectProfile(Map<?,?> m);
	public void deleteProduct(Product prod);
	public Map<String, Object> selectPhone(Map<?,?> m);
	public List<?> searchProducts(Proxy pxy);
	public int countSearchProducts();
}
