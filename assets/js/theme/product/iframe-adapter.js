import $ from 'jquery';

export default function iFrameAdapter() {
    function stripDown(string) {
        return string.replace(/\s+/g, '');
    };
    var title = $(".form-title").text();
    var sku = $(".form-sku").text();
    var stripTitle = stripDown(title);
    var stripSku = stripDown(sku);
    var iFrameSRC = 'http://southern-lights.madwirebuild2.com/form/?url=' + stripTitle + '&prod=' + stripTitle + '&sku=' + stripSku;
    $('#checkModal iframe').attr('src', iFrameSRC);
}
