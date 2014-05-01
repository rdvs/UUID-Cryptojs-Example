function get_key(id) 
{
	jQuery.ajax({
		type: "POST",
		url: 'PATH',/*Here we have to pass url of keygen of encryption*/
		beforeSend: function(){
			
		},
		complete: function(){},
		success: function(response){
			alert("Key:"+response);
			var msg = "Hey Rahulll";
			var encrypted = CryptoJS.AES.encrypt(msg, response);
			alert("Encrypted:"+encrypted);
			var decrypted = CryptoJS.AES.decrypt(encrypted, response);
			alert("Decrypted:"+decrypted.toString(CryptoJS.enc.Utf8));			
		},
     error:function(response){
          alert('failure : '+response.status);
		  alert('failure : '+response.message);
      }
	});
}
