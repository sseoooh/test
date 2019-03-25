package com.bit_etland.web.controller;


import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bit_etland.web.service.SequenceService;


@Controller
@RequestMapping("/algo")

public class AlgoController {
	static final Logger logger = LoggerFactory.getLogger(AlgoController.class);
	@Autowired SequenceService seqService;
	@Autowired Map<String, Object> map;
	@RequestMapping(value="/seq/{kind}", method=RequestMethod.POST)
	@ResponseBody//값을던질때
	public Map<String, Object> sequence(
			@PathVariable String kind,
			@RequestBody Map<String, Object> param) {//값을받을때
		map = new HashMap<String, Object>();
		System.out.println("AlgoController안에 sequence탐");
		System.out.println("AlgoController안에서 kind의값"+kind);
		String start =(String) param.get("start");
		String end=(String) param.get("end");
		String diff = (String) param.get("diff");
		map.put("start", start);
		map.put("end", end);
		map.put("diff", diff);
		String result = "";
		switch(kind) {
		case "ari":
			System.out.println("AlgoController안에 kind가 ari탐");
				result = seqService.arithmeticSequence(map);
		break;
		case "geo":
			System.out.println("AlgoController안에 kind가 geo탐");
				result = seqService.geometricSequence(map);
		break;
		case "fac":
			System.out.println("AlgoController안에 kind가 fac탐");
				result = seqService.factorialSequence(map);
		break;
		case "fibo":
			System.out.println("AlgoController안에 kind가 fibo탐");
				result = seqService.fibonacciSequence(map);
		break;
		}
		map.put("result", result);
		return map;
	}
}



