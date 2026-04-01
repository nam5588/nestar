/*TASK-ZK:
Shunday function yozing, u har soniyada bir marta 
consolega 1 dan 5 gacha bolgan raqamlarni chop etsin 
va 5 soniyadan keyin ishini toxtatsin.
MASALAN: printNumbers()*/

function printNumbers() {
	let count = 0;

	const interval = setInterval(() => {
		count++;
		for (let i = 1; i <= 5; i++) {
			console.log(i);
		}
		console.log('');
		if (count === 5) {
			clearInterval(interval);
		}
	}, 1000);
}

printNumbers();
/*TASK ZJ:
import { forEach } from '../node_modules/iterall/index.d';
Shunday function yozing, u berilgan array ichidagi
raqamlarni qiymatini hisoblab qaytarsin.
MASALAN: reduceNestedArray([1, [1, 2, [4]]]); return 8;
Yuqoridagi misolda, array nested bo'lgan holdatda ham,
bizning function ularning yig'indisini hisoblab qaytarmoqda.

function reduceNestedArray(arr: any[]) {
	let sum = 0;
	arr.forEach((el) => {
		typeof el === 'number' ? (sum += el) : (sum += reduceNestedArray(el));
	});
	return sum;
}
console.log(reduceNestedArray([1, [1, 2, [4]]]));
*/
