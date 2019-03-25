package com.bit_etland.web.service;

import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class SequenceServiceImpl implements SequenceService{
	

	@Override
	public String arithmeticSequence(Map<?, ?> param) {
		System.out.println("----------SequenceServiceImpl안에서 arithmeticSequence탐----------?");
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff"),
				result = "";
		int A=Integer.parseInt(start); //첫번째
		int E=Integer.parseInt(end); // 마지막번째
		int D=Integer.parseInt(diff); // 공차
		int S=A;//항의 순서
		int N=2;
		int AN=0;
		while(true) {
			AN = A+(N-1) * D;
			S=S+AN;
			N=N+1;
			if(N > E) break;
		}

		
		result = String.valueOf(S);
		return result;
	}

	@Override
	public String geometricSequence(Map<?, ?> param) {
		System.out.println("----------SequenceServiceImpl안에서 geometricSequence탐----------?");
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff"),
				result = "";
		int R=Integer.parseInt(diff);//공비
		int A=Integer.parseInt(start);//시작
		int S=Integer.parseInt(end);//마지막
		int N=2;
		while(true) {
			A = A * R;
			S = S + A;
			N++;
			if(N > 100) {
				break;
			}
		}
		result = String.valueOf(S);
		return result;
	}

	@Override
	public String factorialSequence(Map<?, ?> param) {
		System.out.println("----------SequenceServiceImpl안에서 factorialSequence탐----------?");
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff"),
				result = "";
		int S = Integer.parseInt(diff);
		int F = Integer.parseInt(start);
		int N = Integer.parseInt(end);
		for(N = 2; N < 11; N++) {
			F = F * N;
			S += F;
		}
		result = String.valueOf(S);
		return result;
		
	}

	@Override
	public String fibonacciSequence(Map<?, ?> param) {
		System.out.println("----------SequenceServiceImpl안에서 fibonacciSequence탐----------?");
		String start = (String) param.get("start"),
				end = (String) param.get("end"),
				diff = (String) param.get("diff"),
				result = "";
		int S = Integer.parseInt(diff);
		int F = Integer.parseInt(start);
		int N = Integer.parseInt(end);
		for(N = 2; N < 11; N++) {
			F = F * N;
			S += F;
		}
		result = String.valueOf(S);
		return result;
	}
}