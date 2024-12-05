console.log("Code trong file ex01.js");

/**
 * var, let, const
 *
 * var (scope, khai bao lai,...)
 *
 * ECMAScript6+
 */
const username = "Hoang";
const Pi = 3.14;
/**
 * const (constant)
 * 1. const thường được dùng khai báo biến cho các giá trị không thay đổi.
 * 2. Khi khai báo với const thì phải gán luôn giá trị.
 * 3. Không gán lại được giá trị, trừ khi có phương thức hoặc cách đặc biệt.
 */

let age = 33;

age = age + 1;
console.log(age);

let email;
console.log(email);

/**
 * let
 * 1. Thường được dùng để khai báo các giá trị có thể thay đổi.
 * 2. Khi khai báo với let, không gán giá trị thì giá trị mặc định là undefined.
 * 3. Gán lại được.
 */

/**
 * let, const đều có phạm vi hoạt động là block-scope
 * let, const đều không thể khai báo lại trong cùng 1 scope
 */

/**
 * scope
 * 1. global-scope: toàn cục
 * 2. block-scope: {}
 * 3. function-scope: hoc sau.
 */

{
	{
		{
			{
				const Pi = 3.15;
				console.log(Pi);
				const productName = "Iphone 15 pro max";
				{
					{
						{
							{
								console.log(productName);
							}
						}
					}
				}
			}
			console.log(Pi);
		}
		// console.log(productName);
	}
}

// global-scope
console.log(Pi);

let className = "F8 - K12";
className = "F8 - K13";
console.log(className);
