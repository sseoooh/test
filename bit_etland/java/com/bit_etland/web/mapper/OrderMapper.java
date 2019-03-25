package com.bit_etland.web.mapper;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.bit_etland.web.domain.OrderDTO;
@Repository
public interface OrderMapper {
	public void insertCustomer(OrderDTO ordd);
	
	public List<OrderDTO> selectAllOrdersList();
	public List<OrderDTO> selectOrders(String searchWord);
	public OrderDTO selectOrder(String searchWord);
	public int countOrder();
	public boolean existsOrder(String searchWord);
	
	public void updateOrder(OrderDTO ordd);
	public void deleteOrder(OrderDTO ordd);
}
