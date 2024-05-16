

async function atualiza() {
    let gData = document.forms["formulario"]["data"].value;
    let gParametro = document.forms["formulario"]["parametro"].value;
    let gResolucao = document.forms["formulario"]["resolucao"].value;
    let gHoraInicio = document.forms["formulario"]["horainicio"].value;
    let gHoraFinal = document.forms["formulario"]["horafinal"].value;

    
	let dataTotal = await fetch('http://diastorres.com:8080/dados', {mode: 'no-cors'});
	
    if (dataTotal.type == 'opaque'){
        console.log("Opaque");
        dataTotal = await fetch('http://45.93.100.30:8080/dados', {mode: 'no-cors'});
    }
    if (dataTotal.type == 'opaque'){
        console.log("Opaque");
        dataTotal = await fetch('http://kedes.com.br:8080/dados', {mode: 'no-cors'});
    }
    if (dataTotal.type == 'opaque'){
        console.log("Opaque");

            dataTotal = [{"id":16,"pulseiraId":null,"pacienteId":2,"ax":1,"ay":2,"az":3,"gx":4,"gy":5,"gz":6,"freq":7,"oxi":8,"temp":9,"dataHora":"16:48:23 21/04/2024"},
                {"id":498,"pulseiraId":null,"pacienteId":2,"ax":-11068,"ay":-8504,"az":-7008,"gx":20,"gy":-314,"gz":280,"freq":0,"oxi":0,"temp":28,"dataHora":"16:08:32 13/05/2024"},
                {"id":499,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8660,"az":-7004,"gx":14,"gy":-325,"gz":279,"freq":0,"oxi":0,"temp":28,"dataHora":"16:08:45 13/05/2024"},
                {"id":500,"pulseiraId":null,"pacienteId":2,"ax":-11116,"ay":-8620,"az":-6924,"gx":9,"gy":-305,"gz":298,"freq":0,"oxi":0,"temp":28,"dataHora":"16:08:58 13/05/2024"},
                {"id":501,"pulseiraId":null,"pacienteId":2,"ax":-11276,"ay":-8608,"az":-7024,"gx":-36,"gy":-325,"gz":279,"freq":0,"oxi":0,"temp":28,"dataHora":"16:09:10 13/05/2024"},
                {"id":502,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8632,"az":-6988,"gx":-7,"gy":-335,"gz":271,"freq":0,"oxi":0,"temp":28,"dataHora":"16:09:23 13/05/2024"},
                {"id":503,"pulseiraId":null,"pacienteId":2,"ax":-11084,"ay":-8604,"az":-6924,"gx":22,"gy":-317,"gz":229,"freq":0,"oxi":0,"temp":28,"dataHora":"16:09:36 13/05/2024"},
                {"id":504,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8584,"az":-6884,"gx":137,"gy":-275,"gz":188,"freq":0,"oxi":0,"temp":28,"dataHora":"16:09:48 13/05/2024"},
                {"id":505,"pulseiraId":null,"pacienteId":2,"ax":-11172,"ay":-8580,"az":-7000,"gx":5,"gy":-319,"gz":314,"freq":0,"oxi":0,"temp":28,"dataHora":"16:10:01 13/05/2024"},
                {"id":506,"pulseiraId":null,"pacienteId":2,"ax":-11176,"ay":-8568,"az":-7004,"gx":10,"gy":-305,"gz":271,"freq":0,"oxi":0,"temp":28,"dataHora":"16:10:14 13/05/2024"},
                {"id":507,"pulseiraId":null,"pacienteId":2,"ax":-11188,"ay":-8468,"az":-6940,"gx":44,"gy":-304,"gz":290,"freq":0,"oxi":0,"temp":28,"dataHora":"16:10:27 13/05/2024"},
                {"id":508,"pulseiraId":null,"pacienteId":2,"ax":-11124,"ay":-8600,"az":-6840,"gx":57,"gy":-308,"gz":253,"freq":0,"oxi":0,"temp":28,"dataHora":"16:10:39 13/05/2024"},
                {"id":509,"pulseiraId":null,"pacienteId":2,"ax":-11108,"ay":-8600,"az":-6804,"gx":33,"gy":-331,"gz":301,"freq":0,"oxi":0,"temp":28,"dataHora":"16:10:52 13/05/2024"},
                {"id":510,"pulseiraId":null,"pacienteId":2,"ax":-11272,"ay":-8444,"az":-6984,"gx":23,"gy":-328,"gz":302,"freq":0,"oxi":0,"temp":28,"dataHora":"16:11:05 13/05/2024"},
                {"id":511,"pulseiraId":null,"pacienteId":2,"ax":-11088,"ay":-8432,"az":-7080,"gx":0,"gy":-325,"gz":331,"freq":0,"oxi":0,"temp":28,"dataHora":"16:11:17 13/05/2024"},
                {"id":512,"pulseiraId":null,"pacienteId":2,"ax":-11160,"ay":-8428,"az":-6952,"gx":57,"gy":-301,"gz":262,"freq":0,"oxi":0,"temp":28,"dataHora":"16:11:30 13/05/2024"},
                {"id":513,"pulseiraId":null,"pacienteId":2,"ax":-11036,"ay":-8480,"az":-7144,"gx":-14,"gy":-312,"gz":331,"freq":0,"oxi":0,"temp":28,"dataHora":"16:11:43 13/05/2024"},
                {"id":514,"pulseiraId":null,"pacienteId":2,"ax":-11204,"ay":-8472,"az":-7076,"gx":49,"gy":-304,"gz":274,"freq":0,"oxi":0,"temp":28,"dataHora":"16:11:55 13/05/2024"},
                {"id":515,"pulseiraId":null,"pacienteId":2,"ax":-11160,"ay":-8520,"az":-7064,"gx":5,"gy":-299,"gz":296,"freq":0,"oxi":0,"temp":28,"dataHora":"16:12:08 13/05/2024"},
                {"id":516,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8596,"az":-6892,"gx":2,"gy":-304,"gz":306,"freq":0,"oxi":0,"temp":28,"dataHora":"16:12:21 13/05/2024"},
                {"id":517,"pulseiraId":null,"pacienteId":2,"ax":-11180,"ay":-8556,"az":-6940,"gx":6,"gy":-325,"gz":282,"freq":0,"oxi":0,"temp":28,"dataHora":"16:12:34 13/05/2024"},
                {"id":518,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8480,"az":-7016,"gx":27,"gy":-330,"gz":325,"freq":0,"oxi":0,"temp":28,"dataHora":"16:12:46 13/05/2024"},
                {"id":519,"pulseiraId":null,"pacienteId":2,"ax":-11124,"ay":-8500,"az":-6924,"gx":66,"gy":-326,"gz":288,"freq":0,"oxi":0,"temp":28,"dataHora":"16:12:59 13/05/2024"},
                {"id":520,"pulseiraId":null,"pacienteId":2,"ax":-11224,"ay":-8576,"az":-6976,"gx":62,"gy":-324,"gz":283,"freq":0,"oxi":0,"temp":28,"dataHora":"16:13:12 13/05/2024"},
                {"id":521,"pulseiraId":null,"pacienteId":2,"ax":-11152,"ay":-8528,"az":-6904,"gx":43,"gy":-327,"gz":277,"freq":0,"oxi":0,"temp":28,"dataHora":"16:13:24 13/05/2024"},
                {"id":522,"pulseiraId":null,"pacienteId":2,"ax":-11192,"ay":-8460,"az":-6840,"gx":11,"gy":-329,"gz":262,"freq":0,"oxi":0,"temp":28,"dataHora":"16:13:37 13/05/2024"},
                {"id":523,"pulseiraId":null,"pacienteId":2,"ax":-11156,"ay":-8468,"az":-7108,"gx":9,"gy":-293,"gz":256,"freq":0,"oxi":0,"temp":28,"dataHora":"16:13:50 13/05/2024"},
                {"id":524,"pulseiraId":null,"pacienteId":2,"ax":-11176,"ay":-8496,"az":-7092,"gx":17,"gy":-316,"gz":276,"freq":0,"oxi":0,"temp":28,"dataHora":"16:14:03 13/05/2024"},
                {"id":525,"pulseiraId":null,"pacienteId":2,"ax":-11108,"ay":-8484,"az":-6948,"gx":-9,"gy":-316,"gz":306,"freq":0,"oxi":0,"temp":28,"dataHora":"16:14:15 13/05/2024"},
                {"id":526,"pulseiraId":null,"pacienteId":2,"ax":-10968,"ay":-8504,"az":-6960,"gx":78,"gy":-319,"gz":284,"freq":0,"oxi":0,"temp":28,"dataHora":"16:14:28 13/05/2024"},
                {"id":527,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8484,"az":-7028,"gx":10,"gy":-346,"gz":281,"freq":0,"oxi":0,"temp":28,"dataHora":"16:14:41 13/05/2024"},
                {"id":528,"pulseiraId":null,"pacienteId":2,"ax":-11036,"ay":-8548,"az":-7016,"gx":20,"gy":-309,"gz":297,"freq":0,"oxi":0,"temp":28,"dataHora":"16:14:53 13/05/2024"},
                {"id":529,"pulseiraId":null,"pacienteId":2,"ax":-11080,"ay":-8536,"az":-7008,"gx":17,"gy":-333,"gz":278,"freq":0,"oxi":0,"temp":28,"dataHora":"16:15:06 13/05/2024"},
                {"id":530,"pulseiraId":null,"pacienteId":2,"ax":-11076,"ay":-8596,"az":-7104,"gx":50,"gy":-320,"gz":245,"freq":0,"oxi":0,"temp":28,"dataHora":"16:15:19 13/05/2024"},
                {"id":531,"pulseiraId":null,"pacienteId":2,"ax":-11068,"ay":-8604,"az":-6940,"gx":24,"gy":-311,"gz":268,"freq":0,"oxi":0,"temp":28,"dataHora":"16:15:35 13/05/2024"},
                {"id":532,"pulseiraId":null,"pacienteId":2,"ax":-11116,"ay":-8616,"az":-6924,"gx":19,"gy":-351,"gz":297,"freq":0,"oxi":0,"temp":28,"dataHora":"16:15:49 13/05/2024"},
                {"id":533,"pulseiraId":null,"pacienteId":2,"ax":-11092,"ay":-8560,"az":-7040,"gx":-5,"gy":-330,"gz":308,"freq":0,"oxi":0,"temp":28,"dataHora":"16:16:02 13/05/2024"},
                {"id":534,"pulseiraId":null,"pacienteId":2,"ax":-11164,"ay":-8508,"az":-6940,"gx":24,"gy":-314,"gz":275,"freq":0,"oxi":0,"temp":28,"dataHora":"16:16:14 13/05/2024"},
                {"id":535,"pulseiraId":null,"pacienteId":2,"ax":-11128,"ay":-8472,"az":-7048,"gx":1,"gy":-311,"gz":304,"freq":0,"oxi":0,"temp":28,"dataHora":"16:16:27 13/05/2024"},
                {"id":536,"pulseiraId":null,"pacienteId":2,"ax":-11080,"ay":-8556,"az":-7092,"gx":35,"gy":-319,"gz":291,"freq":0,"oxi":0,"temp":28,"dataHora":"16:16:40 13/05/2024"},
                {"id":537,"pulseiraId":null,"pacienteId":2,"ax":-11076,"ay":-8624,"az":-6932,"gx":7,"gy":-315,"gz":297,"freq":0,"oxi":0,"temp":28,"dataHora":"16:16:52 13/05/2024"},
                {"id":538,"pulseiraId":null,"pacienteId":2,"ax":-11116,"ay":-8600,"az":-6972,"gx":22,"gy":-360,"gz":277,"freq":0,"oxi":0,"temp":28,"dataHora":"16:17:05 13/05/2024"},
                {"id":539,"pulseiraId":null,"pacienteId":2,"ax":-11148,"ay":-8564,"az":-6964,"gx":-23,"gy":-314,"gz":259,"freq":0,"oxi":0,"temp":28,"dataHora":"16:17:18 13/05/2024"},
                {"id":540,"pulseiraId":null,"pacienteId":2,"ax":-11256,"ay":-8396,"az":-7116,"gx":118,"gy":-288,"gz":228,"freq":0,"oxi":0,"temp":28,"dataHora":"16:17:31 13/05/2024"},
                {"id":541,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8460,"az":-7060,"gx":33,"gy":-311,"gz":269,"freq":0,"oxi":0,"temp":28,"dataHora":"16:17:43 13/05/2024"},
                {"id":542,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8464,"az":-7092,"gx":74,"gy":-317,"gz":223,"freq":0,"oxi":0,"temp":28,"dataHora":"16:17:56 13/05/2024"},
                {"id":543,"pulseiraId":null,"pacienteId":2,"ax":-11100,"ay":-8476,"az":-6924,"gx":16,"gy":-304,"gz":299,"freq":0,"oxi":0,"temp":28,"dataHora":"16:18:09 13/05/2024"},
                {"id":544,"pulseiraId":null,"pacienteId":2,"ax":-11280,"ay":-8504,"az":-6960,"gx":84,"gy":-307,"gz":240,"freq":0,"oxi":0,"temp":28,"dataHora":"16:18:22 13/05/2024"},
                {"id":545,"pulseiraId":null,"pacienteId":2,"ax":-11184,"ay":-8448,"az":-7052,"gx":-3,"gy":-318,"gz":287,"freq":0,"oxi":0,"temp":28,"dataHora":"16:18:34 13/05/2024"},
                {"id":546,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8416,"az":-7008,"gx":7,"gy":-313,"gz":269,"freq":0,"oxi":0,"temp":28,"dataHora":"16:18:47 13/05/2024"},
                {"id":547,"pulseiraId":null,"pacienteId":2,"ax":-11276,"ay":-8448,"az":-6932,"gx":83,"gy":-305,"gz":225,"freq":0,"oxi":0,"temp":28,"dataHora":"16:19:00 13/05/2024"},
                {"id":548,"pulseiraId":null,"pacienteId":2,"ax":-11208,"ay":-8536,"az":-7072,"gx":37,"gy":-338,"gz":274,"freq":0,"oxi":0,"temp":28,"dataHora":"16:19:12 13/05/2024"},
                {"id":549,"pulseiraId":null,"pacienteId":2,"ax":-11240,"ay":-8508,"az":-6940,"gx":83,"gy":-298,"gz":257,"freq":0,"oxi":0,"temp":28,"dataHora":"16:19:25 13/05/2024"},
                {"id":550,"pulseiraId":null,"pacienteId":2,"ax":-11224,"ay":-8400,"az":-7008,"gx":7,"gy":-333,"gz":306,"freq":0,"oxi":0,"temp":28,"dataHora":"16:19:38 13/05/2024"},
                {"id":551,"pulseiraId":null,"pacienteId":2,"ax":-11208,"ay":-8512,"az":-7024,"gx":45,"gy":-301,"gz":291,"freq":0,"oxi":0,"temp":28,"dataHora":"16:19:51 13/05/2024"},
                {"id":552,"pulseiraId":null,"pacienteId":2,"ax":-11172,"ay":-8432,"az":-7036,"gx":46,"gy":-287,"gz":268,"freq":0,"oxi":0,"temp":28,"dataHora":"16:20:04 13/05/2024"},
                {"id":553,"pulseiraId":null,"pacienteId":2,"ax":-11152,"ay":-8544,"az":-6956,"gx":27,"gy":-307,"gz":292,"freq":0,"oxi":0,"temp":28,"dataHora":"16:20:17 13/05/2024"},
                {"id":554,"pulseiraId":null,"pacienteId":2,"ax":-11136,"ay":-8480,"az":-7000,"gx":30,"gy":-300,"gz":263,"freq":0,"oxi":0,"temp":28,"dataHora":"16:20:29 13/05/2024"},
                {"id":555,"pulseiraId":null,"pacienteId":2,"ax":-11200,"ay":-8416,"az":-6968,"gx":58,"gy":-282,"gz":243,"freq":0,"oxi":0,"temp":28,"dataHora":"16:20:42 13/05/2024"},
                {"id":556,"pulseiraId":null,"pacienteId":2,"ax":-11172,"ay":-8428,"az":-6924,"gx":5,"gy":-329,"gz":273,"freq":0,"oxi":0,"temp":28,"dataHora":"16:20:55 13/05/2024"},
                {"id":557,"pulseiraId":null,"pacienteId":2,"ax":-11176,"ay":-8492,"az":-7008,"gx":20,"gy":-308,"gz":263,"freq":0,"oxi":0,"temp":28,"dataHora":"16:21:07 13/05/2024"},
                {"id":558,"pulseiraId":null,"pacienteId":2,"ax":-11240,"ay":-8492,"az":-6968,"gx":35,"gy":-332,"gz":260,"freq":0,"oxi":0,"temp":28,"dataHora":"16:21:21 13/05/2024"},
                {"id":559,"pulseiraId":null,"pacienteId":2,"ax":-11240,"ay":-8568,"az":-7132,"gx":27,"gy":-306,"gz":275,"freq":0,"oxi":0,"temp":28,"dataHora":"16:21:34 13/05/2024"},
                {"id":560,"pulseiraId":null,"pacienteId":2,"ax":-11220,"ay":-8504,"az":-7000,"gx":11,"gy":-332,"gz":266,"freq":0,"oxi":0,"temp":28,"dataHora":"16:21:46 13/05/2024"},
                {"id":561,"pulseiraId":null,"pacienteId":2,"ax":-11164,"ay":-8480,"az":-6944,"gx":59,"gy":-317,"gz":258,"freq":0,"oxi":0,"temp":28,"dataHora":"16:21:59 13/05/2024"},
                {"id":562,"pulseiraId":null,"pacienteId":2,"ax":-11196,"ay":-8424,"az":-7076,"gx":68,"gy":-312,"gz":255,"freq":0,"oxi":0,"temp":28,"dataHora":"16:22:12 13/05/2024"},
                {"id":563,"pulseiraId":null,"pacienteId":2,"ax":-11172,"ay":-8356,"az":-7060,"gx":36,"gy":-319,"gz":306,"freq":0,"oxi":0,"temp":28,"dataHora":"16:22:25 13/05/2024"},
                {"id":564,"pulseiraId":null,"pacienteId":2,"ax":-11160,"ay":-8556,"az":-6956,"gx":-9,"gy":-341,"gz":312,"freq":0,"oxi":0,"temp":28,"dataHora":"16:22:37 13/05/2024"},
                {"id":565,"pulseiraId":null,"pacienteId":2,"ax":-11212,"ay":-8460,"az":-6924,"gx":12,"gy":-320,"gz":297,"freq":0,"oxi":0,"temp":28,"dataHora":"16:22:50 13/05/2024"},
                {"id":566,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8364,"az":-7052,"gx":147,"gy":-268,"gz":250,"freq":0,"oxi":0,"temp":28,"dataHora":"16:23:03 13/05/2024"},
                {"id":567,"pulseiraId":null,"pacienteId":2,"ax":-11220,"ay":-8480,"az":-6920,"gx":-17,"gy":-310,"gz":293,"freq":0,"oxi":0,"temp":28,"dataHora":"16:23:16 13/05/2024"},
                {"id":568,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8524,"az":-6940,"gx":26,"gy":-322,"gz":284,"freq":0,"oxi":0,"temp":28,"dataHora":"16:23:29 13/05/2024"},
                {"id":569,"pulseiraId":null,"pacienteId":2,"ax":-11184,"ay":-8392,"az":-6920,"gx":42,"gy":-306,"gz":282,"freq":0,"oxi":0,"temp":28,"dataHora":"16:23:42 13/05/2024"},
                {"id":570,"pulseiraId":null,"pacienteId":2,"ax":-11112,"ay":-8396,"az":-7020,"gx":68,"gy":-272,"gz":257,"freq":0,"oxi":0,"temp":28,"dataHora":"16:23:54 13/05/2024"},
                {"id":571,"pulseiraId":null,"pacienteId":2,"ax":-11124,"ay":-8372,"az":-6900,"gx":45,"gy":-305,"gz":304,"freq":0,"oxi":0,"temp":28,"dataHora":"16:24:07 13/05/2024"},
                {"id":572,"pulseiraId":null,"pacienteId":2,"ax":-11132,"ay":-8400,"az":-7096,"gx":-16,"gy":-300,"gz":300,"freq":0,"oxi":0,"temp":28,"dataHora":"16:24:20 13/05/2024"},
                {"id":573,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8492,"az":-6992,"gx":-11,"gy":-326,"gz":302,"freq":0,"oxi":0,"temp":28,"dataHora":"16:24:32 13/05/2024"},
                {"id":574,"pulseiraId":null,"pacienteId":2,"ax":-11240,"ay":-8460,"az":-7040,"gx":-1,"gy":-320,"gz":283,"freq":0,"oxi":0,"temp":28,"dataHora":"16:24:45 13/05/2024"},
                {"id":575,"pulseiraId":null,"pacienteId":2,"ax":-11164,"ay":-8480,"az":-7000,"gx":64,"gy":-293,"gz":242,"freq":0,"oxi":0,"temp":28,"dataHora":"16:24:58 13/05/2024"},
                {"id":576,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8508,"az":-7072,"gx":-3,"gy":-324,"gz":272,"freq":0,"oxi":0,"temp":28,"dataHora":"16:25:10 13/05/2024"},
                {"id":577,"pulseiraId":null,"pacienteId":2,"ax":-11240,"ay":-8452,"az":-6800,"gx":10,"gy":-338,"gz":292,"freq":0,"oxi":0,"temp":28,"dataHora":"16:25:23 13/05/2024"},
                {"id":578,"pulseiraId":null,"pacienteId":2,"ax":-11176,"ay":-8504,"az":-6944,"gx":14,"gy":-284,"gz":268,"freq":0,"oxi":0,"temp":28,"dataHora":"16:25:36 13/05/2024"},
                {"id":579,"pulseiraId":null,"pacienteId":2,"ax":-11200,"ay":-8444,"az":-6928,"gx":-19,"gy":-341,"gz":299,"freq":0,"oxi":0,"temp":28,"dataHora":"16:25:49 13/05/2024"},
                {"id":580,"pulseiraId":null,"pacienteId":2,"ax":-11164,"ay":-8548,"az":-6896,"gx":66,"gy":-287,"gz":277,"freq":0,"oxi":0,"temp":28,"dataHora":"16:26:01 13/05/2024"},
                {"id":581,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8440,"az":-6904,"gx":-19,"gy":-335,"gz":318,"freq":0,"oxi":0,"temp":28,"dataHora":"16:26:14 13/05/2024"},
                {"id":582,"pulseiraId":null,"pacienteId":2,"ax":-11184,"ay":-8492,"az":-7000,"gx":8,"gy":-334,"gz":310,"freq":0,"oxi":0,"temp":28,"dataHora":"16:26:27 13/05/2024"},
                {"id":583,"pulseiraId":null,"pacienteId":2,"ax":-11244,"ay":-8456,"az":-6844,"gx":-34,"gy":-326,"gz":351,"freq":0,"oxi":0,"temp":28,"dataHora":"16:26:39 13/05/2024"},
                {"id":584,"pulseiraId":null,"pacienteId":2,"ax":-11196,"ay":-8544,"az":-7072,"gx":-12,"gy":-340,"gz":293,"freq":0,"oxi":0,"temp":28,"dataHora":"16:26:52 13/05/2024"},
                {"id":585,"pulseiraId":null,"pacienteId":2,"ax":-11084,"ay":-8416,"az":-7140,"gx":19,"gy":-346,"gz":280,"freq":0,"oxi":0,"temp":28,"dataHora":"16:27:05 13/05/2024"},
                {"id":586,"pulseiraId":null,"pacienteId":2,"ax":-11136,"ay":-8496,"az":-6856,"gx":43,"gy":-343,"gz":289,"freq":0,"oxi":0,"temp":28,"dataHora":"16:27:18 13/05/2024"},
                {"id":587,"pulseiraId":null,"pacienteId":2,"ax":-11168,"ay":-8480,"az":-6920,"gx":-4,"gy":-322,"gz":270,"freq":0,"oxi":0,"temp":28,"dataHora":"16:27:30 13/05/2024"},
                {"id":588,"pulseiraId":null,"pacienteId":2,"ax":-11256,"ay":-8440,"az":-7072,"gx":27,"gy":-353,"gz":307,"freq":0,"oxi":0,"temp":28,"dataHora":"16:27:43 13/05/2024"},
                {"id":589,"pulseiraId":null,"pacienteId":2,"ax":-11232,"ay":-8500,"az":-7044,"gx":22,"gy":-310,"gz":289,"freq":0,"oxi":0,"temp":28,"dataHora":"16:27:56 13/05/2024"},
                {"id":590,"pulseiraId":null,"pacienteId":2,"ax":-11180,"ay":-8408,"az":-7184,"gx":-8,"gy":-325,"gz":312,"freq":0,"oxi":0,"temp":28,"dataHora":"16:28:08 13/05/2024"},
                {"id":591,"pulseiraId":null,"pacienteId":2,"ax":-11160,"ay":-8492,"az":-6904,"gx":8,"gy":-346,"gz":294,"freq":0,"oxi":0,"temp":28,"dataHora":"16:28:21 13/05/2024"},
                {"id":592,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8644,"az":-6904,"gx":-23,"gy":-311,"gz":302,"freq":0,"oxi":0,"temp":28,"dataHora":"16:28:34 13/05/2024"},
                {"id":593,"pulseiraId":null,"pacienteId":2,"ax":-11096,"ay":-8556,"az":-6956,"gx":22,"gy":-328,"gz":304,"freq":0,"oxi":0,"temp":28,"dataHora":"16:28:47 13/05/2024"},
                {"id":594,"pulseiraId":null,"pacienteId":2,"ax":-11104,"ay":-8560,"az":-7056,"gx":26,"gy":-338,"gz":315,"freq":0,"oxi":0,"temp":28,"dataHora":"16:28:59 13/05/2024"},
                {"id":595,"pulseiraId":null,"pacienteId":2,"ax":-11036,"ay":-8524,"az":-6920,"gx":9,"gy":-322,"gz":289,"freq":0,"oxi":0,"temp":28,"dataHora":"16:29:12 13/05/2024"},
                {"id":596,"pulseiraId":null,"pacienteId":2,"ax":-11104,"ay":-8532,"az":-6940,"gx":13,"gy":-334,"gz":306,"freq":0,"oxi":0,"temp":28,"dataHora":"16:29:25 13/05/2024"},
                {"id":597,"pulseiraId":null,"pacienteId":2,"ax":-11092,"ay":-8456,"az":-6956,"gx":33,"gy":-352,"gz":267,"freq":0,"oxi":0,"temp":28,"dataHora":"16:29:38 13/05/2024"},
                {"id":598,"pulseiraId":null,"pacienteId":2,"ax":-11180,"ay":-8512,"az":-6968,"gx":9,"gy":-312,"gz":303,"freq":0,"oxi":0,"temp":28,"dataHora":"16:29:51 13/05/2024"},
                {"id":599,"pulseiraId":null,"pacienteId":2,"ax":-11208,"ay":-8504,"az":-6864,"gx":-4,"gy":-316,"gz":287,"freq":0,"oxi":0,"temp":28,"dataHora":"16:30:03 13/05/2024"},
                {"id":600,"pulseiraId":null,"pacienteId":2,"ax":-11088,"ay":-8560,"az":-7020,"gx":23,"gy":-332,"gz":287,"freq":0,"oxi":0,"temp":28,"dataHora":"16:30:16 13/05/2024"},
                {"id":601,"pulseiraId":null,"pacienteId":2,"ax":-11048,"ay":-8536,"az":-6900,"gx":19,"gy":-315,"gz":274,"freq":0,"oxi":0,"temp":28,"dataHora":"16:30:29 13/05/2024"},
                {"id":602,"pulseiraId":null,"pacienteId":2,"ax":-11100,"ay":-8600,"az":-6912,"gx":71,"gy":-285,"gz":241,"freq":0,"oxi":0,"temp":28,"dataHora":"16:30:41 13/05/2024"},
                {"id":603,"pulseiraId":null,"pacienteId":2,"ax":-11104,"ay":-8596,"az":-6948,"gx":23,"gy":-303,"gz":253,"freq":0,"oxi":0,"temp":28,"dataHora":"16:30:54 13/05/2024"},
                {"id":604,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8528,"az":-7052,"gx":16,"gy":-329,"gz":303,"freq":0,"oxi":0,"temp":28,"dataHora":"16:31:08 13/05/2024"},
                {"id":605,"pulseiraId":null,"pacienteId":2,"ax":-11152,"ay":-8548,"az":-6980,"gx":46,"gy":-303,"gz":282,"freq":0,"oxi":0,"temp":28,"dataHora":"16:31:21 13/05/2024"},
                {"id":606,"pulseiraId":null,"pacienteId":2,"ax":-11096,"ay":-8564,"az":-6972,"gx":44,"gy":-304,"gz":282,"freq":0,"oxi":0,"temp":28,"dataHora":"16:31:33 13/05/2024"},
                {"id":607,"pulseiraId":null,"pacienteId":2,"ax":-11092,"ay":-8616,"az":-7032,"gx":26,"gy":-308,"gz":286,"freq":0,"oxi":0,"temp":28,"dataHora":"16:31:48 13/05/2024"},
                {"id":608,"pulseiraId":null,"pacienteId":2,"ax":-11112,"ay":-8640,"az":-7184,"gx":55,"gy":-309,"gz":244,"freq":0,"oxi":0,"temp":28,"dataHora":"16:32:01 13/05/2024"},
                {"id":609,"pulseiraId":null,"pacienteId":2,"ax":-11080,"ay":-8580,"az":-6940,"gx":31,"gy":-322,"gz":265,"freq":0,"oxi":0,"temp":28,"dataHora":"16:32:14 13/05/2024"},
                {"id":610,"pulseiraId":null,"pacienteId":2,"ax":-11068,"ay":-8552,"az":-7080,"gx":63,"gy":-314,"gz":245,"freq":0,"oxi":0,"temp":28,"dataHora":"16:32:27 13/05/2024"},
                {"id":611,"pulseiraId":null,"pacienteId":2,"ax":-11268,"ay":-8448,"az":-6956,"gx":-7,"gy":-324,"gz":286,"freq":0,"oxi":0,"temp":28,"dataHora":"16:32:39 13/05/2024"},
                {"id":612,"pulseiraId":null,"pacienteId":2,"ax":-11148,"ay":-8576,"az":-7044,"gx":68,"gy":-322,"gz":257,"freq":0,"oxi":0,"temp":28,"dataHora":"16:32:52 13/05/2024"},
                {"id":613,"pulseiraId":null,"pacienteId":2,"ax":-11252,"ay":-8632,"az":-7116,"gx":37,"gy":-321,"gz":286,"freq":0,"oxi":0,"temp":28,"dataHora":"16:33:05 13/05/2024"},
                {"id":614,"pulseiraId":null,"pacienteId":2,"ax":-11128,"ay":-8552,"az":-7028,"gx":-92,"gy":-324,"gz":324,"freq":0,"oxi":0,"temp":28,"dataHora":"16:33:17 13/05/2024"},
                {"id":615,"pulseiraId":null,"pacienteId":2,"ax":-11204,"ay":-8572,"az":-6924,"gx":-53,"gy":-296,"gz":302,"freq":0,"oxi":0,"temp":28,"dataHora":"16:33:30 13/05/2024"},
                {"id":616,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8560,"az":-6944,"gx":6,"gy":-330,"gz":287,"freq":0,"oxi":0,"temp":28,"dataHora":"16:33:43 13/05/2024"},
                {"id":617,"pulseiraId":null,"pacienteId":2,"ax":-11160,"ay":-8568,"az":-7080,"gx":43,"gy":-334,"gz":278,"freq":0,"oxi":0,"temp":28,"dataHora":"16:33:55 13/05/2024"},
                {"id":618,"pulseiraId":null,"pacienteId":2,"ax":-11072,"ay":-8616,"az":-7056,"gx":60,"gy":-326,"gz":256,"freq":0,"oxi":0,"temp":28,"dataHora":"16:34:09 13/05/2024"},
                {"id":619,"pulseiraId":null,"pacienteId":2,"ax":-11132,"ay":-8632,"az":-7012,"gx":54,"gy":-309,"gz":263,"freq":0,"oxi":0,"temp":28,"dataHora":"16:34:22 13/05/2024"},
                {"id":620,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-8668,"az":-7040,"gx":-77,"gy":-336,"gz":262,"freq":0,"oxi":0,"temp":28,"dataHora":"16:34:35 13/05/2024"},
                {"id":621,"pulseiraId":null,"pacienteId":2,"ax":-11136,"ay":-8580,"az":-6864,"gx":26,"gy":-307,"gz":254,"freq":0,"oxi":0,"temp":28,"dataHora":"16:34:48 13/05/2024"},
                {"id":622,"pulseiraId":null,"pacienteId":2,"ax":-11144,"ay":-8588,"az":-7008,"gx":79,"gy":-318,"gz":256,"freq":0,"oxi":0,"temp":28,"dataHora":"16:35:01 13/05/2024"},
                {"id":623,"pulseiraId":null,"pacienteId":2,"ax":-11104,"ay":-8556,"az":-7008,"gx":-8,"gy":-312,"gz":310,"freq":0,"oxi":0,"temp":28,"dataHora":"16:35:13 13/05/2024"},
                {"id":624,"pulseiraId":null,"pacienteId":2,"ax":-11132,"ay":-8548,"az":-6964,"gx":21,"gy":-289,"gz":279,"freq":0,"oxi":0,"temp":28,"dataHora":"16:35:26 13/05/2024"},
                {"id":625,"pulseiraId":null,"pacienteId":2,"ax":-11128,"ay":-8632,"az":-7096,"gx":19,"gy":-310,"gz":263,"freq":0,"oxi":0,"temp":28,"dataHora":"16:35:39 13/05/2024"},
                {"id":626,"pulseiraId":null,"pacienteId":2,"ax":-11096,"ay":-8520,"az":-6984,"gx":18,"gy":-301,"gz":299,"freq":0,"oxi":0,"temp":28,"dataHora":"16:35:51 13/05/2024"},
                {"id":627,"pulseiraId":null,"pacienteId":2,"ax":-11172,"ay":-8572,"az":-7056,"gx":11,"gy":-340,"gz":270,"freq":0,"oxi":0,"temp":28,"dataHora":"16:36:04 13/05/2024"},
                {"id":628,"pulseiraId":null,"pacienteId":2,"ax":-11044,"ay":-8592,"az":-6864,"gx":-303,"gy":-397,"gz":484,"freq":0,"oxi":0,"temp":28,"dataHora":"16:36:17 13/05/2024"},
                {"id":629,"pulseiraId":null,"pacienteId":2,"ax":-11128,"ay":-8604,"az":-7052,"gx":-63,"gy":-324,"gz":369,"freq":0,"oxi":0,"temp":28,"dataHora":"16:36:32 13/05/2024"},
                {"id":630,"pulseiraId":null,"pacienteId":2,"ax":-11132,"ay":-8632,"az":-6876,"gx":5,"gy":-304,"gz":280,"freq":0,"oxi":0,"temp":28,"dataHora":"16:36:45 13/05/2024"},
                {"id":631,"pulseiraId":null,"pacienteId":2,"ax":-11292,"ay":-8300,"az":-7012,"gx":-874,"gy":-528,"gz":1533,"freq":0,"oxi":0,"temp":28,"dataHora":"16:36:57 13/05/2024"},
                {"id":632,"pulseiraId":null,"pacienteId":2,"ax":-7480,"ay":-13840,"az":-3148,"gx":-99,"gy":-322,"gz":323,"freq":0,"oxi":0,"temp":28,"dataHora":"16:37:10 13/05/2024"},
                {"id":633,"pulseiraId":null,"pacienteId":2,"ax":-7420,"ay":-13900,"az":-3148,"gx":15,"gy":-338,"gz":282,"freq":0,"oxi":0,"temp":28,"dataHora":"16:37:23 13/05/2024"},
                {"id":634,"pulseiraId":null,"pacienteId":2,"ax":-7472,"ay":-13772,"az":-3328,"gx":-1,"gy":-328,"gz":281,"freq":0,"oxi":0,"temp":28,"dataHora":"16:37:36 13/05/2024"},
                {"id":635,"pulseiraId":null,"pacienteId":2,"ax":-7452,"ay":-13812,"az":-3244,"gx":-56,"gy":-310,"gz":368,"freq":0,"oxi":0,"temp":28,"dataHora":"16:37:48 13/05/2024"},
                {"id":636,"pulseiraId":null,"pacienteId":2,"ax":-7484,"ay":-13876,"az":-3344,"gx":14,"gy":-314,"gz":274,"freq":0,"oxi":0,"temp":28,"dataHora":"16:38:01 13/05/2024"},
                {"id":637,"pulseiraId":null,"pacienteId":2,"ax":-7488,"ay":-13836,"az":-3160,"gx":-7,"gy":-322,"gz":317,"freq":0,"oxi":0,"temp":28,"dataHora":"16:38:14 13/05/2024"},
                {"id":638,"pulseiraId":null,"pacienteId":2,"ax":-7504,"ay":-13780,"az":-3184,"gx":116,"gy":-321,"gz":209,"freq":0,"oxi":0,"temp":28,"dataHora":"16:38:28 13/05/2024"},
                {"id":639,"pulseiraId":null,"pacienteId":2,"ax":-7492,"ay":-13832,"az":-3184,"gx":-25,"gy":-329,"gz":303,"freq":0,"oxi":0,"temp":28,"dataHora":"16:38:41 13/05/2024"},
                {"id":640,"pulseiraId":null,"pacienteId":2,"ax":-7388,"ay":-13912,"az":-3236,"gx":22,"gy":-317,"gz":274,"freq":0,"oxi":0,"temp":28,"dataHora":"16:38:54 13/05/2024"},
                {"id":641,"pulseiraId":null,"pacienteId":2,"ax":-7372,"ay":-13940,"az":-3136,"gx":-51,"gy":-333,"gz":341,"freq":0,"oxi":0,"temp":28,"dataHora":"16:39:07 13/05/2024"},
                {"id":642,"pulseiraId":null,"pacienteId":2,"ax":-7468,"ay":-13820,"az":-3132,"gx":57,"gy":-343,"gz":263,"freq":0,"oxi":0,"temp":28,"dataHora":"16:39:20 13/05/2024"},
                {"id":643,"pulseiraId":null,"pacienteId":2,"ax":-7444,"ay":-13820,"az":-3372,"gx":42,"gy":-327,"gz":300,"freq":0,"oxi":0,"temp":28,"dataHora":"16:39:32 13/05/2024"},
                {"id":644,"pulseiraId":null,"pacienteId":2,"ax":-7316,"ay":-13896,"az":-3048,"gx":46,"gy":-381,"gz":287,"freq":0,"oxi":0,"temp":28,"dataHora":"16:39:45 13/05/2024"},
                {"id":645,"pulseiraId":null,"pacienteId":2,"ax":-7684,"ay":-13640,"az":-3344,"gx":-58,"gy":-343,"gz":322,"freq":0,"oxi":0,"temp":28,"dataHora":"16:40:17 13/05/2024"},
                {"id":646,"pulseiraId":null,"pacienteId":2,"ax":-7724,"ay":-13528,"az":-3436,"gx":288,"gy":-253,"gz":106,"freq":0,"oxi":0,"temp":28,"dataHora":"16:40:34 13/05/2024"},
                {"id":647,"pulseiraId":null,"pacienteId":2,"ax":-4580,"ay":-1672,"az":-15524,"gx":-1494,"gy":-1571,"gz":897,"freq":0,"oxi":0,"temp":28,"dataHora":"16:40:46 13/05/2024"},
                {"id":648,"pulseiraId":null,"pacienteId":2,"ax":-10660,"ay":-9828,"az":-6036,"gx":58,"gy":-302,"gz":283,"freq":0,"oxi":0,"temp":28,"dataHora":"16:40:59 13/05/2024"},
                {"id":649,"pulseiraId":null,"pacienteId":2,"ax":-10604,"ay":-9812,"az":-6164,"gx":31,"gy":-311,"gz":286,"freq":0,"oxi":0,"temp":28,"dataHora":"16:41:12 13/05/2024"},
                {"id":650,"pulseiraId":null,"pacienteId":2,"ax":-10784,"ay":-9884,"az":-6176,"gx":202,"gy":-293,"gz":90,"freq":0,"oxi":0,"temp":29,"dataHora":"16:41:25 13/05/2024"},
                {"id":651,"pulseiraId":null,"pacienteId":2,"ax":1052,"ay":-300,"az":17848,"gx":-13,"gy":317,"gz":271,"freq":0,"oxi":0,"temp":29,"dataHora":"16:41:37 13/05/2024"},
                {"id":652,"pulseiraId":null,"pacienteId":2,"ax":-11504,"ay":-9856,"az":-4224,"gx":48,"gy":-332,"gz":252,"freq":0,"oxi":0,"temp":29,"dataHora":"16:41:54 13/05/2024"},
                {"id":653,"pulseiraId":null,"pacienteId":2,"ax":-11272,"ay":-9964,"az":-4380,"gx":-55,"gy":-333,"gz":356,"freq":0,"oxi":0,"temp":29,"dataHora":"16:42:07 13/05/2024"},
                {"id":654,"pulseiraId":null,"pacienteId":2,"ax":-11344,"ay":-10028,"az":-4124,"gx":-27,"gy":-332,"gz":335,"freq":0,"oxi":0,"temp":29,"dataHora":"16:42:20 13/05/2024"},
                {"id":655,"pulseiraId":null,"pacienteId":2,"ax":-11400,"ay":-9968,"az":-4372,"gx":-14,"gy":-333,"gz":234,"freq":0,"oxi":0,"temp":29,"dataHora":"16:42:33 13/05/2024"},
                {"id":656,"pulseiraId":null,"pacienteId":2,"ax":-11280,"ay":-10052,"az":-4332,"gx":155,"gy":-286,"gz":242,"freq":0,"oxi":0,"temp":29,"dataHora":"16:42:46 13/05/2024"},
                {"id":657,"pulseiraId":null,"pacienteId":2,"ax":-11288,"ay":-10080,"az":-4272,"gx":-12,"gy":-327,"gz":317,"freq":0,"oxi":0,"temp":29,"dataHora":"16:42:58 13/05/2024"},
                {"id":658,"pulseiraId":null,"pacienteId":2,"ax":-11332,"ay":-9980,"az":-4240,"gx":50,"gy":-309,"gz":289,"freq":0,"oxi":0,"temp":29,"dataHora":"16:43:11 13/05/2024"},
                {"id":659,"pulseiraId":null,"pacienteId":2,"ax":-11496,"ay":-9936,"az":-4256,"gx":11,"gy":-311,"gz":279,"freq":0,"oxi":0,"temp":29,"dataHora":"16:43:24 13/05/2024"},
                {"id":660,"pulseiraId":null,"pacienteId":2,"ax":-11332,"ay":-10048,"az":-4320,"gx":43,"gy":-294,"gz":290,"freq":0,"oxi":0,"temp":28,"dataHora":"16:43:37 13/05/2024"},
                {"id":661,"pulseiraId":null,"pacienteId":2,"ax":-11348,"ay":-10036,"az":-4360,"gx":83,"gy":-311,"gz":268,"freq":0,"oxi":0,"temp":28,"dataHora":"16:43:49 13/05/2024"},
                {"id":662,"pulseiraId":null,"pacienteId":2,"ax":-11340,"ay":-10044,"az":-4328,"gx":-40,"gy":-308,"gz":307,"freq":0,"oxi":0,"temp":28,"dataHora":"16:44:02 13/05/2024"},
                {"id":663,"pulseiraId":null,"pacienteId":2,"ax":-11404,"ay":-9992,"az":-4476,"gx":186,"gy":-271,"gz":140,"freq":0,"oxi":0,"temp":28,"dataHora":"16:44:15 13/05/2024"},
                {"id":664,"pulseiraId":null,"pacienteId":2,"ax":-11312,"ay":-10120,"az":-4328,"gx":-20,"gy":-308,"gz":275,"freq":0,"oxi":0,"temp":28,"dataHora":"16:44:27 13/05/2024"},
                {"id":665,"pulseiraId":null,"pacienteId":2,"ax":-11276,"ay":-9940,"az":-4304,"gx":19,"gy":-300,"gz":253,"freq":0,"oxi":0,"temp":28,"dataHora":"16:44:40 13/05/2024"},
                {"id":666,"pulseiraId":null,"pacienteId":2,"ax":-11140,"ay":-10012,"az":-4420,"gx":-70,"gy":-325,"gz":349,"freq":0,"oxi":0,"temp":28,"dataHora":"16:44:53 13/05/2024"},
                {"id":667,"pulseiraId":null,"pacienteId":2,"ax":-10900,"ay":-10496,"az":-4520,"gx":225,"gy":-276,"gz":125,"freq":0,"oxi":0,"temp":28,"dataHora":"16:45:28 13/05/2024"},
                {"id":668,"pulseiraId":null,"pacienteId":2,"ax":-10952,"ay":-10388,"az":-4468,"gx":58,"gy":-301,"gz":291,"freq":0,"oxi":0,"temp":28,"dataHora":"16:45:41 13/05/2024"},
                {"id":669,"pulseiraId":null,"pacienteId":2,"ax":-10304,"ay":-10872,"az":-4916,"gx":-182,"gy":-365,"gz":445,"freq":32,"oxi":0,"temp":28,"dataHora":"16:45:54 13/05/2024"},
                {"id":670,"pulseiraId":null,"pacienteId":2,"ax":15924,"ay":-480,"az":-6100,"gx":-54,"gy":-422,"gz":322,"freq":32,"oxi":0,"temp":28,"dataHora":"16:46:07 13/05/2024"},
                {"id":671,"pulseiraId":null,"pacienteId":2,"ax":15868,"ay":-560,"az":-6224,"gx":48,"gy":-307,"gz":248,"freq":32,"oxi":0,"temp":28,"dataHora":"16:46:19 13/05/2024"},
                {"id":672,"pulseiraId":null,"pacienteId":2,"ax":15748,"ay":-500,"az":-6296,"gx":62,"gy":-327,"gz":232,"freq":32,"oxi":0,"temp":28,"dataHora":"16:46:32 13/05/2024"},
                {"id":673,"pulseiraId":null,"pacienteId":2,"ax":15760,"ay":-500,"az":-6348,"gx":-41,"gy":-303,"gz":297,"freq":32,"oxi":0,"temp":28,"dataHora":"16:46:45 13/05/2024"},
                {"id":674,"pulseiraId":null,"pacienteId":2,"ax":15672,"ay":-560,"az":-6364,"gx":8,"gy":-302,"gz":291,"freq":32,"oxi":0,"temp":28,"dataHora":"16:46:57 13/05/2024"},
                {"id":675,"pulseiraId":null,"pacienteId":2,"ax":13400,"ay":7004,"az":8940,"gx":0,"gy":-288,"gz":334,"freq":0,"oxi":0,"temp":18,"dataHora":"20:11:54 13/05/2024"},
                {"id":676,"pulseiraId":null,"pacienteId":2,"ax":13428,"ay":7032,"az":8992,"gx":4,"gy":-318,"gz":292,"freq":11,"oxi":0,"temp":19,"dataHora":"20:12:25 13/05/2024"},
                {"id":677,"pulseiraId":null,"pacienteId":2,"ax":13408,"ay":6992,"az":9044,"gx":53,"gy":-275,"gz":230,"freq":11,"oxi":0,"temp":19,"dataHora":"20:12:56 13/05/2024"},
                {"id":678,"pulseiraId":null,"pacienteId":2,"ax":13344,"ay":7036,"az":9020,"gx":11,"gy":-252,"gz":278,"freq":11,"oxi":0,"temp":19,"dataHora":"20:13:11 13/05/2024"},
                {"id":679,"pulseiraId":null,"pacienteId":2,"ax":13320,"ay":6960,"az":9008,"gx":-10,"gy":-291,"gz":300,"freq":11,"oxi":0,"temp":19,"dataHora":"20:13:23 13/05/2024"},
                {"id":680,"pulseiraId":null,"pacienteId":2,"ax":13244,"ay":7044,"az":8940,"gx":38,"gy":-304,"gz":271,"freq":11,"oxi":0,"temp":19,"dataHora":"20:13:35 13/05/2024"},
                {"id":681,"pulseiraId":null,"pacienteId":2,"ax":13324,"ay":7072,"az":9076,"gx":20,"gy":-269,"gz":264,"freq":18,"oxi":0,"temp":19,"dataHora":"20:13:47 13/05/2024"},
                {"id":682,"pulseiraId":null,"pacienteId":2,"ax":13468,"ay":7032,"az":9180,"gx":104,"gy":-323,"gz":228,"freq":18,"oxi":0,"temp":19,"dataHora":"20:14:01 13/05/2024"},
                {"id":683,"pulseiraId":null,"pacienteId":2,"ax":13292,"ay":6984,"az":9060,"gx":29,"gy":-293,"gz":256,"freq":21,"oxi":0,"temp":19,"dataHora":"20:14:13 13/05/2024"},
                {"id":684,"pulseiraId":null,"pacienteId":2,"ax":13284,"ay":7056,"az":9008,"gx":329,"gy":-265,"gz":103,"freq":21,"oxi":0,"temp":19,"dataHora":"20:14:42 13/05/2024"},
                {"id":685,"pulseiraId":null,"pacienteId":2,"ax":13288,"ay":7092,"az":8984,"gx":-332,"gy":-314,"gz":419,"freq":11,"oxi":0,"temp":19,"dataHora":"20:14:56 13/05/2024"},
                {"id":686,"pulseiraId":null,"pacienteId":2,"ax":13208,"ay":7028,"az":9052,"gx":7,"gy":-320,"gz":273,"freq":11,"oxi":0,"temp":19,"dataHora":"20:15:14 13/05/2024"},
                {"id":687,"pulseiraId":null,"pacienteId":2,"ax":13308,"ay":7072,"az":9068,"gx":20,"gy":-333,"gz":303,"freq":11,"oxi":0,"temp":19,"dataHora":"20:15:32 13/05/2024"},
                {"id":688,"pulseiraId":null,"pacienteId":2,"ax":13324,"ay":6868,"az":9208,"gx":16,"gy":-278,"gz":324,"freq":11,"oxi":0,"temp":19,"dataHora":"20:15:43 13/05/2024"},
                {"id":689,"pulseiraId":null,"pacienteId":2,"ax":13408,"ay":7108,"az":9024,"gx":1,"gy":-286,"gz":291,"freq":11,"oxi":0,"temp":20,"dataHora":"20:16:01 13/05/2024"},
                {"id":690,"pulseiraId":null,"pacienteId":2,"ax":13328,"ay":7060,"az":9192,"gx":45,"gy":-307,"gz":271,"freq":1,"oxi":0,"temp":19,"dataHora":"20:16:32 13/05/2024"},
                {"id":691,"pulseiraId":null,"pacienteId":2,"ax":13380,"ay":7068,"az":9088,"gx":10,"gy":-353,"gz":275,"freq":1,"oxi":0,"temp":19,"dataHora":"20:16:47 13/05/2024"},
                {"id":692,"pulseiraId":null,"pacienteId":2,"ax":13640,"ay":8084,"az":12752,"gx":11,"gy":-4221,"gz":3014,"freq":2,"oxi":0,"temp":19,"dataHora":"20:17:01 13/05/2024"},
                {"id":693,"pulseiraId":null,"pacienteId":2,"ax":10296,"ay":1560,"az":12064,"gx":4059,"gy":942,"gz":9786,"freq":97,"oxi":94,"temp":19,"dataHora":"20:17:16 13/05/2024"},
                {"id":694,"pulseiraId":null,"pacienteId":2,"ax":12240,"ay":11792,"az":168,"gx":247,"gy":-334,"gz":343,"freq":56,"oxi":96,"temp":19,"dataHora":"20:17:31 13/05/2024"},
                {"id":695,"pulseiraId":null,"pacienteId":2,"ax":12004,"ay":11836,"az":-452,"gx":69,"gy":-343,"gz":529,"freq":61,"oxi":97,"temp":19,"dataHora":"20:17:42 13/05/2024"},
                {"id":696,"pulseiraId":null,"pacienteId":2,"ax":12360,"ay":11704,"az":-280,"gx":85,"gy":-614,"gz":346,"freq":71,"oxi":97,"temp":18,"dataHora":"20:17:57 13/05/2024"},
                {"id":697,"pulseiraId":null,"pacienteId":2,"ax":13604,"ay":10128,"az":-308,"gx":-424,"gy":-333,"gz":110,"freq":37,"oxi":98,"temp":18,"dataHora":"20:18:12 13/05/2024"},
                {"id":698,"pulseiraId":null,"pacienteId":2,"ax":14504,"ay":9352,"az":136,"gx":369,"gy":-440,"gz":658,"freq":32,"oxi":96,"temp":18,"dataHora":"20:18:26 13/05/2024"},
                {"id":699,"pulseiraId":null,"pacienteId":2,"ax":14444,"ay":8664,"az":-8,"gx":-55,"gy":-526,"gz":182,"freq":58,"oxi":98,"temp":17,"dataHora":"20:18:38 13/05/2024"},
                {"id":700,"pulseiraId":null,"pacienteId":2,"ax":12744,"ay":4708,"az":11396,"gx":9,"gy":-280,"gz":278,"freq":58,"oxi":98,"temp":18,"dataHora":"20:18:50 13/05/2024"},
                {"id":701,"pulseiraId":null,"pacienteId":2,"ax":12820,"ay":4680,"az":11256,"gx":1,"gy":-263,"gz":244,"freq":58,"oxi":98,"temp":17,"dataHora":"20:19:05 13/05/2024"},
                {"id":702,"pulseiraId":null,"pacienteId":2,"ax":12860,"ay":4788,"az":11248,"gx":-25,"gy":-288,"gz":311,"freq":58,"oxi":98,"temp":18,"dataHora":"20:19:16 13/05/2024"},
                {"id":703,"pulseiraId":null,"pacienteId":2,"ax":12836,"ay":4708,"az":11476,"gx":-68,"gy":-415,"gz":316,"freq":58,"oxi":98,"temp":18,"dataHora":"20:19:48 13/05/2024"},
                {"id":704,"pulseiraId":null,"pacienteId":2,"ax":12752,"ay":4748,"az":11268,"gx":-32,"gy":-292,"gz":294,"freq":58,"oxi":98,"temp":18,"dataHora":"20:20:20 13/05/2024"},
                {"id":705,"pulseiraId":null,"pacienteId":2,"ax":12836,"ay":4704,"az":11308,"gx":-5,"gy":-291,"gz":289,"freq":58,"oxi":98,"temp":18,"dataHora":"20:20:33 13/05/2024"},
                {"id":706,"pulseiraId":null,"pacienteId":2,"ax":12780,"ay":4724,"az":11284,"gx":72,"gy":-300,"gz":273,"freq":58,"oxi":98,"temp":18,"dataHora":"20:20:50 13/05/2024"},
                {"id":707,"pulseiraId":null,"pacienteId":2,"ax":12856,"ay":4612,"az":11400,"gx":20,"gy":-320,"gz":285,"freq":58,"oxi":98,"temp":18,"dataHora":"20:21:02 13/05/2024"},
                {"id":708,"pulseiraId":null,"pacienteId":2,"ax":11732,"ay":6732,"az":11552,"gx":15,"gy":-291,"gz":300,"freq":0,"oxi":0,"temp":18,"dataHora":"20:21:42 13/05/2024"},
                {"id":709,"pulseiraId":null,"pacienteId":2,"ax":11780,"ay":6696,"az":11656,"gx":7,"gy":-355,"gz":280,"freq":0,"oxi":0,"temp":18,"dataHora":"20:21:54 13/05/2024"},
                {"id":710,"pulseiraId":null,"pacienteId":2,"ax":11724,"ay":6612,"az":11416,"gx":-4,"gy":-312,"gz":301,"freq":0,"oxi":0,"temp":19,"dataHora":"20:22:09 13/05/2024"},
                {"id":711,"pulseiraId":null,"pacienteId":2,"ax":11748,"ay":6792,"az":11548,"gx":19,"gy":-329,"gz":245,"freq":0,"oxi":0,"temp":19,"dataHora":"20:22:23 13/05/2024"},
                {"id":712,"pulseiraId":null,"pacienteId":2,"ax":11700,"ay":6700,"az":11436,"gx":29,"gy":-307,"gz":280,"freq":0,"oxi":0,"temp":19,"dataHora":"20:22:38 13/05/2024"},
                {"id":713,"pulseiraId":null,"pacienteId":2,"ax":11752,"ay":6600,"az":11508,"gx":3,"gy":-363,"gz":293,"freq":0,"oxi":0,"temp":19,"dataHora":"20:22:52 13/05/2024"},
                {"id":714,"pulseiraId":null,"pacienteId":2,"ax":11804,"ay":6608,"az":11520,"gx":43,"gy":-283,"gz":313,"freq":0,"oxi":0,"temp":19,"dataHora":"20:23:03 13/05/2024"},
                {"id":715,"pulseiraId":null,"pacienteId":2,"ax":11848,"ay":6692,"az":11408,"gx":16,"gy":-381,"gz":269,"freq":0,"oxi":0,"temp":20,"dataHora":"20:23:19 13/05/2024"},
                {"id":716,"pulseiraId":null,"pacienteId":2,"ax":11628,"ay":6572,"az":11268,"gx":-36,"gy":-404,"gz":316,"freq":0,"oxi":0,"temp":20,"dataHora":"20:23:34 13/05/2024"},
                {"id":717,"pulseiraId":null,"pacienteId":2,"ax":11716,"ay":6656,"az":11296,"gx":158,"gy":-213,"gz":132,"freq":0,"oxi":0,"temp":20,"dataHora":"20:23:48 13/05/2024"},
                {"id":718,"pulseiraId":null,"pacienteId":2,"ax":11660,"ay":6648,"az":11300,"gx":-108,"gy":-128,"gz":360,"freq":0,"oxi":0,"temp":20,"dataHora":"20:24:03 13/05/2024"},
                {"id":719,"pulseiraId":null,"pacienteId":2,"ax":11716,"ay":6752,"az":11396,"gx":42,"gy":-307,"gz":352,"freq":0,"oxi":0,"temp":20,"dataHora":"20:24:19 13/05/2024"},
                {"id":720,"pulseiraId":null,"pacienteId":2,"ax":11732,"ay":6600,"az":11248,"gx":17,"gy":-314,"gz":304,"freq":0,"oxi":0,"temp":20,"dataHora":"20:24:31 13/05/2024"},
                {"id":721,"pulseiraId":null,"pacienteId":2,"ax":11696,"ay":6504,"az":11416,"gx":-34,"gy":-339,"gz":263,"freq":0,"oxi":0,"temp":20,"dataHora":"20:24:46 13/05/2024"},
                {"id":722,"pulseiraId":null,"pacienteId":2,"ax":9168,"ay":3456,"az":10748,"gx":9935,"gy":10480,"gz":11373,"freq":0,"oxi":0,"temp":20,"dataHora":"20:25:01 13/05/2024"},
                {"id":723,"pulseiraId":null,"pacienteId":2,"ax":9764,"ay":11444,"az":-6608,"gx":80,"gy":1900,"gz":-5547,"freq":34,"oxi":0,"temp":20,"dataHora":"20:25:17 13/05/2024"},
                {"id":724,"pulseiraId":null,"pacienteId":2,"ax":9628,"ay":12388,"az":-5900,"gx":134,"gy":-316,"gz":475,"freq":48,"oxi":96,"temp":22,"dataHora":"20:25:31 13/05/2024"},
                {"id":725,"pulseiraId":null,"pacienteId":2,"ax":10820,"ay":11016,"az":-6500,"gx":-31,"gy":-223,"gz":369,"freq":36,"oxi":96,"temp":22,"dataHora":"20:25:43 13/05/2024"},
                {"id":726,"pulseiraId":null,"pacienteId":2,"ax":10592,"ay":11444,"az":-6072,"gx":-19,"gy":-297,"gz":264,"freq":35,"oxi":95,"temp":23,"dataHora":"20:25:56 13/05/2024"},
                {"id":727,"pulseiraId":null,"pacienteId":2,"ax":9880,"ay":12424,"az":-4832,"gx":4,"gy":-300,"gz":170,"freq":43,"oxi":95,"temp":23,"dataHora":"20:26:09 13/05/2024"},
                {"id":728,"pulseiraId":null,"pacienteId":2,"ax":9696,"ay":12768,"az":-4836,"gx":22,"gy":-356,"gz":364,"freq":37,"oxi":94,"temp":23,"dataHora":"20:26:24 13/05/2024"},
                {"id":729,"pulseiraId":null,"pacienteId":2,"ax":7736,"ay":14328,"az":-3188,"gx":-6,"gy":-156,"gz":144,"freq":38,"oxi":94,"temp":23,"dataHora":"20:26:35 13/05/2024"},
                {"id":730,"pulseiraId":null,"pacienteId":2,"ax":7104,"ay":14556,"az":-2856,"gx":23,"gy":-318,"gz":438,"freq":38,"oxi":94,"temp":22,"dataHora":"20:27:06 13/05/2024"},
                {"id":731,"pulseiraId":null,"pacienteId":2,"ax":6788,"ay":14632,"az":-3104,"gx":24,"gy":-258,"gz":212,"freq":122,"oxi":95,"temp":22,"dataHora":"20:27:21 13/05/2024"},
                {"id":732,"pulseiraId":null,"pacienteId":2,"ax":9792,"ay":5624,"az":13572,"gx":134,"gy":-58,"gz":579,"freq":37,"oxi":94,"temp":22,"dataHora":"20:27:36 13/05/2024"},
                {"id":733,"pulseiraId":null,"pacienteId":2,"ax":11784,"ay":1696,"az":13188,"gx":-44,"gy":42,"gz":593,"freq":67,"oxi":97,"temp":23,"dataHora":"20:28:04 13/05/2024"},
                {"id":734,"pulseiraId":null,"pacienteId":2,"ax":12020,"ay":1772,"az":13900,"gx":-40,"gy":-396,"gz":13,"freq":69,"oxi":97,"temp":23,"dataHora":"20:28:18 13/05/2024"},
                {"id":735,"pulseiraId":null,"pacienteId":2,"ax":12856,"ay":2412,"az":12016,"gx":20,"gy":-348,"gz":270,"freq":69,"oxi":97,"temp":23,"dataHora":"20:28:32 13/05/2024"},
                {"id":736,"pulseiraId":null,"pacienteId":2,"ax":12864,"ay":2436,"az":12104,"gx":-5,"gy":-328,"gz":290,"freq":69,"oxi":97,"temp":23,"dataHora":"20:28:44 13/05/2024"},
                {"id":737,"pulseiraId":null,"pacienteId":2,"ax":13044,"ay":2308,"az":11896,"gx":53,"gy":-296,"gz":286,"freq":69,"oxi":97,"temp":22,"dataHora":"20:28:59 13/05/2024"},
                {"id":738,"pulseiraId":null,"pacienteId":2,"ax":13000,"ay":2476,"az":11908,"gx":76,"gy":-190,"gz":281,"freq":69,"oxi":97,"temp":22,"dataHora":"20:29:11 13/05/2024"},
                {"id":739,"pulseiraId":null,"pacienteId":2,"ax":12892,"ay":2496,"az":12132,"gx":9,"gy":-345,"gz":337,"freq":69,"oxi":97,"temp":22,"dataHora":"20:29:23 13/05/2024"},
                {"id":740,"pulseiraId":null,"pacienteId":2,"ax":13084,"ay":2512,"az":11876,"gx":11,"gy":-290,"gz":296,"freq":69,"oxi":97,"temp":22,"dataHora":"20:29:36 13/05/2024"},
                {"id":741,"pulseiraId":null,"pacienteId":2,"ax":13076,"ay":2388,"az":11920,"gx":-7,"gy":-348,"gz":343,"freq":69,"oxi":97,"temp":22,"dataHora":"20:29:48 13/05/2024"},
                {"id":742,"pulseiraId":null,"pacienteId":2,"ax":12840,"ay":2432,"az":12168,"gx":-28,"gy":-328,"gz":290,"freq":69,"oxi":97,"temp":22,"dataHora":"20:30:00 13/05/2024"},
                {"id":743,"pulseiraId":null,"pacienteId":2,"ax":13064,"ay":2432,"az":11944,"gx":12,"gy":-271,"gz":276,"freq":69,"oxi":97,"temp":22,"dataHora":"20:30:14 13/05/2024"},
                {"id":744,"pulseiraId":null,"pacienteId":2,"ax":12996,"ay":2436,"az":11884,"gx":-7,"gy":-357,"gz":308,"freq":69,"oxi":97,"temp":22,"dataHora":"20:30:26 13/05/2024"},
                {"id":745,"pulseiraId":null,"pacienteId":2,"ax":12912,"ay":2400,"az":12100,"gx":-32,"gy":-357,"gz":290,"freq":69,"oxi":97,"temp":22,"dataHora":"20:30:40 13/05/2024"},
                {"id":746,"pulseiraId":null,"pacienteId":2,"ax":13020,"ay":2384,"az":12056,"gx":-30,"gy":-306,"gz":327,"freq":69,"oxi":97,"temp":22,"dataHora":"20:30:52 13/05/2024"},
                {"id":747,"pulseiraId":null,"pacienteId":2,"ax":12944,"ay":2364,"az":11984,"gx":59,"gy":-249,"gz":257,"freq":69,"oxi":97,"temp":22,"dataHora":"20:31:03 13/05/2024"},
                {"id":748,"pulseiraId":null,"pacienteId":2,"ax":12988,"ay":2384,"az":11708,"gx":185,"gy":-205,"gz":200,"freq":69,"oxi":97,"temp":22,"dataHora":"20:31:15 13/05/2024"},
                {"id":749,"pulseiraId":null,"pacienteId":2,"ax":13096,"ay":2348,"az":11884,"gx":12,"gy":-267,"gz":272,"freq":69,"oxi":97,"temp":22,"dataHora":"20:31:29 13/05/2024"},
                {"id":750,"pulseiraId":null,"pacienteId":2,"ax":13068,"ay":2396,"az":11908,"gx":0,"gy":-306,"gz":239,"freq":69,"oxi":97,"temp":22,"dataHora":"20:31:41 13/05/2024"},
                {"id":751,"pulseiraId":null,"pacienteId":2,"ax":13128,"ay":2360,"az":11856,"gx":-4,"gy":-291,"gz":278,"freq":69,"oxi":97,"temp":22,"dataHora":"20:31:53 13/05/2024"},
                {"id":752,"pulseiraId":null,"pacienteId":2,"ax":12984,"ay":2552,"az":12064,"gx":7,"gy":-287,"gz":305,"freq":69,"oxi":97,"temp":22,"dataHora":"20:32:05 13/05/2024"},
                {"id":753,"pulseiraId":null,"pacienteId":2,"ax":13000,"ay":2364,"az":11968,"gx":11,"gy":-375,"gz":296,"freq":69,"oxi":97,"temp":22,"dataHora":"20:32:16 13/05/2024"},
                {"id":754,"pulseiraId":null,"pacienteId":2,"ax":13100,"ay":2344,"az":11952,"gx":54,"gy":-297,"gz":271,"freq":69,"oxi":97,"temp":22,"dataHora":"20:32:28 13/05/2024"},
                {"id":755,"pulseiraId":null,"pacienteId":2,"ax":12996,"ay":2400,"az":11976,"gx":66,"gy":-317,"gz":226,"freq":69,"oxi":97,"temp":22,"dataHora":"20:32:43 13/05/2024"},
                {"id":756,"pulseiraId":null,"pacienteId":2,"ax":12984,"ay":2316,"az":11896,"gx":11,"gy":-355,"gz":287,"freq":69,"oxi":97,"temp":22,"dataHora":"20:32:54 13/05/2024"},
                {"id":757,"pulseiraId":null,"pacienteId":2,"ax":12964,"ay":2236,"az":12080,"gx":108,"gy":-331,"gz":225,"freq":69,"oxi":97,"temp":22,"dataHora":"20:33:08 13/05/2024"},
                {"id":758,"pulseiraId":null,"pacienteId":2,"ax":12972,"ay":2416,"az":11948,"gx":29,"gy":-343,"gz":310,"freq":69,"oxi":97,"temp":22,"dataHora":"20:33:20 13/05/2024"},
                {"id":759,"pulseiraId":null,"pacienteId":2,"ax":13052,"ay":2336,"az":11908,"gx":10,"gy":-361,"gz":307,"freq":69,"oxi":97,"temp":22,"dataHora":"20:33:32 13/05/2024"},
                {"id":760,"pulseiraId":null,"pacienteId":2,"ax":14260,"ay":780,"az":8776,"gx":-26,"gy":-596,"gz":211,"freq":30,"oxi":97,"temp":22,"dataHora":"20:34:00 13/05/2024"},
                {"id":761,"pulseiraId":null,"pacienteId":2,"ax":14772,"ay":1476,"az":10080,"gx":341,"gy":370,"gz":427,"freq":60,"oxi":96,"temp":22,"dataHora":"20:34:11 13/05/2024"},
                {"id":762,"pulseiraId":null,"pacienteId":2,"ax":14856,"ay":2180,"az":10276,"gx":-388,"gy":-1212,"gz":167,"freq":70,"oxi":97,"temp":22,"dataHora":"20:34:23 13/05/2024"},
                {"id":763,"pulseiraId":null,"pacienteId":2,"ax":14420,"ay":1700,"az":11360,"gx":-1925,"gy":807,"gz":2603,"freq":65,"oxi":97,"temp":22,"dataHora":"20:34:35 13/05/2024"},
                {"id":764,"pulseiraId":null,"pacienteId":2,"ax":10076,"ay":10572,"az":-7644,"gx":-208,"gy":-182,"gz":-335,"freq":40,"oxi":95,"temp":24,"dataHora":"20:35:08 13/05/2024"},
                {"id":765,"pulseiraId":null,"pacienteId":2,"ax":13724,"ay":5568,"az":9472,"gx":6,"gy":-315,"gz":283,"freq":40,"oxi":95,"temp":24,"dataHora":"20:35:20 13/05/2024"},
                {"id":766,"pulseiraId":null,"pacienteId":2,"ax":13968,"ay":5412,"az":9244,"gx":60,"gy":-260,"gz":225,"freq":40,"oxi":95,"temp":23,"dataHora":"20:35:31 13/05/2024"},
                {"id":767,"pulseiraId":null,"pacienteId":2,"ax":13820,"ay":5384,"az":9468,"gx":-45,"gy":-373,"gz":317,"freq":40,"oxi":95,"temp":23,"dataHora":"20:35:49 13/05/2024"},
                {"id":768,"pulseiraId":null,"pacienteId":2,"ax":13476,"ay":9720,"az":5052,"gx":-51,"gy":-488,"gz":486,"freq":40,"oxi":95,"temp":23,"dataHora":"20:36:02 13/05/2024"},
                {"id":769,"pulseiraId":null,"pacienteId":2,"ax":13256,"ay":9344,"az":5644,"gx":-139,"gy":-303,"gz":330,"freq":40,"oxi":95,"temp":26,"dataHora":"20:36:16 13/05/2024"},
                {"id":770,"pulseiraId":null,"pacienteId":2,"ax":13976,"ay":3420,"az":10540,"gx":-191,"gy":110,"gz":239,"freq":9,"oxi":93,"temp":26,"dataHora":"20:36:28 13/05/2024"},
                {"id":771,"pulseiraId":null,"pacienteId":2,"ax":-184,"ay":-1348,"az":10472,"gx":1101,"gy":5393,"gz":-9985,"freq":7,"oxi":93,"temp":25,"dataHora":"20:36:43 13/05/2024"},
                {"id":772,"pulseiraId":null,"pacienteId":2,"ax":-5768,"ay":436,"az":17080,"gx":666,"gy":1289,"gz":2434,"freq":211,"oxi":94,"temp":23,"dataHora":"20:36:55 13/05/2024"},
                {"id":773,"pulseiraId":null,"pacienteId":2,"ax":-7188,"ay":824,"az":16328,"gx":619,"gy":-412,"gz":-37,"freq":211,"oxi":94,"temp":22,"dataHora":"20:37:06 13/05/2024"},
                {"id":774,"pulseiraId":null,"pacienteId":2,"ax":-5084,"ay":872,"az":16312,"gx":-1870,"gy":919,"gz":695,"freq":211,"oxi":94,"temp":22,"dataHora":"20:37:18 13/05/2024"},
                {"id":775,"pulseiraId":null,"pacienteId":2,"ax":-7048,"ay":-24,"az":15444,"gx":-314,"gy":-564,"gz":-245,"freq":211,"oxi":94,"temp":21,"dataHora":"20:37:30 13/05/2024"},
                {"id":776,"pulseiraId":null,"pacienteId":2,"ax":-7288,"ay":-248,"az":15820,"gx":-1475,"gy":125,"gz":-650,"freq":211,"oxi":94,"temp":20,"dataHora":"20:37:47 13/05/2024"},
                {"id":777,"pulseiraId":null,"pacienteId":2,"ax":-4196,"ay":-44,"az":15652,"gx":1524,"gy":-7348,"gz":3489,"freq":211,"oxi":94,"temp":20,"dataHora":"20:37:59 13/05/2024"},
                {"id":778,"pulseiraId":null,"pacienteId":2,"ax":-5304,"ay":-1664,"az":16588,"gx":364,"gy":77,"gz":806,"freq":189,"oxi":94,"temp":20,"dataHora":"20:38:14 13/05/2024"},
                {"id":779,"pulseiraId":null,"pacienteId":2,"ax":7352,"ay":7004,"az":14728,"gx":-16,"gy":-338,"gz":231,"freq":189,"oxi":94,"temp":19,"dataHora":"20:38:45 13/05/2024"},
                {"id":780,"pulseiraId":null,"pacienteId":2,"ax":7328,"ay":7292,"az":14928,"gx":-1365,"gy":-303,"gz":2114,"freq":189,"oxi":94,"temp":19,"dataHora":"20:39:02 13/05/2024"},
                {"id":781,"pulseiraId":null,"pacienteId":2,"ax":7424,"ay":3864,"az":15800,"gx":10,"gy":-300,"gz":267,"freq":189,"oxi":94,"temp":19,"dataHora":"20:39:14 13/05/2024"},
                {"id":782,"pulseiraId":null,"pacienteId":2,"ax":7448,"ay":4004,"az":15888,"gx":-39,"gy":-252,"gz":350,"freq":189,"oxi":94,"temp":20,"dataHora":"20:39:25 13/05/2024"},
                {"id":783,"pulseiraId":null,"pacienteId":2,"ax":7472,"ay":3936,"az":15852,"gx":-49,"gy":-356,"gz":348,"freq":189,"oxi":94,"temp":20,"dataHora":"20:39:39 13/05/2024"},
                {"id":784,"pulseiraId":null,"pacienteId":2,"ax":7504,"ay":4008,"az":15844,"gx":-28,"gy":-293,"gz":306,"freq":189,"oxi":94,"temp":20,"dataHora":"20:39:54 13/05/2024"},
                {"id":785,"pulseiraId":null,"pacienteId":2,"ax":7536,"ay":4016,"az":15684,"gx":-27,"gy":-344,"gz":312,"freq":189,"oxi":94,"temp":21,"dataHora":"20:40:24 13/05/2024"},
                {"id":786,"pulseiraId":null,"pacienteId":2,"ax":7512,"ay":3984,"az":15788,"gx":-1,"gy":-279,"gz":303,"freq":189,"oxi":94,"temp":21,"dataHora":"20:40:39 13/05/2024"},
                {"id":787,"pulseiraId":null,"pacienteId":2,"ax":7572,"ay":4036,"az":15864,"gx":25,"gy":-356,"gz":272,"freq":189,"oxi":94,"temp":21,"dataHora":"20:40:54 13/05/2024"},
                {"id":788,"pulseiraId":null,"pacienteId":2,"ax":7536,"ay":3988,"az":15824,"gx":-3,"gy":-236,"gz":325,"freq":189,"oxi":94,"temp":21,"dataHora":"20:41:06 13/05/2024"},
                {"id":789,"pulseiraId":null,"pacienteId":2,"ax":7592,"ay":4008,"az":15828,"gx":-16,"gy":-270,"gz":302,"freq":189,"oxi":94,"temp":21,"dataHora":"20:41:20 13/05/2024"},
                {"id":790,"pulseiraId":null,"pacienteId":2,"ax":7576,"ay":3976,"az":15736,"gx":132,"gy":-373,"gz":189,"freq":189,"oxi":94,"temp":21,"dataHora":"20:41:32 13/05/2024"},
                {"id":791,"pulseiraId":null,"pacienteId":2,"ax":7512,"ay":3924,"az":15736,"gx":-5,"gy":-315,"gz":199,"freq":189,"oxi":94,"temp":21,"dataHora":"20:41:43 13/05/2024"},
                {"id":792,"pulseiraId":null,"pacienteId":2,"ax":7452,"ay":4060,"az":15780,"gx":37,"gy":-310,"gz":279,"freq":189,"oxi":94,"temp":22,"dataHora":"20:41:55 13/05/2024"},
                {"id":793,"pulseiraId":null,"pacienteId":2,"ax":7484,"ay":3908,"az":15920,"gx":-32,"gy":-309,"gz":339,"freq":189,"oxi":94,"temp":22,"dataHora":"20:42:09 13/05/2024"},
                {"id":794,"pulseiraId":null,"pacienteId":2,"ax":7508,"ay":4104,"az":15656,"gx":49,"gy":-365,"gz":192,"freq":189,"oxi":94,"temp":22,"dataHora":"20:42:23 13/05/2024"},
                {"id":795,"pulseiraId":null,"pacienteId":2,"ax":7536,"ay":3940,"az":15780,"gx":48,"gy":-326,"gz":227,"freq":189,"oxi":94,"temp":22,"dataHora":"20:42:35 13/05/2024"},
                {"id":796,"pulseiraId":null,"pacienteId":2,"ax":7580,"ay":3972,"az":15748,"gx":85,"gy":-363,"gz":182,"freq":189,"oxi":94,"temp":22,"dataHora":"20:42:47 13/05/2024"},
                {"id":797,"pulseiraId":null,"pacienteId":2,"ax":7504,"ay":3892,"az":15812,"gx":11,"gy":-335,"gz":279,"freq":189,"oxi":94,"temp":22,"dataHora":"20:42:58 13/05/2024"},
                {"id":798,"pulseiraId":null,"pacienteId":2,"ax":7512,"ay":4040,"az":15776,"gx":135,"gy":-356,"gz":172,"freq":189,"oxi":94,"temp":22,"dataHora":"20:43:10 13/05/2024"},
                {"id":799,"pulseiraId":null,"pacienteId":2,"ax":7560,"ay":4056,"az":15824,"gx":28,"gy":-294,"gz":267,"freq":189,"oxi":94,"temp":22,"dataHora":"20:43:22 13/05/2024"},
                {"id":800,"pulseiraId":null,"pacienteId":2,"ax":7488,"ay":3976,"az":15804,"gx":-7,"gy":-337,"gz":292,"freq":189,"oxi":94,"temp":22,"dataHora":"20:43:41 13/05/2024"},
                {"id":801,"pulseiraId":null,"pacienteId":2,"ax":7548,"ay":3968,"az":15876,"gx":6,"gy":-348,"gz":292,"freq":189,"oxi":94,"temp":22,"dataHora":"20:43:53 13/05/2024"},
                {"id":802,"pulseiraId":null,"pacienteId":2,"ax":7480,"ay":4052,"az":15680,"gx":81,"gy":-324,"gz":210,"freq":189,"oxi":94,"temp":22,"dataHora":"20:44:08 13/05/2024"},
                {"id":803,"pulseiraId":null,"pacienteId":2,"ax":7596,"ay":4088,"az":15624,"gx":15,"gy":-300,"gz":377,"freq":189,"oxi":94,"temp":22,"dataHora":"20:44:39 13/05/2024"},
                {"id":804,"pulseiraId":null,"pacienteId":2,"ax":7488,"ay":3968,"az":15732,"gx":14,"gy":-353,"gz":261,"freq":189,"oxi":94,"temp":22,"dataHora":"20:44:54 13/05/2024"},
                {"id":805,"pulseiraId":null,"pacienteId":2,"ax":7564,"ay":3960,"az":15748,"gx":12,"gy":-368,"gz":282,"freq":189,"oxi":94,"temp":22,"dataHora":"20:45:22 13/05/2024"},
                {"id":806,"pulseiraId":null,"pacienteId":2,"ax":7556,"ay":4076,"az":15744,"gx":-39,"gy":-301,"gz":347,"freq":189,"oxi":94,"temp":22,"dataHora":"20:45:33 13/05/2024"},
                {"id":807,"pulseiraId":null,"pacienteId":2,"ax":7432,"ay":3992,"az":15800,"gx":-44,"gy":-288,"gz":350,"freq":189,"oxi":94,"temp":22,"dataHora":"20:45:45 13/05/2024"},
                {"id":808,"pulseiraId":null,"pacienteId":2,"ax":7464,"ay":3856,"az":15744,"gx":59,"gy":-329,"gz":225,"freq":189,"oxi":94,"temp":23,"dataHora":"20:45:57 13/05/2024"},
                {"id":809,"pulseiraId":null,"pacienteId":2,"ax":7596,"ay":4104,"az":15624,"gx":-30,"gy":-252,"gz":413,"freq":189,"oxi":94,"temp":23,"dataHora":"20:46:11 13/05/2024"},
                {"id":810,"pulseiraId":null,"pacienteId":2,"ax":7532,"ay":3920,"az":15752,"gx":-18,"gy":-333,"gz":339,"freq":189,"oxi":94,"temp":22,"dataHora":"20:46:26 13/05/2024"},
                {"id":811,"pulseiraId":null,"pacienteId":2,"ax":7476,"ay":4012,"az":15856,"gx":85,"gy":-360,"gz":212,"freq":189,"oxi":94,"temp":22,"dataHora":"20:46:38 13/05/2024"},
                {"id":812,"pulseiraId":null,"pacienteId":2,"ax":7512,"ay":4092,"az":15768,"gx":10,"gy":-310,"gz":285,"freq":189,"oxi":94,"temp":22,"dataHora":"20:46:52 13/05/2024"},
                {"id":813,"pulseiraId":null,"pacienteId":2,"ax":7508,"ay":3928,"az":15880,"gx":50,"gy":-343,"gz":231,"freq":189,"oxi":94,"temp":22,"dataHora":"20:47:06 13/05/2024"},
                {"id":814,"pulseiraId":null,"pacienteId":2,"ax":7516,"ay":3872,"az":15704,"gx":-12,"gy":-321,"gz":333,"freq":189,"oxi":94,"temp":22,"dataHora":"20:47:20 13/05/2024"},
                {"id":815,"pulseiraId":null,"pacienteId":2,"ax":7560,"ay":4048,"az":15780,"gx":-29,"gy":-315,"gz":315,"freq":189,"oxi":94,"temp":22,"dataHora":"20:47:32 13/05/2024"},
                {"id":816,"pulseiraId":null,"pacienteId":2,"ax":7488,"ay":3960,"az":15904,"gx":-52,"gy":-299,"gz":319,"freq":189,"oxi":94,"temp":21,"dataHora":"20:47:46 13/05/2024"},
                {"id":817,"pulseiraId":null,"pacienteId":2,"ax":7652,"ay":3908,"az":15840,"gx":19,"gy":-326,"gz":257,"freq":189,"oxi":94,"temp":21,"dataHora":"20:47:58 13/05/2024"},
                {"id":818,"pulseiraId":null,"pacienteId":2,"ax":7556,"ay":3988,"az":15980,"gx":27,"gy":-326,"gz":306,"freq":189,"oxi":94,"temp":21,"dataHora":"20:48:10 13/05/2024"},
                {"id":819,"pulseiraId":null,"pacienteId":2,"ax":7532,"ay":3948,"az":15776,"gx":-65,"gy":-226,"gz":355,"freq":189,"oxi":94,"temp":21,"dataHora":"20:48:22 13/05/2024"},
                {"id":820,"pulseiraId":null,"pacienteId":2,"ax":7616,"ay":4000,"az":15796,"gx":-13,"gy":-278,"gz":351,"freq":189,"oxi":94,"temp":21,"dataHora":"20:48:35 13/05/2024"},
                {"id":821,"pulseiraId":null,"pacienteId":2,"ax":7552,"ay":3908,"az":15840,"gx":147,"gy":-377,"gz":163,"freq":189,"oxi":94,"temp":21,"dataHora":"20:48:49 13/05/2024"},
                {"id":822,"pulseiraId":null,"pacienteId":2,"ax":7504,"ay":3960,"az":15712,"gx":50,"gy":-325,"gz":226,"freq":189,"oxi":94,"temp":20,"dataHora":"20:49:01 13/05/2024"},
                {"id":823,"pulseiraId":null,"pacienteId":2,"ax":7588,"ay":3856,"az":15812,"gx":47,"gy":-320,"gz":300,"freq":189,"oxi":94,"temp":20,"dataHora":"20:49:16 13/05/2024"},
                {"id":824,"pulseiraId":null,"pacienteId":2,"ax":7488,"ay":4000,"az":15868,"gx":-20,"gy":-286,"gz":331,"freq":189,"oxi":94,"temp":20,"dataHora":"20:49:27 13/05/2024"},
                {"id":825,"pulseiraId":null,"pacienteId":2,"ax":7456,"ay":3876,"az":15788,"gx":10,"gy":-292,"gz":351,"freq":189,"oxi":94,"temp":20,"dataHora":"20:49:41 13/05/2024"},
                {"id":826,"pulseiraId":null,"pacienteId":2,"ax":7624,"ay":3952,"az":15772,"gx":30,"gy":-337,"gz":222,"freq":189,"oxi":94,"temp":20,"dataHora":"20:49:53 13/05/2024"},
                {"id":827,"pulseiraId":null,"pacienteId":2,"ax":7556,"ay":3948,"az":15752,"gx":49,"gy":-340,"gz":236,"freq":189,"oxi":94,"temp":20,"dataHora":"20:50:04 13/05/2024"},
                {"id":828,"pulseiraId":null,"pacienteId":2,"ax":7668,"ay":4004,"az":15552,"gx":-49,"gy":-310,"gz":334,"freq":189,"oxi":94,"temp":20,"dataHora":"20:50:16 13/05/2024"},
                {"id":829,"pulseiraId":null,"pacienteId":2,"ax":7584,"ay":4000,"az":15784,"gx":-24,"gy":-285,"gz":337,"freq":189,"oxi":94,"temp":20,"dataHora":"20:50:28 13/05/2024"},
                {"id":830,"pulseiraId":null,"pacienteId":2,"ax":7628,"ay":3960,"az":15844,"gx":-81,"gy":-309,"gz":365,"freq":189,"oxi":94,"temp":19,"dataHora":"20:50:42 13/05/2024"},
                {"id":831,"pulseiraId":null,"pacienteId":2,"ax":7560,"ay":3904,"az":15732,"gx":-43,"gy":-281,"gz":368,"freq":189,"oxi":94,"temp":19,"dataHora":"20:50:55 13/05/2024"},
                {"id":832,"pulseiraId":null,"pacienteId":2,"ax":7632,"ay":3776,"az":15852,"gx":78,"gy":-330,"gz":230,"freq":189,"oxi":94,"temp":19,"dataHora":"20:51:07 13/05/2024"},
                {"id":833,"pulseiraId":null,"pacienteId":2,"ax":-2860,"ay":144,"az":17644,"gx":-229,"gy":-968,"gz":-512,"freq":0,"oxi":0,"temp":20,"dataHora":"21:12:52 13/05/2024"},
                {"id":834,"pulseiraId":null,"pacienteId":2,"ax":11236,"ay":1864,"az":9356,"gx":1986,"gy":129,"gz":5827,"freq":0,"oxi":0,"temp":20,"dataHora":"21:13:03 13/05/2024"},
                {"id":835,"pulseiraId":null,"pacienteId":2,"ax":14628,"ay":4584,"az":8660,"gx":111,"gy":-397,"gz":135,"freq":60,"oxi":13,"temp":19,"dataHora":"21:13:15 13/05/2024"},
                {"id":836,"pulseiraId":null,"pacienteId":2,"ax":14524,"ay":4736,"az":9140,"gx":92,"gy":-156,"gz":564,"freq":58,"oxi":97,"temp":20,"dataHora":"21:13:27 13/05/2024"},
                {"id":837,"pulseiraId":null,"pacienteId":2,"ax":14656,"ay":4572,"az":8800,"gx":-7,"gy":-255,"gz":493,"freq":64,"oxi":98,"temp":19,"dataHora":"21:13:41 13/05/2024"},
                {"id":838,"pulseiraId":null,"pacienteId":2,"ax":13912,"ay":9072,"az":-3088,"gx":-49,"gy":-256,"gz":271,"freq":64,"oxi":98,"temp":20,"dataHora":"21:13:53 13/05/2024"},
                {"id":839,"pulseiraId":null,"pacienteId":2,"ax":14336,"ay":9840,"az":-1392,"gx":-676,"gy":454,"gz":713,"freq":54,"oxi":98,"temp":20,"dataHora":"21:14:06 13/05/2024"},
                {"id":840,"pulseiraId":null,"pacienteId":2,"ax":14232,"ay":5164,"az":9004,"gx":217,"gy":-443,"gz":11,"freq":54,"oxi":98,"temp":22,"dataHora":"21:14:17 13/05/2024"},
                {"id":841,"pulseiraId":null,"pacienteId":2,"ax":14292,"ay":5248,"az":8944,"gx":-29,"gy":-321,"gz":375,"freq":54,"oxi":98,"temp":22,"dataHora":"21:14:48 13/05/2024"},
                {"id":842,"pulseiraId":null,"pacienteId":2,"ax":14220,"ay":5168,"az":8972,"gx":-71,"gy":-248,"gz":468,"freq":54,"oxi":98,"temp":22,"dataHora":"21:15:02 13/05/2024"},
                {"id":843,"pulseiraId":null,"pacienteId":2,"ax":14180,"ay":5188,"az":9008,"gx":-106,"gy":-328,"gz":455,"freq":54,"oxi":98,"temp":22,"dataHora":"21:15:14 13/05/2024"},
                {"id":844,"pulseiraId":null,"pacienteId":2,"ax":14240,"ay":5180,"az":8876,"gx":-44,"gy":-309,"gz":412,"freq":54,"oxi":98,"temp":22,"dataHora":"21:15:45 13/05/2024"},
                {"id":845,"pulseiraId":null,"pacienteId":2,"ax":14132,"ay":5224,"az":9020,"gx":-72,"gy":-306,"gz":365,"freq":54,"oxi":98,"temp":22,"dataHora":"21:15:57 13/05/2024"},
                {"id":846,"pulseiraId":null,"pacienteId":2,"ax":14172,"ay":5156,"az":9184,"gx":416,"gy":-294,"gz":-227,"freq":54,"oxi":98,"temp":22,"dataHora":"21:16:09 13/05/2024"},
                {"id":847,"pulseiraId":null,"pacienteId":2,"ax":14192,"ay":5220,"az":9144,"gx":54,"gy":-290,"gz":218,"freq":54,"oxi":98,"temp":22,"dataHora":"21:16:23 13/05/2024"},
                {"id":848,"pulseiraId":null,"pacienteId":2,"ax":-1636,"ay":-684,"az":17784,"gx":-380,"gy":-619,"gz":-234,"freq":28,"oxi":98,"temp":22,"dataHora":"21:16:35 13/05/2024"}]
    }

    referenceData = {"labels": ["2024-05-13 07:18:36", "2024-05-13 07:25:12", "2024-05-13 07:31:48", "2024-05-13 07:38:24", "2024-05-13 07:45:00", "2024-05-13 07:51:36", "2024-05-13 07:58:12", "2024-05-13 08:04:48", "2024-05-13 08:11:24", "2024-05-13 08:18:00", "2024-05-13 08:24:36", "2024-05-13 08:31:12", "2024-05-13 08:37:48", "2024-05-13 08:44:24", "2024-05-13 08:51:00", "2024-05-13 08:57:36", "2024-05-13 09:04:12", "2024-05-13 09:10:48", "2024-05-13 09:17:24", "2024-05-13 09:24:00", "2024-05-13 09:30:36", "2024-05-13 09:37:12", "2024-05-13 09:43:48", "2024-05-13 09:50:24", "2024-05-13 09:57:00", "2024-05-13 10:03:36", "2024-05-13 10:10:12", "2024-05-13 10:16:48", "2024-05-13 10:23:24", "2024-05-13 10:30:00", "2024-05-13 10:36:36", "2024-05-13 10:43:12", "2024-05-13 10:49:48", "2024-05-13 10:56:24", "2024-05-13 11:03:00", "2024-05-13 11:09:36", "2024-05-13 11:16:12", "2024-05-13 11:22:48", "2024-05-13 11:29:24", "2024-05-13 11:36:00", "2024-05-13 11:42:36", "2024-05-13 11:49:12", "2024-05-13 11:55:48", "2024-05-13 12:02:24", "2024-05-13 12:09:00", "2024-05-13 12:15:36", "2024-05-13 12:22:12", "2024-05-13 12:28:48", "2024-05-13 12:35:24", "2024-05-13 12:42:00", "2024-05-13 12:48:36", "2024-05-13 12:55:12", "2024-05-13 13:01:48", "2024-05-13 13:08:24", "2024-05-13 13:15:00", "2024-05-13 13:21:36", "2024-05-13 13:28:12", "2024-05-13 13:34:48", "2024-05-13 13:41:24", "2024-05-13 13:48:00", "2024-05-13 13:54:36", "2024-05-13 14:01:12", "2024-05-13 14:07:48", "2024-05-13 14:14:24", "2024-05-13 14:21:00", "2024-05-13 14:27:36", "2024-05-13 14:34:12", "2024-05-13 14:40:48", "2024-05-13 14:47:24", "2024-05-13 14:54:00", "2024-05-13 15:00:36", "2024-05-13 15:07:12", "2024-05-13 15:13:48", "2024-05-13 15:20:24", "2024-05-13 15:27:00", "2024-05-13 15:33:36", "2024-05-13 15:40:12", "2024-05-13 15:46:48", "2024-05-13 15:53:24", "2024-05-13 16:00:00", "2024-05-13 16:06:36", "2024-05-13 16:13:12", "2024-05-13 16:19:48", "2024-05-13 16:26:24", "2024-05-13 16:33:00", "2024-05-13 16:39:36", "2024-05-13 16:46:12", "2024-05-13 16:52:48", "2024-05-13 16:59:24", "2024-05-13 17:06:00", "2024-05-13 17:12:36", "2024-05-13 17:19:12", "2024-05-13 17:25:48", "2024-05-13 17:32:24", "2024-05-13 17:39:00", "2024-05-13 17:45:36", "2024-05-13 17:52:12", "2024-05-13 17:58:48", "2024-05-13 18:05:24", "2024-05-13 18:12:00"], "dados": [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0]]}

