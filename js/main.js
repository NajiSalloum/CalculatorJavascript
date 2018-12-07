var theTotalOperation='0';
	
		function setOperation(operation) {
			if(document.getElementById("display").value == '+' ||
			   document.getElementById("display").value == '-' ||
			   document.getElementById("display").value == '*' ||
			   document.getElementById("display").value == '/' ||
			   document.getElementById("display").value == '%' )
			{
				document.getElementById("display").value = document.getElementById("display").value;
				
			}
			else
			{
				if(operation == "+")
				{	
					operation="+"
					document.getElementById("display").value = operation;
					theTotalOperation += operation ;
				}
				else if(operation == "-")
				{
					operation="-"
					document.getElementById("display").value = operation;
					theTotalOperation += operation ;
				}
				else if(operation == "*")
				{
					operation="*"
					document.getElementById("display").value = operation;
					theTotalOperation += operation ;
				}
				else if(operation == "/")
				{
					operation="/"
					document.getElementById("display").value = operation;
					theTotalOperation += operation ;
				}
				else if(operation == "%")
				{
					operation="%"
					document.getElementById("display").value = operation;
					theTotalOperation += operation ;
				}
			}
			
			
		}
		function myFunction(x) {
			var str = document.getElementById("display").value;
			var n = str.includes(".");
			if(n == true && x == '.')
			{
				
				document.getElementById("display").value = document.getElementById("display").value;
				
			}
				
			else
			{
				if(document.getElementById("display").value =='0')
				{
					
					
						document.getElementById("display").value =x;
						theTotalOperation = x ;
				}
				else if(document.getElementById("display").value =='+')
				{
					document.getElementById("display").value = x;
						theTotalOperation += x;
				}
				else if(document.getElementById("display").value =='-')
				{
					document.getElementById("display").value = x;
						theTotalOperation += x;
				}
				else if(document.getElementById("display").value =='*')
				{
					document.getElementById("display").value = x;
						theTotalOperation += x;
				}
				else if(document.getElementById("display").value =='/')
				{
					document.getElementById("display").value = x;
						theTotalOperation += x;
				}
				else if(document.getElementById("display").value =='%')
				{
					document.getElementById("display").value = x;
						theTotalOperation += x;
				}
				
				else
				{
					document.getElementById("display").value +=x;
					theTotalOperation += x ;
				}
					
			}
			
		}
		function Clear() {
			document.getElementById("display").value = '0';
			theTotalOperation ='';
		}
		function myFunctionCalc() {
			document.getElementById("display").value = eval(theTotalOperation);
			
			
		}
		function test() {
			
			 var str = "7.7";
			var n = str.includes(".");
		
		}