function dataHandling2(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);
    var ttl = input[3].split('/')
    var bulan = ttl[1]
        switch(parseInt(bulan)){
        	case 01:
        	bulan = 'Januari'
        	break;
        	case 02:
        		bulan = 'Februari'
        	break;
        	case 03:
        		bulan ='Maret'
        	break;
        	case 04:
        		bulan = 'April'
        	break;
        	case 05:
        		bulan = 'Mei'
        	break;
        	case 06:
        		bulan = 'Juni'
        	break;
        	case 07:
        		bulan = 'Juli'
        	break;
        	case 08:
        		bulan = 'Agustus'
        	break;
        	case 09:
        		bulan = 'September'
        	break;
        	case 10:
        		bulan ='Oktober'
        	break;
        	case 11:
        		bulan ='November'
        	break;
        	case 12:
        			bulan = 'Desember'
        	break;
        }
        
        console.log(bulan)
        
        var join = ttl.join('-');
        ttl.sort(function(a,b){return parseInt(a) < parseInt(b)})
        console.log(ttl)
        console.log(join);
        
        var nama = input[1].slice(0, 15)
        console.log(nama)
    return '';
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


console.log(dataHandling2(input));