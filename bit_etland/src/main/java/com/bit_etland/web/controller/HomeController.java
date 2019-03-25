package com.bit_etland.web.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller

public class HomeController {
	static final Logger logger = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/")
	public String home(HttpSession session, 
				HttpServletRequest request) {
		logger.info("\n --------- Welcome {} !! ----------","Home");

		System.out.println("나오나요?");
		return "index";
	
	}

}
