package com.nehal.theNomadicClan.MyException;

public class MyException extends Exception
{
	public MyException(String message)
	{
		super(message);
	}
	
	public MyException(String message, Throwable cause)
	{
		super(message,cause);
	}
}
