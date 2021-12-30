$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    closeSection();
    ///#region
    /*
    *** This File Script Codeing </> By Youssef Apiwi
    *** Contact me : https://t.me/Apiwi
    *** E-mail : YoussefApiwi48@gmial.com
    */
    //#endregion
    $('#media').carousel({
      pause: true,
      interval: false,
    });



    /* calcul somme metrage */
    var metrage = document.getElementById("metrage");
    metrage.addEventListener("keyup", function(){
        let metrage = $("#metrage").val();
        let montent = $("#devis");
        montent.val(eval(metrage * 1290) + " MAD");
    });

    /* Test Checked Votre Choix */
    $(".slide input[type='checkbox']").on("change", function(){
      if($(this).prop("checked"))
      {
        $(this).next("label").find(".votre-choix").hide();
        verifecationCommande();
      }else
      {
        $(this).next("label").find(".votre-choix").show();
      }
        
    });
    /* Button Click On Auther Page */
    $("input[type='button']").on("click", function(){
      $(".main").hide();
      $("#section-"+this.name).fadeIn(200,function(){
          $(this).removeClass("d-none");
          $("#home").show();
      });
    });

    /* Slider New */
    $('.btn_slider').click(function () {
      if ($(this).hasClass('next_btn')) {
        $('.slider').carousel('next');
      } 
      if ($(this).hasClass('previous_btn')) {
        $('.slider').carousel('prev');
      }
    });
    /* Shwing box col-md-6 after click link */
    $(".badge").on("click",function(){
      $(this).parents(".col-box").removeClass("offset-lg-3");
      $(".list-img").removeClass("d-xl-block");
    });

    /* Loading */
    window.onload = setTimeout(function () {
          document.body.style.overflow = "auto";
            document.getElementById("preloader").style.display = "none";

          /* Start Form Information */
          $.confirm({
            columnClass: 'medium',
            title: 'Entrer des informations',
            content: $("#model-info").html(),
            closeIcon: true,
            type: 'orange',
            typeAnimated: true,
            buttons: {
              warning: {
                text: "Validation",
                btnClass: 'btn-warning',
                action:function(){
                    var re = /^([\w'-']+(?:\.[\w'-']+)*)@((?:[\w'-']+\.)*\w[\w'-']{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    var obj = this.$content.find('input');
                      for (let i = 0; i <obj.length; i++) {
                        if(!this.$content.find(obj[i]).val()){
                          $.alert('Le doit être entré (' + this.$content.find(obj[i]).attr("name") + ') <span class="text-danger">*</span>');
                          return false;
                        }
                        if (this.$content.find(obj[i]).val() != '' && this.$content.find(obj[i]).attr('name') === "metrage") {
                          this.$content.find("#devis").val(eval(this.$content.find(obj[i]).val() * 1290) + " MAD");
                        }
                        if (this.$content.find(obj[i]).attr("name") == 'email'){
                          if(!re.test(this.$content.find(obj[i]).val()))
                          {
                            $.alert("L'email que vous avez entré est incorrect");
                            this.$content.find("#"+this.$content.find(obj[i]).attr('id')).focuse();
                            return false;
                          }
                        }
                      }
                    $.alert("Merci beaucoup, Bienvenue chez nouveau confort design");
                    $("#model-info").html(this.$content);
                  }            
                }
            },
            onContentReady:function(){
              const montent = this.$content.find("#devis");
              this.$content.find("#metrage").on('keyup', function(){
                montent.val(eval(this.value * 1290) + " MAD");
              });
            }
          });
          /* End Form Information */

        },600);
});
/* Close All Section index,elem */
function closeSection(){
  $("section").each(function(){
    $(this).addClass("d-none");
    $(".tab-hide-after").removeClass("active").removeClass("show");
    $(this).find(".col-box").addClass("offset-lg-3");
    $(".list-img").addClass("d-xl-block");
  });
  $(".main").show();
  $("#home").hide();
  verifecationCommande();
}
/* Validation Commande */
function verifecationCommande()
{
  var cpt = 0;
  $("input[type='checkbox']").each(function(index,item){
    if (item.checked) {
      cpt++;
    }
  });
  if (cpt >= 1 && $("#nom").val() != '') {
    $("#btn-confierm").removeClass("d-none");
  }
}