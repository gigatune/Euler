// 最小公倍数を返す関数を定義
function getLCM( x, y ){
    var base;
    var other;
    if( x < y ){
	base = y;
	other = x;
    }else{
	base = x;
	other = y;
    }

    var multiple;
    for( var time = 1 ; time <= other ; time++ ){
	multiple = base * time;
	if( ( multiple % other ) == 0 ){
	    break;
	}
    }
    return multiple;
}

function solve_5(){

    // LCM(x,y,z) = LCM( ( LCM(x,y), z ) を利用する

    var searchMax = 20;
    var multiple = 1;
    for( var i = 2; i <= searchMax ; i++ ){
	multiple = getLCM(i, multiple );
    }
    
    alert( multiple );
};


