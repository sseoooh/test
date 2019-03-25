package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.OrderDetailDTO;
@Repository
public interface OrderDetailMapper {
	public void insertCustomer(OrderDetailDTO ordd);
	
	public List<OrderDetailDTO> selectAllOrderDetailsList();
	public List<OrderDetailDTO> selectOrderDetails(String searchWord);
	public OrderDetailDTO selectOrderDetail(String searchWord);
	public int countOrderDetail();
	public boolean existsOrderDetail(String searchWord);
	
	public void updateOrderDetail(OrderDetailDTO ordd);
	public void deleteOrderDetail(OrderDetailDTO ordd);
}
