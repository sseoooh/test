package com.bit_etland.web.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.bit_etland.web.domain.ProductDTO;
import com.bit_etland.web.proxy.Proxy;
@Service
public class ProductServiceImpl implements ProductService {

	@Override
	public void registCustomer(ProductDTO pro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<ProductDTO> bringProductList(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ProductDTO> retrieveProducts(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ProductDTO retrieveProduct(ProductDTO pro) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int countProductr(Proxy pxy) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean existsProductID(ProductDTO pro) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void modifyProduct(ProductDTO pro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeProduct(ProductDTO pro) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Map<String, Object> fileUpload(Proxy pxy) {
		// TODO Auto-generated method stub
		return null;
	}

}
