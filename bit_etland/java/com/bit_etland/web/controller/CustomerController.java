package com.bit_etland.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.bit_etland.web.domain.CustomerDTO;
import com.bit_etland.web.service.CustomerService;

@SessionAttributes("user")//detail의 key값의 cus
@Controller
@RequestMapping("/customer")
public class CustomerController {
	static final Logger logger = LoggerFactory.getLogger(CustomerController.class);
	@Autowired CustomerDTO customer;//CustomerDTO의 인스턴트
	@Autowired CustomerService customerService;
	/*@Autowired HttpSession session;*/
	
	@RequestMapping(value="/signin", method=RequestMethod.POST)
	public String signin(@ModelAttribute CustomerDTO param,
						Model session) {
		logger.info("\n --------- MemberController {} !! ----------","signin");
		System.out.println("==============signin==============");
		customer = customerService.retrieveCustomer(param);
		if(customer != null) 
			session.addAttribute("user", customer);
		return (customer != null) ?
				"public:customer/detail.tiles"
				:
				"public:home/main.tiles";
		
		
	}
	
	@RequestMapping(value="/detail")
	public String detail(@RequestParam("customerID")String customerID,
			Model model) {
		logger.info("\n --------- MemberController {} !! ----------","detail");
		System.out.println("==============detail==============");
		customer.setCustomerID(customerID);
		customer = customerService.retrieveCustomer(customer);
		model.addAttribute("user", customer);
		return "public:customer/detail.tiles";
	}
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public String update(@ModelAttribute CustomerDTO param,
							Model session,
							RedirectAttributes red) {
		logger.info("\n --------- MemberController {} !! ----------","update");
		System.out.println("==============update==============");
		
		customerService.modifyCustomer(param);
		customer = customerService.retrieveCustomer(customer);
		session.addAttribute("user", customer);
		red.addAttribute("customerID", param.getCustomerID());
		return "redirect:/customer/detail";
			
}
}
