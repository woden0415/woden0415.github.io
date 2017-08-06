;$(function(){
  $(document).on("click", ".contact-btn", function(){
    layer.open({
      type: 1,
      title: 'Contact Us',
      maxWidth: '560px',
      area: 'auto',
      shadeClose: true,
      content:
      '<div class="contact-content formtab">'+
        '<form class="JsForm" action="" method="post">'+
          '<div class="formstyle">'+
            '<h3>如有相关业务问题，请联系如下邮箱</h3>'+
            '<em>mailto:media@gtjas.com</em>'+
            '<h3 class="note-title">您也可以给我们留言：</h3>'+
            '<div class="item">'+
              '<span class="left"><i>*</i>Your Email</span>'+
              '<span class="right inputxt">'+
                '<input type="text" name="email" data-valid-list data-type="email" placeholder="your email.." required="required">'+
              '</span>'+
            '</div>'+
            '<div class="item">'+
              '<span class="left"><i>*</i>Message</span>'+
              '<span class="right inputxt">'+
                '<textarea name="noteDetail" type="text" data-valid-list data-type="noEmpty" v-model="noteDetail" maxlength="150" required="required" placeholder="more details...">'+
                '</textarea>'+
              '</span>'+
              '<!-- <span class="leftWordNum">还可以输入<b style="color: red">{{leftWordNum}}</b></span> -->'+
            '</div>'+
            '<div class="formfoot">'+
              '<input id="submitButton" type="button" data-sub="true" value="立即申请">'+
            '</div>'+
          '</div>'+
        '</form>'+
      '</div>'
    });
  });
});