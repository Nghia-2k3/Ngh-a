function prime_number(n){
	
	// tìm điều kiện sai 1
	// số nguyên tố là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó mà ko chia hết cho bất kỳ số nào khác
	// vì thế nếu truyên vào số 2 hàm trả về false là ko đúng (số 2 là số nguyên tố)
	// nên kiểm tra lại điều kiện này
    if (n < 2){
        return false;
    }
	
	
	// tìm điều kiện sai thứ 2
	// kiểm tra số truyền vào, chia lấy dư từ 2 đến number-1, nếu ko có dư đồng nghĩa có điều kiện sai
    for (let items = 2; items < n ; items++){
        if (n % items == 0){
            return false;
        }
    }
	
	// Nếu ko tìm thấy điều kiện sai thì mặc định hàm trả về true
	return true;
}


function check_perfect_number(m){
    let sum = 0;
    // dùng vòng lặp để tìm ước
    for (let k = 1; k < m ; k++){    
        // Nếu số đó chia hết cho biến k thì k là ước và cộng vào tổng 
        if (m % k == 0 ){
            sum = sum + k;
        }
    }
    // Nếu tổng của các ước bằng số đó thì trả về true
    if (sum == m){
        return true;
    }else{
        return false;
    }   
}



function main(){
    let a = parseInt(document.getElementById('tan').value);
    let array = [];
    // tìm số lớn nhất, số nhỏ nhất
    for(let i = 0; i < a ; i++){
            x = Math.floor(Math.random()*100);
            array.push(x);           
    }
    document.getElementById("ten").innerHTML = array;  
    var number = Math.max.apply(Math,array);
    var minInt = Math.min.apply(Math,array);
    document.getElementById("hello").innerHTML = `Giá trị lớn nhất trong dãy là ${number}`;
    document.getElementById("nhattan").innerHTML = `Giá trị nhỏ nhất trong dãy là ${minInt}`;
    let array_empty = [];
    for (let j = 0 ; j < array.length ; j++){

		if (prime_number(array[j])){
			// console để debug 
			console.log('Số nguyên tố : ' + array[j]);
			
			// kiem tra nêu số nguyên tố đã tồn tại rồi trong mảng array_empty thì ko phải push nữa
			let exists = false;
			for(i=0; i<array_empty.length; i++){
				if(array_empty[i] == array[j]){
					exists = true;
					break;
				}
			}
			if(!exists){
				array_empty.push(array[j]);
			}
        }
    }
    if (array_empty.length > 0){
        document.getElementById('result').innerHTML = `${array_empty} là số nguyên tố trong dãy`;
    }else{
        document.getElementById('result').innerHTML = "Không có số nguyên tố trong dãy";
    }
    let evan_number = [];
    let odd_number = []
    for (let item = 0; item < array.length ; item++){
        if (array[item] % 2 ==0){
            evan_number.push(array[item]);
        }else{
            odd_number.push(array[item]);
        }
    }
    document.getElementById('so_chan').innerHTML = `${evan_number} là số chẵn trong dãy`;
    document.getElementById('so_le').innerHTML = `${odd_number} là số lẻ trong dãy`;


    let array_one = [];
    for (let q = 0; q < array.length ; q++){
        // Kiểm tra điều kiện xem số đó có phải số hoàn hảo ko
        if (check_perfect_number(array[q])){
            // Điều kiện đúng thì duyệt phần tử trong mảng để số ko bị lặp lại\
            let kt = true;
            for (let count = 0 ; count < array_one.length ; count++){
                // Nếu số đã tồn tại trong mảng thì không cần thêm vào mảng
                if (array_one[count] == array[q]){
                    kt = false;
                    break;
                }
            }
            if (!kt == false){
                array_one.push(array[q]);
            }
        }
    }
    if (array_one.length > 0){
        document.getElementById('so_hoan_hao').innerHTML = `${array_one} là số hoàn hảo trong dãy`;
    }else{
        document.getElementById('so_hoan_hao').innerHTML = "Không có số hoàn hảo trong dãy";
    }
}