/*
    console.log(dataTotal);
	dataTotal = await dataTotal.json();
	console.log(dataTotal);

	myChart.data.labels = dataTotal.labels;
	myChart.data.datasets[0].data = [];
	myChart.data.datasets[1].data = [];
	myChart.data.datasets[2].data = [];

	dataTotal.dados.forEach((lista) => {
		myChart.data.datasets[0].data.push(lista[0]);
		myChart.data.datasets[1].data.push(lista[2]);
		myChart.data.datasets[2].data.push(lista[1]);
	});
*/

    

    
    let data = [];
    let dataD = []
    let labels = []

    switch (gParametro){
        case "Oxigenação":
            await dataTotal.forEach((d) => {

                if (d.oxi > 10){
                    labels.push(d.dataHora);
                    data.push(d.oxi);
                    dataD.push({"t": d.dataHora, "d": d.oxi});
                }
            });
        break;
        case "Freq. Cardiaca":
            await dataTotal.forEach((d) => {

                if (d.freq > 10){
                    labels.push(d.dataHora);
                    data.push(d.freq);
                    dataD.push({"t": d.dataHora, "d": d.freq});
                }
            });
            break;
        case "Acelerometro":
            await dataTotal.forEach((d) => {
                labels.push(d.dataHora);
                let dd = Math.max.apply(null, [Math.abs(d.ax), Math.abs(d.ay), Math.abs(d.az)])
                data.push(dd);
                dataD.push({"t": d.dataHora, "d": dd});
            });
            break;
        case "Giroscópio":
            await dataTotal.forEach((d) => {

                labels.push(d.dataHora);
                dd = Math.max(Math.abs(d.gx), Math.abs(d.gy), Math.abs(d.gz))
                data.push(dd);
                dataD.push({"t": d.dataHora, "d": dd});
            });
            break;
        case "Temperatura":
            await dataTotal.forEach((d) => {

                if (d.temp > 10){
                    labels.push(d.dataHora);
                    data.push(d.temp)
                    dataD.push({"t": d.dataHora, "d": d.temp});
                }
            });
            break;
        
        default:

    }


    let dataInicial = new Date(gData + " " + gHoraInicio);
    let dataFinal = new Date(gData + " " + gHoraFinal);

    let tamanhoEmSegundos = dataFinal.getTime() - dataInicial.getTime();
    let tamanhoDoBloco = tamanhoEmSegundos / gResolucao;

    let mSInicial = dataInicial.getTime()

    for (let i = 0; i <= gResolucao; i++){
        let tempoInicial= mSInicial + (i * tamanhoEmSegundos)
        let tempoFinal= mSInicial + ((i+1) * tamanhoEmSegundos) 
        let dataHora_ = new Date(tempoInicial);
        labels.push(dataHora_); 
    }

    let index = 0;
    let dataHoraBloco = new Date(labels[0])
    
    let soma = 0
    let media = 0
    let maximo = 0
    let n = 0
    let minimo = Infinity

    let dataMMM = [[],[],[], []];

    console.log(dataD)

    for (let i = 0; i < dataD.length; i ++){

        console.log(i);
        console.log(index);

        if (index >= labels.length){
            break
        }
        console.log(dataD[i]["t"])
        //let dataHora_ = new Date(dataD[i]["t"])

        let dataString = dataD[i]["t"];
        let partes = dataString.split(" ");
        let dataPartes = partes[1].split("/");
        let novaDataString = `${dataPartes[1]}/${dataPartes[0]}/${dataPartes[2]} ${partes[0]}`;
        let dataHora_ = new Date(novaDataString);
        console.log(data);

        console.log(dataHora_)
        console.log(tamanhoDoBloco)
        console.log(dataHoraBloco.getTime())
        
        while(dataHora_.getTime() > dataHoraBloco.getTime() + tamanhoDoBloco){
            
            if (n>0){
                dataMMM[0].push(maximo)
                dataMMM[1].push(soma/ n)
                dataMMM[2].push(minimo)
                dataMMM[3].push(labels[index])
            } else{
                dataMMM[0].push(null)
                dataMMM[1].push(null)
                dataMMM[2].push(null)
                dataMMM[3].push(labels[index])
                //dataMMM.push([null, null, null, labels[index]])
            }
            index ++;
            dataHoraBloco = new Date(labels[index]);
            let soma = 0
            let media = 0
            let maximo = 0
            n = 0
            let minimo = Infinity
        }

        soma += dataD[i]['d']
        if (dataD[i]["d"] > maximo){
            maximo = dataD[i]["d"]
        }
        if (dataD[i]["d"] < minimo){
            minimo = dataD[i]["d"]
        }
        n++
        
    } 
    console.log(dataMMM)

    myChart.data.datasets[0].data = dataMMM[0];
    myChart.data.datasets[1].data = dataMMM[1];
    myChart.data.datasets[2].data = dataMMM[2];
    myChart.data.labels = labels;

	myChart.update();

}

	
let xGrafico = 0;
let dataGrafico = [];
let timeGrafico = [];

let ctx = document.getElementById('grafico').getContext('2d');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: timeGrafico,
        datasets: [{
            label: "Máximo",
            data: [],
            fill: false,
            pointRadius: 1,
            backgroundColor: 'rgba(86, 144, 92, 0.3)',
            borderColor: 'rgba(86, 144, 92, 1)',
            borderWidth: 1
        },
        {
            label: "Mínimo",
            data: [],
            fill: false,
            pointRadius: 1,
            backgroundColor: 'rgba(184, 135, 64, 0.3)',
            borderColor: 'rgba(184, 135, 64, 1)',
            borderWidth: 1
        },
        {
            label: "Média",
            data: [],
            fill: false,
            pointRadius: 1,
            backgroundColor: 'rgba(87, 104, 135, 0.3)',
            borderColor: 'rgba(87, 104, 135, 1)',
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                },
                gridLines: {
                	color: 'rgba(20, 20, 20, 0.5)'
                }
            }],
            xAxes: [{
            	gridLines: {
                	color: 'rgba(20, 20, 20, 0.5)'
                }
            }]
        }
    }
});
