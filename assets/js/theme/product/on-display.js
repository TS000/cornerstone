import $ from 'jquery';

export default function onDisplay() {
	$('.card-img-container img').each(function(i){
      var imgAlt = this.alt;
      // console.log(imgAlt);

        if(imgAlt.indexOf("ondisplay") > -1){
        $('.productGrid .instore-banner').show();
            }
        });
}
